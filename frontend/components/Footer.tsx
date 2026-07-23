"use client";

import { motion } from "framer-motion";

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#sectors" },
  { label: "Investors", href: "#why-choose" },
  { label: "Contact", href: "#contact" },
];

const sectorLinks = [
  { label: "Office", href: "#sectors" },
  { label: "Retail", href: "#sectors" },
  { label: "Industrial", href: "#sectors" },
  { label: "Mixed Use", href: "#sectors" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="bg-white border-t border-gray-100"
      aria-label="Site footer"
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3" aria-label="BNB Investments Ltd home">
              <div className="w-7 h-7">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <rect width="10" height="32" rx="1" fill="#0F172A" />
                  <rect x="22" width="10" height="32" rx="1" fill="#0F172A" />
                  <rect x="10" y="10" width="12" height="12" rx="1" fill="#C89B3C" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  style={{
                    fontFamily: "Playfair Display, Georgia, serif",
                    color: "#0F172A",
                    fontWeight: 600,
                    fontSize: "14px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  BNB Investments
                </span>
                <span
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    color: "#C89B3C",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    fontSize: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  Ltd.
                </span>
              </div>
            </a>

            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                color: "#6B7280",
                lineHeight: "1.7",
              }}
            >
              A Canadian investment company specializing in commercial real
              estate — investing, developing, and managing premium properties
              across Canada.
            </p>

            {/* Gold accent */}
            <div
              className="w-8 h-px mt-2"
              style={{ backgroundColor: "#C89B3C" }}
            />
          </div>

          {/* Column 2 — Company */}
          <div className="flex flex-col gap-5">
            <h3
              className="text-xs font-semibold uppercase tracking-widest"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                color: "#0F172A",
                letterSpacing: "0.14em",
              }}
            >
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm hover:text-[#C89B3C] transition-colors duration-200 text-left"
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      color: "#6B7280",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Investment Sectors */}
          <div className="flex flex-col gap-5">
            <h3
              className="text-xs font-semibold uppercase tracking-widest"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                color: "#0F172A",
                letterSpacing: "0.14em",
              }}
            >
              Investment Sectors
            </h3>
            <ul className="flex flex-col gap-3">
              {sectorLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm hover:text-[#C89B3C] transition-colors duration-200 text-left"
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      color: "#6B7280",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — CTA */}
          <div className="flex flex-col gap-5">
            <h3
              className="text-xs font-semibold uppercase tracking-widest"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                color: "#0F172A",
                letterSpacing: "0.14em",
              }}
            >
              Partner With Us
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                color: "#6B7280",
                lineHeight: "1.7",
              }}
            >
              Explore co-investment opportunities and development partnerships
              with BNB Investments Ltd.
            </p>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={() => scrollTo("#contact")}
              className="self-start px-5 py-2.5 text-sm font-medium text-white transition-all duration-200"
              style={{
                backgroundColor: "#C89B3C",
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              Partner With Us
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              color: "#9CA3AF",
            }}
          >
            © {new Date().getFullYear()} BNB Investments Ltd. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs hover:text-[#C89B3C] transition-colors duration-200"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  color: "#9CA3AF",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
