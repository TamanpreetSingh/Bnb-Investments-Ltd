"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const sectors = [
  {
    title: "Office",
    subtitle: "Class A & B Assets",
    image: "/images/sector-office.png",
    description:
      "Premium office towers and business parks in Canada's major urban centres.",
  },
  {
    title: "Retail",
    subtitle: "High-Traffic Locations",
    image: "/images/sector-retail.png",
    description:
      "Strategically located retail plazas and commercial centres anchored by strong tenants.",
  },
  {
    title: "Industrial",
    subtitle: "Logistics & Distribution",
    image: "/images/sector-industrial.png",
    description:
      "Modern industrial and logistics facilities serving Canada's growing e-commerce sector.",
  },
  {
    title: "Mixed Use",
    subtitle: "Urban Developments",
    image: "/images/sector-mixed.png",
    description:
      "Integrated developments combining retail, office, and residential uses in prime urban locations.",
  },
];

export default function InvestmentSectors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sectors"
      className="py-24 lg:py-32 bg-white"
      aria-label="Investment sectors"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ backgroundColor: "#C89B3C" }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{
                color: "#C89B3C",
                fontFamily: "Inter, system-ui, sans-serif",
                letterSpacing: "0.18em",
              }}
            >
              What We Invest In
            </span>
            <div className="w-6 h-px" style={{ backgroundColor: "#C89B3C" }} />
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
            Investment Sectors
          </h2>

          <p
            className="text-base lg:text-lg max-w-xl mx-auto"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              color: "#6B7280",
              lineHeight: "1.7",
            }}
          >
            We pursue opportunities across four core commercial real estate
            sectors, each selected for long-term income potential and capital
            appreciation.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: "easeOut" },
                },
              }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden mb-5"
                style={{
                  borderRadius: "2px",
                  aspectRatio: "3/3.6",
                }}
              >
                <Image
                  src={sector.image}
                  alt={`${sector.title} commercial real estate — BNB Investments`}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,23,42,0.35) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Card text */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-0">
                  <h3
                    className="text-xl font-semibold"
                    style={{
                      fontFamily: "Playfair Display, Georgia, serif",
                      color: "#0F172A",
                      fontWeight: 600,
                    }}
                  >
                    {sector.title}
                  </h3>
                </div>

                {/* Gold underline — expands on hover */}
                <div
                  className="h-px w-8 group-hover:w-full transition-all duration-400"
                  style={{ backgroundColor: "#C89B3C" }}
                />

                <p
                  className="text-xs mt-1"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    color: "#6B7280",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {sector.subtitle}
                </p>

                <p
                  className="text-sm mt-2 leading-relaxed"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    color: "#4B5563",
                    lineHeight: "1.65",
                  }}
                >
                  {sector.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
