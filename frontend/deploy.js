const ftp = require("basic-ftp");
const path = require("path");
const fs = require("fs");

// Helper to parse environment variables from a file manually
function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, "utf-8");
  const config = {};
  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const match = trimmed.match(/^([^=]+)=(.*)$/);
    if (match) {
      let key = match[1].trim();
      let value = match[2].trim();
      // Remove surrounding quotes if any
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      config[key] = value;
    }
  });
  return config;
}

async function deploy() {
  const envPath = path.join(__dirname, ".env.production");
  if (!fs.existsSync(envPath)) {
    console.error("Error: Local '.env.production' file not found.");
    console.error("Please copy '.env.production.example' to '.env.production' and enter your Hostinger FTP credentials.");
    process.exit(1);
  }

  const env = loadEnv(envPath);
  let host = env.FTP_HOST || "";
  
  // Clean host parameter (remove protocol prefixes, trailing paths, or ports)
  host = host.replace(/^ftps?:\/\//i, ""); // Strip ftp:// or ftps://
  host = host.split("/")[0];              // Strip trailing path segments if any
  host = host.split(":")[0];              // Strip port if specified inside host variable

  const port = env.FTP_PORT ? parseInt(env.FTP_PORT, 10) : 21;
  const user = env.FTP_USER;
  const password = env.FTP_PASS;
  const remotePath = env.FTP_REMOTE_PATH || "/public_html";

  if (!host || !user || !password) {
    console.error("Error: Missing FTP credentials in '.env.production'.");
    console.error("Make sure FTP_HOST, FTP_USER, and FTP_PASS are defined.");
    process.exit(1);
  }

  const localDir = path.join(__dirname, "out");
  if (!fs.existsSync(localDir)) {
    console.error("Error: Static build folder 'out' not found.");
    console.error("Please run 'npm run build' first to build the project.");
    process.exit(1);
  }

  const client = new ftp.Client();
  client.ftp.verbose = true; // Log FTP actions to console

  try {
    console.log(`Connecting to FTP host: ${host}:${port}...`);
    await client.access({
      host,
      port,
      user,
      password,
      secure: false // Hostinger standard FTP is secure: false. Change to true or use "implicit" if you configure FTP over TLS (FTPS).
    });

    console.log(`Successfully connected. Changing remote directory to: ${remotePath}...`);
    try {
      await client.ensureDir(remotePath);
    } catch (err) {
      console.warn(`Warning: Could not navigate to directory ${remotePath}, uploading to current folder.`);
    }

    // Check for conflicting index files (index.php, default.php)
    try {
      const list = await client.list();
      const conflictFiles = ["index.php", "default.php"];
      for (const file of list) {
        if (conflictFiles.includes(file.name.toLowerCase())) {
          const backupName = `${file.name}.backup`;
          console.log(`Conflict detected: Remote file '${file.name}' found. Renaming to '${backupName}' so that index.html is served...`);
          try {
            // Remove existing backup if present
            await client.remove(backupName).catch(() => {});
            await client.rename(file.name, backupName);
            console.log(`Successfully renamed '${file.name}' to '${backupName}'.`);
          } catch (renameErr) {
            console.warn(`Could not rename '${file.name}':`, renameErr.message);
          }
        }
      }
    } catch (checkErr) {
      console.warn("Could not check/rename remote files for conflicts:", checkErr.message);
    }

    console.log(`Starting upload of static files from '${localDir}' to Hostinger '${remotePath}'...`);
    await client.uploadFromDir(localDir);

    console.log("==================================================");
    console.log("🎉 SUCCESS! Your website has been deployed successfully to Hostinger.");
    console.log("Check it out at: https://bnbinvestmentsltd.com/");
    console.log("==================================================");

  } catch (err) {
    console.error("Deployment failed with error:", err);
  } finally {
    client.close();
  }
}

deploy();
