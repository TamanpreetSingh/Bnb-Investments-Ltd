"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, TrendingUp, Handshake, History } from "lucide-react";

const indicators = [
  {
    icon: Building2,
    title: "Strategic Investments",
    description:
      "We target high-potential commercial properties in thriving markets across Canada.",
  },
  {
    icon: TrendingUp,
    title: "Value Creation",
    description:
      "Through smart development and active management, we unlock long-term value.",
  },
  {
    icon: Handshake,
    title: "Strong Partnerships",
    description:
      "We build lasting relationships with investors, tenants, and communities based on trust and transparency.",
  },
  {
    icon: History,
    title: "Estd. 2006",
    description:
      "Proven track record in Commercial Real Estate and Property Development since 2006.",
  },
];

export default function TrustIndicators() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="bg-[#FAFAF8] py-28 lg:py-36 border-t border-b border-gray-200/70" aria-label="Trust indicators">
      <div className="w-full pl-8 sm:pl-10 lg:pl-12 xl:pl-16 pr-0">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full items-stretch"
        >
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`flex flex-col items-center justify-start text-center px-6 lg:px-8 py-10 lg:py-14 w-full ${index < indicators.length - 1
                    ? "lg:border-r lg:border-gray-200/80"
                    : ""
                  }`}
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-4 flex items-center justify-center text-[#C89B3C] flex-shrink-0">
                  <Icon size={38} strokeWidth={1.4} />
                </div>

                {/* Fixed-Height Title Slot */}
                <div className="min-h-[52px] flex items-center justify-center mb-2">
                  <h3
                    className="text-base sm:text-lg font-bold text-[#0F172A] leading-tight text-center"
                    style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Description Paragraph */}
                <p
                  className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[260px]"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
