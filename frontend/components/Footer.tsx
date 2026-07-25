"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Focus", href: "#sectors" },
  { label: "Our Approach", href: "#approach" },
  { label: "Projects", href: "#sectors" },
  { label: "Investors", href: "#approach" },
  { label: "Contact", href: "#enquiry" },
];

const focusLinks = [
  { label: "Office", href: "#sectors" },
  { label: "Retail", href: "#sectors" },
  { label: "Industrial", href: "#sectors" },
  { label: "Mixed-Use", href: "#sectors" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 border-t border-white/10" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">

          {/* Col 1: Brand */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-left focus:outline-none bg-transparent border-none cursor-pointer"
              style={{ paddingLeft: "24px", paddingRight: "24px" }}
            >
              <div className="h-9 sm:h-10 w-auto flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/BNB-logo.png"
                  alt="BNB Investments Ltd Emblem"
                  width={100}
                  height={40}
                  className="h-full w-auto object-contain"
                  unoptimized
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-white">
                  BNB
                </span>
                <span className="text-[8.5px] sm:text-[9px] font-semibold tracking-[0.14em] uppercase text-gray-400">
                  INVESTMENTS LTD.
                </span>
              </div>
            </button>

            <p
              className="text-xs text-gray-400 leading-relaxed max-w-sm"
              style={{ fontFamily: "Inter, system-ui, sans-serif", paddingLeft: "24px", paddingRight: "24px" }}
            >
              A Canadian investment company focused on creating long-term value
              through strategic commercial real estate investments.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3" style={{ paddingLeft: "24px", paddingRight: "24px" }}>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="bg-transparent border-none p-0 cursor-pointer text-xs text-gray-400 hover:text-[#C89B3C] transition-colors text-left"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Focus */}
          <div className="lg:col-span-2 flex flex-col gap-3" style={{ paddingLeft: "24px", paddingRight: "24px" }}>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Focus
            </h3>
            <ul className="flex flex-col gap-2">
              {focusLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="bg-transparent border-none p-0 cursor-pointer text-xs text-gray-400 hover:text-[#C89B3C] transition-colors text-left"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: For Investors */}
          <div className="lg:col-span-4 flex flex-col gap-4" style={{ paddingLeft: "24px", paddingRight: "24px" }}>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              For Investors
            </h3>
            <p
              className="text-xs text-gray-400 leading-relaxed max-w-sm"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              We partner with investors who value performance, stability, and long-term growth.
            </p>
            <button
              onClick={() => scrollTo("#enquiry")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "12px 26px",
                backgroundColor: "#C89B3C",
                color: "#0F172A",
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                border: "none",
                borderRadius: "2px",
                cursor: "pointer",
                alignSelf: "flex-start",
                boxShadow: "0 4px 12px rgba(200, 155, 60, 0.25)",
                transition: "all 0.3s ease",
              }}
            >
              <span>Partner With Us</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-xs text-gray-500" style={{ paddingLeft: "24px", paddingRight: "24px" }}>
          <p style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            © {new Date().getFullYear()} BNB Investments Ltd. All rights reserved.
          </p>
        </div>

        {/* Agency Attribution */}
        <div className="mt-6 pt-6 border-t border-white/5 text-center text-[11px] text-gray-500" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
          Made with Love ❤️ by <span className="text-white font-semibold">SiraaLabs AI Agency</span> · Website: <a href="https://siraalabs.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C89B3C] transition-colors font-medium">siraalabs.com</a> · Insta: <a href="https://instagram.com/siraalabs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C89B3C] transition-colors font-medium">siraalabs</a>
        </div>

      </div>
    </footer>
  );
}
