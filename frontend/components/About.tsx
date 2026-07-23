"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "$200M+", label: "Assets Managed" },
  { value: "10+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#FAFAF8" }}
      aria-label="About BNB Investments"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center"
        >
          {/* Left — Text */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-6 h-px" style={{ backgroundColor: "#C89B3C" }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{
                  color: "#C89B3C",
                  fontFamily: "Inter, system-ui, sans-serif",
                  letterSpacing: "0.18em",
                }}
              >
                Who We Are
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="text-4xl lg:text-5xl xl:text-6xl leading-tight mb-8"
              style={{
                fontFamily: "Playfair Display, Georgia, serif",
                color: "#0F172A",
                fontWeight: 700,
              }}
            >
              Experience.
              <br />
              <em style={{ fontStyle: "italic", color: "#C89B3C" }}>Focus.</em>
              <br />
              Results.
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="text-base lg:text-lg leading-relaxed mb-6 max-w-lg"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                color: "#4B5563",
                lineHeight: "1.75",
              }}
            >
              Founded on a commitment to disciplined investment and long-term
              value creation, BNB Investments Ltd. has built a proven track
              record across Canada&rsquo;s commercial real estate markets.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="text-base leading-relaxed mb-10 max-w-lg"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                color: "#4B5563",
                lineHeight: "1.75",
              }}
            >
              Our team brings together deep expertise in acquisition, development,
              and asset management — delivering consistent results for investors
              while enriching the communities we operate in.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.28 }}
            >
              <motion.a
                href="#approach"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="inline-flex items-center gap-2 text-sm font-medium group"
                style={{
                  color: "#0F172A",
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#approach")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span
                  className="pb-0.5 border-b"
                  style={{ borderColor: "#C89B3C" }}
                >
                  Learn More
                </span>
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Right — Image + Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative"
          >
            <div
              className="overflow-hidden"
              style={{
                borderRadius: "4px",
                boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src="/images/lobby.png"
                alt="Premium commercial office lobby — BNB Investments Ltd property"
                width={800}
                height={900}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "4/4.5", objectFit: "cover" }}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating Statistics Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="absolute -bottom-8 -left-8 bg-white p-7"
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                borderRadius: "2px",
                minWidth: "260px",
              }}
            >
              <div className="flex gap-6">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col ${
                      i < stats.length - 1
                        ? "border-r border-gray-100 pr-6"
                        : ""
                    }`}
                  >
                    <span
                      className="text-2xl font-bold"
                      style={{
                        fontFamily: "Playfair Display, Georgia, serif",
                        color: "#0F172A",
                        fontWeight: 700,
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-xs mt-0.5"
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        color: "#6B7280",
                        lineHeight: "1.4",
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="absolute top-0 left-0 w-8 h-1"
                style={{ backgroundColor: "#C89B3C" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
