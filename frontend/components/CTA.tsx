"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="contact" 
      className="relative w-full overflow-hidden bg-[#FAFAF8] border-y border-gray-200" 
      style={{ minHeight: "550px", paddingTop: "160px", paddingBottom: "160px" }}
      aria-label="Call to Action"
    >
      {/* Background Skyline Image */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full h-full md:w-3/4 lg:w-2/3">
          <Image
            src="/images/cta-building.png"
            alt="Toronto Skyline"
            fill
            className="object-cover object-top md:object-[right_top] opacity-90"
            sizes="100vw"
          />
        </div>
        {/* Light gradient overlay to fade the image into the background on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8] via-[#FAFAF8]/95 to-transparent md:w-4/5" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-12" style={{ paddingLeft: "24px", paddingRight: "24px" }}>
        
        {/* Left Column (Text) */}
        <div ref={ref} className="max-w-xl flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-5"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Let&rsquo;s Build Something
            <br />
            Great Together
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-10 h-[2px] bg-[#C89B3C] mb-6 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-[15px] text-gray-700 leading-relaxed max-w-md font-medium"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            We are always looking to connect with investors,
            <br className="hidden sm:block" />
            partners, and professionals who share our vision.
          </motion.p>
        </div>

        {/* Right Column (Button) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="md:mr-12 lg:mr-24 xl:mr-48"
        >
          <button
            onClick={() => scrollTo("#enquiry")}
            className="bg-[#D4A353] hover:bg-[#C89B3C] text-[#0F172A] font-medium text-sm sm:text-base px-8 py-3 rounded shadow-sm transition-colors duration-300"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
