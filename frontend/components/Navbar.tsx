"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About Us", href: "#about" },
  { label: "Our Focus", href: "#sectors" },
  { label: "Our Approach", href: "#approach" },
  { label: "Projects", href: "#sectors" },
  { label: "Investors", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white border-b border-gray-100"
          }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-14 xl:px-20">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-left focus:outline-none bg-transparent border-none cursor-pointer"
              style={{ paddingLeft: "24px" }}
              aria-label="BNB Investments Ltd"
            >
              <div className="h-9 sm:h-10 w-auto flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/BNB-logo.png"
                  alt="BNB Investments Ltd Emblem"
                  width={100}
                  height={40}
                  className="h-full w-auto object-contain"
                  unoptimized
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#0F172A]">
                  BNB
                </span>
                <span className="text-[8.5px] sm:text-[9px] font-semibold tracking-[0.14em] uppercase text-gray-500">
                  INVESTMENTS LTD.
                </span>
              </div>
            </button>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="bg-transparent border-none p-0 cursor-pointer text-xs font-semibold text-gray-700 hover:text-[#C89B3C] transition-colors duration-200"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollTo("#enquiry")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "11px 24px",
                  backgroundColor: "#0F172A",
                  color: "#FFFFFF",
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  border: "none",
                  borderRadius: "0px",
                  cursor: "pointer",
                }}
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <button
              className="lg:hidden p-2 text-gray-700 focus:outline-none bg-transparent border-none cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-xl lg:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="text-left text-sm font-semibold text-gray-800 py-2 border-b border-gray-100 hover:text-[#C89B3C] bg-transparent border-x-0 border-t-0 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#enquiry")}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "12px 20px",
                  backgroundColor: "#0F172A",
                  color: "#FFFFFF",
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "0px",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
