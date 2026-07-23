"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart2, Clock, Network, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: BarChart2,
    title: "Disciplined Investment",
    description:
      "We apply rigorous financial analysis and market research to every acquisition. Our structured underwriting process ensures we invest only in properties that meet our strict return criteria and risk thresholds.",
  },
  {
    icon: Clock,
    title: "Long-Term Value",
    description:
      "We are patient, conviction-driven investors. Our strategy is built around holding high-quality assets through cycles — growing income streams and building durable equity value over time.",
  },
  {
    icon: Network,
    title: "Strategic Partnerships",
    description:
      "We co-invest alongside institutional partners, family offices, and high-net-worth individuals. Our alignment of interests ensures that every party benefits from the outcomes we create.",
  },
];

export default function Approach() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="approach"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#FAFAF8" }}
      aria-label="Investment approach"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ backgroundColor: "#C89B3C" }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{
                color: "#C89B3C",
                fontFamily: "Inter, system-ui, sans-serif",
                letterSpacing: "0.18em",
              }}
            >
              Our Philosophy
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl mb-5"
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              color: "#0F172A",
              fontWeight: 700,
              lineHeight: "1.1",
            }}
          >
            Investment Approach
          </h2>
          <p
            className="text-base lg:text-lg"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              color: "#6B7280",
              lineHeight: "1.7",
            }}
          >
            Our approach combines financial discipline, operational excellence,
            and long-term thinking to generate consistent, risk-adjusted returns
            for our investors.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.65, ease: "easeOut" },
                  },
                }}
                className="group bg-white p-8 flex flex-col gap-5 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]"
                style={{ borderRadius: "2px" }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ color: "#C89B3C" }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                {/* Gold accent line */}
                <div
                  className="w-8 h-px"
                  style={{ backgroundColor: "#C89B3C" }}
                />

                {/* Title */}
                <h3
                  className="text-xl font-semibold"
                  style={{
                    fontFamily: "Playfair Display, Georgia, serif",
                    color: "#0F172A",
                    fontWeight: 600,
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    color: "#6B7280",
                    lineHeight: "1.75",
                  }}
                >
                  {card.description}
                </p>

                {/* Read More */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all duration-200"
                  style={{
                    color: "#0F172A",
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Read More
                  <ArrowRight size={13} />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
