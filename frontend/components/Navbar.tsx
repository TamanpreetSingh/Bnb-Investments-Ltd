"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Investment Strategy", href: "#approach" },
  { label: "Projects", href: "#sectors" },
  { label: "Investors", href: "#why-choose" },
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

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group"
              aria-label="BNB Investments Ltd home"
            >
              <div className="w-8 h-8 flex items-end justify-center">
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
                  className="font-serif text-base font-600 tracking-tight text-navy"
                  style={{
                    fontFamily: "Playfair Display, Georgia, serif",
                    color: "#0F172A",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  BNB Investments
                </span>
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    color: "#C89B3C",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    fontSize: "9px",
                  }}
                >
                  Ltd.
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 group py-1"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: "13.5px",
                    letterSpacing: "0.01em",
                  }}
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-px bg-[#C89B3C] group-hover:w-full transition-all duration-300"
                  />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                onClick={() => handleNavClick("#contact")}
                className="px-5 py-2.5 text-sm font-medium text-white transition-all duration-200"
                style={{
                  backgroundColor: "#C89B3C",
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: "13.5px",
                  letterSpacing: "0.02em",
                }}
                aria-label="Get in touch with BNB Investments"
              >
                Get in Touch
              </motion.button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 -mr-2 text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-lg lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-base font-medium text-gray-800 py-2 border-b border-gray-50 hover:text-[#C89B3C] transition-colors"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {item.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 w-full py-3 text-sm font-medium text-white bg-[#C89B3C] transition-all"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
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
