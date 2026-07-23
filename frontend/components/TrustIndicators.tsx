"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Layers, Handshake, MapPin } from "lucide-react";

const indicators = [
  {
    icon: TrendingUp,
    title: "Strategic Investments",
    description:
      "We identify and acquire high-potential commercial assets across key Canadian markets, applying rigorous due diligence and disciplined capital allocation.",
  },
  {
    icon: Layers,
    title: "Value Creation",
    description:
      "Through active asset management, targeted capital improvements, and strategic repositioning, we unlock and grow the intrinsic value of every property.",
  },
  {
    icon: Handshake,
    title: "Strong Partnerships",
    description:
      "We cultivate long-term relationships with institutional investors, operators, tenants, and communities — building trust at every level.",
  },
  {
    icon: MapPin,
    title: "Canadian Focus",
    description:
      "Deeply rooted in Canada's commercial real estate landscape, we bring local expertise and national reach to every investment decision.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TrustIndicators() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="trust"
      className="bg-white border-t border-b border-gray-100"
      aria-label="Trust indicators"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
        >
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className={`flex flex-col gap-4 px-8 py-10 ${
                  index < indicators.length - 1
                    ? "lg:border-r border-gray-100"
                    : ""
                } ${index < 2 ? "sm:border-b lg:border-b-0 border-gray-100" : ""}`}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ color: "#C89B3C" }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <h3
                  className="text-lg font-semibold"
                  style={{
                    fontFamily: "Playfair Display, Georgia, serif",
                    color: "#0F172A",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    color: "#6B7280",
                    lineHeight: "1.7",
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
