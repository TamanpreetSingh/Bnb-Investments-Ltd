"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Building2, ShoppingBag, Truck, Building } from "lucide-react";

const sectors = [
  {
    title: "Office",
    icon: Building2,
    image: "/images/sector-office.png",
  },
  {
    title: "Retail",
    icon: ShoppingBag,
    image: "/images/sector-retail.png",
  },
  {
    title: "Industrial",
    icon: Truck,
    image: "/images/sector-industrial.png",
  },
  {
    title: "Mixed-Use",
    icon: Building,
    image: "/images/sector-mixed.png",
  },
];

export default function InvestmentSectors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section 
      id="sectors" 
      className="bg-[#FAFAF8] border-y border-gray-200" 
      style={{ minHeight: "550px", paddingTop: "140px", paddingBottom: "140px" }}
      aria-label="Investment Sectors"
    >
      <div style={{ paddingLeft: "clamp(32px, 6vw, 96px)", paddingRight: "clamp(32px, 6vw, 96px)", width: "100%" }}>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column - Focus Header & Text (Aligned with Hero section) */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase mb-4 text-[#C89B3C]"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              OUR FOCUS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] mb-4 text-[#0F172A]"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Commercial Properties.
              <br />
              Built for Tomorrow.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="w-10 h-[2px] bg-[#C89B3C] mb-6 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              We invest in and develop high-quality commercial assets that drive economic growth and create lasting impact.
            </motion.p>
          </div>

          {/* Right Column - 4 Image Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 + 0.15 }}
                  className="bg-white rounded-xl border border-gray-200/80 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-[260px] sm:h-[300px] bg-gray-100">
                    <Image
                      src={sector.image}
                      alt={`${sector.title} property — BNB Investments`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    />
                    
                    {/* Overlapping Icon Badge */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0F172A] border-2 border-[#C89B3C] flex items-center justify-center text-[#C89B3C] shadow-md z-10">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Card Title Bottom */}
                  <div 
                    className="text-center mt-auto bg-white flex flex-col items-center justify-center"
                    style={{ paddingTop: "48px", paddingBottom: "28px", paddingLeft: "12px", paddingRight: "12px" }}
                  >
                    <h3
                      className="text-sm sm:text-base font-semibold text-[#0F172A] group-hover:text-[#C89B3C] transition-colors duration-200"
                      style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                    >
                      {sector.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}


