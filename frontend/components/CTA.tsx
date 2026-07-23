"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    investmentType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-white"
      aria-label="Contact BNB Investments"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start"
        >
          {/* Left — CTA text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col"
          >
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
                Get In Touch
              </span>
            </div>

            <h2
              className="text-4xl lg:text-5xl xl:text-6xl mb-7"
              style={{
                fontFamily: "Playfair Display, Georgia, serif",
                color: "#0F172A",
                fontWeight: 700,
                lineHeight: "1.08",
              }}
            >
              Let&rsquo;s Build
              <br />
              Long-Term Value
              <br />
              <em style={{ fontStyle: "italic", color: "#C89B3C" }}>
                Together.
              </em>
            </h2>

            <p
              className="text-base lg:text-lg max-w-md mb-10"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                color: "#6B7280",
                lineHeight: "1.75",
              }}
            >
              Whether you&rsquo;re an institutional investor, family office, or
              development partner, we welcome the opportunity to explore how BNB
              Investments can work with you.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "Institutional-grade investment processes",
                "Transparent reporting and communication",
                "Alignment of interests at every level",
                "Long-term partnership commitment",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#C89B3C" }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      color: "#4B5563",
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.12,
            }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center p-12 bg-white border border-gray-100"
                style={{
                  borderRadius: "2px",
                  minHeight: "400px",
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6 rounded-full"
                  style={{ backgroundColor: "#F3F4F6" }}
                >
                  <Send size={20} style={{ color: "#C89B3C" }} />
                </div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{
                    fontFamily: "Playfair Display, Georgia, serif",
                    color: "#0F172A",
                  }}
                >
                  Thank You
                </h3>
                <p
                  className="text-sm max-w-xs"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    color: "#6B7280",
                    lineHeight: "1.65",
                  }}
                >
                  Your enquiry has been received. A member of our team will be
                  in touch with you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                aria-label="Investment enquiry form"
              >
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        color: "#374151",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="px-4 py-3 text-sm border border-gray-200 bg-white focus:outline-none focus:border-[#C89B3C] transition-colors"
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        borderRadius: "1px",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        color: "#374151",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="px-4 py-3 text-sm border border-gray-200 bg-white focus:outline-none focus:border-[#C89B3C] transition-colors"
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        borderRadius: "1px",
                      }}
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="company"
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      color: "#374151",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company or fund"
                    className="px-4 py-3 text-sm border border-gray-200 bg-white focus:outline-none focus:border-[#C89B3C] transition-colors"
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      borderRadius: "1px",
                    }}
                  />
                </div>

                {/* Investment Type */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="investmentType"
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      color: "#374151",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Area of Interest *
                  </label>
                  <select
                    id="investmentType"
                    name="investmentType"
                    required
                    value={form.investmentType}
                    onChange={handleChange}
                    className="px-4 py-3 text-sm border border-gray-200 bg-white focus:outline-none focus:border-[#C89B3C] transition-colors"
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      borderRadius: "1px",
                      color: form.investmentType ? "#111827" : "#9CA3AF",
                    }}
                  >
                    <option value="" disabled>
                      Select an investment sector
                    </option>
                    <option value="office">Office Properties</option>
                    <option value="retail">Retail Properties</option>
                    <option value="industrial">Industrial / Logistics</option>
                    <option value="mixed">Mixed-Use Developments</option>
                    <option value="co-invest">Co-Investment Opportunities</option>
                    <option value="development">Development Partnerships</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      color: "#374151",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your investment goals or how you'd like to partner with us..."
                    rows={4}
                    className="px-4 py-3 text-sm border border-gray-200 bg-white focus:outline-none focus:border-[#C89B3C] transition-colors resize-none"
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      borderRadius: "1px",
                    }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="flex items-center justify-center gap-2 py-4 text-sm font-medium text-white transition-all duration-200 disabled:opacity-60"
                  style={{
                    backgroundColor: "#C89B3C",
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    borderRadius: "1px",
                  }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="rgba(255,255,255,0.3)"
                          strokeWidth="3"
                        />
                        <path
                          d="M12 2a10 10 0 0 1 10 10"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Submit Enquiry
                      <ArrowRight size={15} />
                    </>
                  )}
                </motion.button>

                <p
                  className="text-xs text-center"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    color: "#9CA3AF",
                  }}
                >
                  We typically respond within 1–2 business days.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
