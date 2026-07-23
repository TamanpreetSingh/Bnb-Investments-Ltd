"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Commercial Expertise",
    description:
      "Over a decade of hands-on experience acquiring, managing, and repositioning commercial assets across Canadian markets.",
  },
  {
    title: "Development Experience",
    description:
      "End-to-end development capabilities — from land acquisition and entitlements through construction management and lease-up.",
  },
  {
    title: "Strong Returns",
    description:
      "A disciplined investment approach focused on risk-adjusted returns, income stability, and long-term capital growth.",
  },
  {
    title: "Trusted Relationships",
    description:
      "Deep relationships with brokers, operators, institutions, and lenders built on integrity, transparency, and consistent performance.",
  },
];

export default function WhyChoose() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-choose"
      className="py-24 lg:py-32 bg-white"
      aria-label="Why choose BNB Investments"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center"
        >
          {/* Left — Text */}
          <div className="order-2 lg:order-1 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-6 h-px"
                  style={{ backgroundColor: "#C89B3C" }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{
                    color: "#C89B3C",
                    fontFamily: "Inter, system-ui, sans-serif",
                    letterSpacing: "0.18em",
                  }}
                >
                  Why BNB
                </span>
              </div>

              <h2
                className="text-4xl lg:text-5xl xl:text-6xl mb-6"
                style={{
                  fontFamily: "Playfair Display, Georgia, serif",
                  color: "#0F172A",
                  fontWeight: 700,
                  lineHeight: "1.1",
                }}
              >
                Why Investors
                <br />
                Choose BNB
              </h2>

              <p
                className="text-base lg:text-lg mb-10 max-w-lg"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  color: "#6B7280",
                  lineHeight: "1.75",
                }}
              >
                We combine the financial discipline of an institutional investor
                with the agility and dedication of a founder-led firm — giving
                our partners the best of both worlds.
              </p>
            </motion.div>

            {/* Points */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="flex flex-col gap-6"
            >
              {points.map((point) => (
                <motion.div
                  key={point.title}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.55,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="flex gap-4"
                >
                  <div
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#C89B3C" }}
                  >
                    <CheckCircle2 size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold mb-1"
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        color: "#0F172A",
                        fontWeight: 600,
                      }}
                    >
                      {point.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        color: "#6B7280",
                        lineHeight: "1.65",
                      }}
                    >
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="order-1 lg:order-2 relative"
          >
            <div
              className="overflow-hidden"
              style={{
                borderRadius: "2px",
                boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src="/images/why-choose.png"
                alt="BNB Investments team in premium Canadian office boardroom"
                width={800}
                height={900}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "4/4.5", objectFit: "cover" }}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Gold accent */}
            <div
              className="absolute top-6 -right-4 w-1 h-24"
              style={{ backgroundColor: "#C89B3C" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
