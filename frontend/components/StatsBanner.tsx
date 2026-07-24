"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar, Award, Target } from "lucide-react";

const stats = [
  {
    icon: Building2,
    number: "$200M+",
    label: "Assets Under Management",
  },
  {
    icon: Calendar,
    number: "10+",
    label: "Years of Experience",
  },
  {
    icon: Award,
    number: "15+",
    label: "Successful Projects",
  },
  {
    icon: Target,
    number: "Long-Term",
    label: "Vision. Value. Impact.",
  },
];

export default function StatsBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="bg-[#0F172A] py-8 border-y border-white/10" aria-label="Key Statistics">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`flex items-center gap-4 px-4 lg:px-8 py-2 ${
                  index < stats.length - 1
                    ? "lg:border-r lg:border-white/10"
                    : ""
                }`}
              >
                <div className="w-10 h-10 rounded-sm border border-[#C89B3C]/40 flex items-center justify-center text-[#C89B3C] flex-shrink-0 bg-[#C89B3C]/10">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-xl sm:text-2xl font-bold text-white leading-tight"
                    style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                  >
                    {stat.number}
                  </span>
                  <span
                    className="text-[11px] text-gray-400 font-medium"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
