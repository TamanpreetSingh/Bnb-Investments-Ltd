import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BNB Investments Ltd. | Commercial Real Estate Investment Canada",
  description:
    "BNB Investments Ltd. is a Canadian investment company specializing in commercial real estate investments, property development, and asset management across Canada.",
  keywords: [
    "commercial real estate Canada",
    "investment company Canada",
    "property development",
    "asset management",
    "office investments",
    "industrial real estate",
    "mixed-use development",
    "BNB Investments",
  ],
  authors: [{ name: "BNB Investments Ltd." }],
  openGraph: {
    title: "BNB Investments Ltd. | Commercial Real Estate Investment Canada",
    description:
      "Investing, developing and managing premium commercial properties across Canada.",
    type: "website",
    locale: "en_CA",
    siteName: "BNB Investments Ltd.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BNB Investments Ltd. | Commercial Real Estate",
    description:
      "Investing, developing and managing premium commercial properties across Canada.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
