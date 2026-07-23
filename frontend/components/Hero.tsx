"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: { opacity: 1, scale: 1 },
};

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="hero"
      className="min-h-screen bg-white flex items-center pt-20"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div ref={ref} className="flex flex-col">
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0 }}
              className="flex items-center gap-3 mb-7"
            >
              <div
                className="w-6 h-px"
                style={{ backgroundColor: "#C89B3C" }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{
                  color: "#C89B3C",
                  fontFamily: "Inter, system-ui, sans-serif",
                  letterSpacing: "0.18em",
                }}
              >
                Building Value · Creating Legacies
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight mb-7"
              style={{
                fontFamily: "Playfair Display, Georgia, serif",
                color: "#0F172A",
                fontWeight: 700,
              }}
            >
              Smart{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#C89B3C",
                }}
              >
                Investments.
              </em>
              <br />
              Stronger
              <br />
              Communities.
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base lg:text-lg leading-relaxed mb-10 max-w-md"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                color: "#4B5563",
                fontWeight: 400,
              }}
            >
              BNB Investments Ltd. invests, develops, and manages premium
              commercial properties across Canada — delivering disciplined
              returns and lasting value for our partners and communities.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#sectors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-white transition-all duration-200"
                style={{
                  backgroundColor: "#0F172A",
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#sectors")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Investments
                <ArrowRight size={15} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium transition-all duration-200 border"
                style={{
                  borderColor: "#D1D5DB",
                  color: "#0F172A",
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Users size={15} />
                Partner With Us
              </motion.a>
            </motion.div>

            {/* Small trust line */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="mt-12 flex items-center gap-6 pt-8 border-t border-gray-100"
            >
              {[
                { value: "$200M+", label: "Assets Managed" },
                { value: "10+", label: "Years Experience" },
                { value: "15+", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-xl font-bold"
                    style={{
                      fontFamily: "Playfair Display, Georgia, serif",
                      color: "#0F172A",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      color: "#6B7280",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative w-full"
          >
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "4px",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src="/images/hero-building.png"
                alt="Modern glass office tower — BNB Investments Ltd commercial property"
                width={900}
                height={1050}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "4/4.6", objectFit: "cover" }}
                priority
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
            {/* Gold accent bar */}
            <div
              className="absolute -bottom-4 -left-4 w-20 h-1"
              style={{ backgroundColor: "#C89B3C" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
