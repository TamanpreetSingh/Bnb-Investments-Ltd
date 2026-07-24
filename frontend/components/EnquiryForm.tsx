"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Building2, Handshake, TrendingUp, ShieldCheck, CheckCircle2, ChevronDown } from "lucide-react";

export default function EnquiryForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiringAs: "",
    investmentType: "",
    message: "",
    agree: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setForm((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = "w-full px-5 py-4 text-sm sm:text-[15px] bg-white border border-gray-300 rounded-xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15 hover:border-gray-400 hover:shadow-md transition-all duration-300";

  return (
    <section
      id="enquiry"
      className="relative w-full overflow-hidden bg-[#FAFAF8] border-y border-gray-200"
      style={{ minHeight: "550px", paddingTop: "140px", paddingBottom: "140px" }}
      aria-label="Investment enquiry form"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Section Header - Perfectly Center Aligned */}
        <div ref={ref} className="text-center mb-12 max-w-2xl mx-auto flex flex-col items-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-[#C89B3C] mb-2 text-center"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            GET IN TOUCH
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-3 text-center"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            We&rsquo;d Love to Hear From You
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="w-10 h-[2px] bg-[#C89B3C] mx-auto mb-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto text-center"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Please fill out the form below and our team will get back to you shortly.
          </motion.p>
        </div>

        {/* Split Card Container */}
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white border border-gray-200/80 rounded-2xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >

            {/* Left Column: Dark Navy Sidebar (5 cols) */}
            <div className="lg:col-span-5 bg-[#0F172A] py-10 lg:py-12 text-white flex flex-col justify-between relative overflow-hidden">

              {/* Top Content with paddingLeft: 24px so logo, headings, text, lines & icons align 100% */}
              <div className="relative z-10" style={{ paddingLeft: "24px", paddingRight: "24px" }}>
                {/* Logo */}
                <div className="flex items-center gap-2.5 mb-8">
                  <div className="h-9 sm:h-10 w-auto flex-shrink-0 flex items-center justify-start -ml-5 sm:-ml-6">
                    <Image
                      src="/images/BNB-logo.png"
                      alt="BNB Investments Ltd Emblem"
                      width={300}
                      height={200}
                      className="h-full w-auto object-contain object-left"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-white">
                      BNB
                    </span>
                    <span className="text-[8.5px] sm:text-[9px] font-semibold tracking-[0.14em] uppercase text-gray-400">
                      INVESTMENTS LTD.
                    </span>
                  </div>
                </div>

                <div className="w-8 h-[2px] bg-[#C89B3C]" />

                <h3
                  className="mt-8 text-2xl font-bold text-white leading-tight mb-8"
                  style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                >
                  Building value.
                  <br />
                  Creating legacies.
                </h3>

                <p
                  className="text-xs sm:text-[13px] text-gray-300 leading-relaxed mb-8"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  Whether you are an investor, partner, or looking for opportunities, we are here to connect and explore how we can build long-term value together.
                </p>

                <div className="pt-8">
                  <div className="w-8 h-[2px] bg-[#C89B3C]" />

                  <div className="mt-10 flex flex-col gap-10">
                    {/* 3 Bullet Features */}
                    <div className="flex flex-col gap-10">
                      <div className="flex items-start gap-5">
                        <Building2
                          size={24}
                          className="text-[#C89B3C] flex-shrink-0 mt-1"
                        />
                        <p className="text-xs sm:text-[13px] text-gray-300 leading-7">
                          A Canadian investment company focused on commercial real estate.
                        </p>
                      </div>

                      <div className="flex items-start gap-5">
                        <Handshake
                          size={24}
                          className="text-[#C89B3C] flex-shrink-0 mt-1"
                        />
                        <p className="text-xs sm:text-[13px] text-gray-300 leading-7">
                          Trusted relationships built on integrity and transparency.
                        </p>
                      </div>

                      <div className="flex items-start gap-5">
                        <TrendingUp
                          size={24}
                          className="text-[#C89B3C] flex-shrink-0 mt-1"
                        />
                        <p className="text-xs sm:text-[13px] text-gray-300 leading-7">
                          Disciplined approach to deliver long-term value and strong returns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Building Photo Overlay */}
                <div className="relative h-44 w-full overflow-hidden opacity-30">
                  <Image
                    src="/images/approach-building.png"
                    alt="BNB Investments Building"
                    fill
                    className="object-cover object-bottom"
                    sizes="33vw"
                  />
                </div>
              </div>

              {/* Right Column: White Form Container (7 cols) */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-10 lg:p-12">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-14 h-14 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/30 flex items-center justify-center text-[#C89B3C] mb-5">
                      <CheckCircle2 size={30} />
                    </div>
                    <h3
                      className="text-2xl font-bold text-[#0F172A] mb-2"
                      style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                    >
                      Thank You
                    </h3>
                    <p className="text-xs text-gray-500 max-w-xs leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      Your enquiry has been submitted successfully. A member of our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                      <h3
                        className="text-2xl font-bold text-[#0F172A] mb-2"
                        style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                      >
                        Enquiry Form
                      </h3>
                      <div className="w-8 h-[2px] bg-[#C89B3C]" />
                    </div>

                    {/* 2-Column Grid for Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col">
                        <label className="text-[13px] font-medium text-[#0F172A] mb-2" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                          Full Name <span className="text-[#C89B3C]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className={inputClass}
                          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="text-[13px] font-medium text-[#0F172A] mb-2" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Enter company name"
                          className={inputClass}
                          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                        />
                      </div>
                    </div>

                    {/* 2-Column Grid for Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col">
                        <label className="text-[13px] font-medium text-[#0F172A] mb-2" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                          Email Address <span className="text-[#C89B3C]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          className={inputClass}
                          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="text-[13px] font-medium text-[#0F172A] mb-2" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className={inputClass}
                          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                        />
                      </div>
                    </div>

                    {/* I am enquiring as a */}
                    <div className="flex flex-col relative">
                      <label className="text-[13px] font-medium text-[#0F172A] mb-2" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                        I am enquiring as a <span className="text-[#C89B3C]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="enquiringAs"
                          required
                          value={form.enquiringAs}
                          onChange={handleChange}
                          className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                        >
                          <option value="" disabled>Select an option</option>
                          <option value="investor">Private / Institutional Investor</option>
                          <option value="owner">Property Owner / Vendor</option>
                          <option value="partner">Business Partner / Developer</option>
                          <option value="broker">Broker / Financial Advisor</option>
                          <option value="other">Other</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Area of Interest */}
                    <div className="flex flex-col relative">
                      <label className="text-[13px] font-medium text-[#0F172A] mb-2" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                        Area of Interest <span className="text-[#C89B3C]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="investmentType"
                          required
                          value={form.investmentType}
                          onChange={handleChange}
                          className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                        >
                          <option value="" disabled>Select an option</option>
                          <option value="office">Office Properties</option>
                          <option value="retail">Retail Properties</option>
                          <option value="industrial">Industrial / Logistics</option>
                          <option value="mixed">Mixed-Use Developments</option>
                          <option value="co-invest">Co-Investment Opportunities</option>
                          <option value="general">General Enquiry</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                      <label className="text-[13px] font-medium text-[#0F172A] mb-2" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                        Message <span className="text-[#C89B3C]">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your enquiry"
                        className={`${inputClass} resize-none`}
                        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                      />
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="flex items-center gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="agree"
                        name="agree"
                        checked={form.agree}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#C89B3C] rounded border-gray-300 focus:ring-[#C89B3C] cursor-pointer"
                      />
                      <label htmlFor="agree" className="text-xs text-gray-600 cursor-pointer" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                        I agree to be contacted by BNB Investments Ltd. regarding my enquiry.
                      </label>
                    </div>

                    {/* Solid Gold Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        width: "100%",
                        padding: "14px 24px",
                        backgroundColor: "#C89B3C",
                        color: "#FFFFFF",
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "13px",
                        fontWeight: 700,
                        border: "none",
                        borderRadius: "8px",
                        cursor: loading ? "not-allowed" : "pointer",
                        opacity: loading ? 0.7 : 1,
                        boxShadow: "0 4px 14px rgba(200, 155, 60, 0.3)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {loading ? "Submitting..." : "Submit Enquiry"}
                    </button>

                    {/* Privacy Subtext */}
                    <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 pt-1">
                      <ShieldCheck size={15} className="text-[#C89B3C]" />
                      <span style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                        We respect your privacy. Your information will be kept confidential.
                      </span>
                    </div>
                  </form>
                )}
              </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
