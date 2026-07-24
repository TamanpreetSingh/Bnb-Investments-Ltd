"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Award, RefreshCw, TrendingUp, ArrowRight, ShieldCheck, BarChart3, Users2 } from "lucide-react";

export default function ApproachInvestors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="approach" className="bg-white py-32 lg:py-44 border-b border-gray-200/70" aria-label="Our Approach and Investors">
      <div style={{ paddingLeft: "clamp(32px, 6vw, 96px)", paddingRight: "clamp(32px, 6vw, 96px)", width: "100%" }}>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">

          {/* Left Card: Our Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-[#0F172A] p-10 sm:p-12 lg:p-14 rounded-2xl text-white flex flex-col justify-between shadow-2xl border border-white/10"
          >
            <div style={{ paddingLeft: "24px", paddingRight: "24px" }}>
              <h2
                className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Our Approach
              </h2>
              
              <div className="pt-8">
                <div className="w-12 h-[2px] bg-[#C89B3C]" />
              </div>

              <p
                className="text-sm sm:text-base text-gray-300 leading-relaxed mt-8 mb-10 max-w-xl"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                We execute a disciplined, institutional strategy aimed at capturing growth and generating sustainable long-term value across Canadian markets.
              </p>

              {/* Feature Items with same spacing as EnquiryForm sidebar */}
              <div className="mt-10 flex flex-col gap-10">
                <div className="flex items-start gap-5">
                  <Award size={24} className="text-[#C89B3C] flex-shrink-0 mt-1" />
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-semibold text-white tracking-snug" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      Disciplined Investment
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-400 leading-normal" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      Rigorously vetted commercial assets targeting premium growth corridors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <RefreshCw size={24} className="text-[#C89B3C] flex-shrink-0 mt-1" />
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-semibold text-white tracking-snug" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      Active Management
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-400 leading-normal" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      Hands-on operations, strategic capital improvements, and asset repositioning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <TrendingUp size={24} className="text-[#C89B3C] flex-shrink-0 mt-1" />
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-semibold text-white tracking-snug" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      Sustainable Results
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-400 leading-normal" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      Delivering predictable, risk-adjusted returns across real estate cycles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA directly below features with hover arrow animation */}
            <button
              onClick={() => scrollTo("#enquiry")}
              className="mt-10 lg:mt-12 group inline-flex items-center gap-3 text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-[#C89B3C] hover:text-[#e5b34c] transition-all self-start cursor-pointer border-none bg-transparent p-0"
              style={{ fontFamily: "Inter, system-ui, sans-serif", paddingLeft: "24px" }}
            >
              <span>Learn More</span>
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Center Card: Building Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative min-h-[520px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/approach-building.png"
              alt="BNB Investments commercial office building at night"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </motion.div>

          {/* Right Card: For Investors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="bg-[#0F172A] p-10 sm:p-12 lg:p-14 rounded-2xl text-white flex flex-col justify-between shadow-2xl border border-white/10"
          >
            <div style={{ paddingLeft: "24px", paddingRight: "24px" }}>
              <h2
                className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                For Investors
              </h2>
              
              <div className="pt-8">
                <div className="w-12 h-[2px] bg-[#C89B3C]" />
              </div>

              <p
                className="text-sm sm:text-base text-gray-300 leading-relaxed mt-8 mb-10 max-w-xl"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                We partner with private, institutional, and family office investors seeking high-performing commercial real estate portfolios across Canada.
              </p>

              {/* Feature Items with same spacing as EnquiryForm sidebar */}
              <div className="mt-10 flex flex-col gap-10">
                <div className="flex items-start gap-5">
                  <ShieldCheck size={24} className="text-[#C89B3C] flex-shrink-0 mt-1" />
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-semibold text-white tracking-snug" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      Capital Preservation
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-400 leading-normal" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      Asset-backed commercial security with strong downside risk protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <BarChart3 size={24} className="text-[#C89B3C] flex-shrink-0 mt-1" />
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-semibold text-white tracking-snug" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      Transparent Governance
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-400 leading-normal" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      Detailed financial reporting, auditability, and active asset management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <Users2 size={24} className="text-[#C89B3C] flex-shrink-0 mt-1" />
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-semibold text-white tracking-snug" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      Aligned Interests
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-400 leading-normal" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      Co-investing proprietary balance sheet capital alongside our partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA directly below features with hover arrow animation */}
            <button
              onClick={() => scrollTo("#enquiry")}
              className="mt-10 lg:mt-12 group inline-flex items-center gap-3 text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-[#C89B3C] hover:text-[#e5b34c] transition-all self-start cursor-pointer border-none bg-transparent p-0"
              style={{ fontFamily: "Inter, system-ui, sans-serif", paddingLeft: "24px" }}
            >
              <span>Learn More</span>
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
