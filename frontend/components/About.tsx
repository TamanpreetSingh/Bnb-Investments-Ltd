"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative w-full bg-white py-32 lg:py-44 overflow-hidden min-h-[560px] lg:min-h-[640px] flex items-center border-b border-gray-200/70"
      aria-label="About BNB Investments"
    >
      {/* Left Text Container matching Hero section padding exactly */}
      <div className="w-full relative z-10 flex items-center">
        <div style={{ paddingLeft: "clamp(32px, 6vw, 96px)", paddingRight: "24px", width: "50%" }}>
          <div ref={ref} className="max-w-[480px] flex flex-col">

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase mb-4 text-[#C89B3C]"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              ABOUT BNB INVESTMENTS LTD.
            </motion.p>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] mb-4 text-[#0F172A]"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Enduring Value.
              <br />
              Stronger Communities.
            </motion.h2>

            {/* Gold Accent Divider Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.14 }}
              style={{ width: "40px", height: "2px", backgroundColor: "#C89B3C", marginBottom: "24px" }}
            />

            {/* Short Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-8 max-w-sm"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              BNB Investments Ltd. invests in and develops commercial properties that
              deliver long-term value for investors, tenants, and the communities we serve.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#sectors")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "13px 30px",
                  backgroundColor: "#0F172A",
                  color: "#FFFFFF",
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  border: "none",
                  borderRadius: "2px",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(15, 23, 42, 0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                <span>OUR INVESTMENTS</span>
                <ArrowRight size={14} />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  backgroundColor: "#C89B3C",
                  borderColor: "#C89B3C",
                  color: "#0F172A",
                  boxShadow: "0 0 25px rgba(200, 155, 60, 0.6), 0 4px 15px rgba(200, 155, 60, 0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#enquiry")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  backgroundColor: "#FFFFFF",
                  color: "#0F172A",
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  border: "2px solid #0F172A",
                  borderRadius: "2px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <span>PARTNER WITH US</span>
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Desktop Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="hidden lg:block absolute top-0 right-0 bottom-0 z-0"
        style={{ left: "44%" }}
      >
        <Image
          src="/images/lobby.png"
          alt="BNB Investments Ltd luxury commercial lobby interior"
          fill
          className="object-cover object-center"
          sizes="56vw"
        />
        <div
          className="absolute inset-y-0 left-0 pointer-events-none"
          style={{ width: "120px", background: "linear-gradient(to right, white, transparent)" }}
        />
      </motion.div>
    </section>
  );
}
