"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES = [
  "Branding & Creative Design",
  "Social Media Marketing",
  "Digital Marketing",
  "Influencer Marketing",
  "Google My Business & Local Citations",
  "SEO",
  "Website Design & Development",
  "App Development",
  "Paid Ads",
  "Not sure yet",
];

const inputClass =
  "w-full bg-white border border-[#111111]/10 text-[#111111] text-sm px-5 py-3.5 rounded-xl placeholder:text-[#111111]/30 focus:outline-none focus:border-[#C6A969]/60 transition-colors font-inter";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange =
    (k: keyof typeof formData) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) =>
      setFormData({ ...formData, [k]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send message.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setErrorMsg(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="bg-[#F5F5F2] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="w-12 h-0.5 bg-[#C6A969] mb-10" />
            <h2 className="font-sora font-bold text-[#111111] text-3xl mb-4 leading-tight tracking-tight">
              Get in touch
            </h2>
            <p className="font-inter text-[#111111]/55 text-sm leading-relaxed mb-12">
              Whether you have a specific project in mind or just want to explore
              how we can help, we&apos;d love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#111111]/5 flex items-center justify-center flex-shrink-0">
                  <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#C6A969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22,6 12,13 2,6" stroke="#C6A969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-sora font-semibold text-[#111111] text-sm mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:Hello@codenclicks.in"
                    className="font-inter text-[#111111]/55 text-sm hover:text-[#C6A969] transition-colors duration-200"
                  >
                    Hello@codenclicks.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#111111]/5 flex items-center justify-center flex-shrink-0">
                  <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#C6A969" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="3" stroke="#C6A969" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-sora font-semibold text-[#111111] text-sm mb-0.5">
                    Address
                  </p>
                  <address className="font-inter text-[#111111]/55 text-sm not-italic leading-relaxed">
                    17, Extension 3,
                    <br />
                    Nangloi, Delhi-110041 ,
                    <br />
                    India
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#111111]/5 flex items-center justify-center flex-shrink-0">
                  <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 011.07 4a2 2 0 012-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="#C6A969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-sora font-semibold text-[#111111] text-sm mb-0.5">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+918527855155"
                    className="font-inter text-[#111111]/55 text-sm hover:text-[#C6A969] transition-colors duration-200"
                  >
                    +91 85278 55155
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#111111]/5">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-14">
                  <div className="w-16 h-16 rounded-full bg-[#C6A969]/10 flex items-center justify-center mb-6">
                    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" stroke="#C6A969" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-sora font-bold text-[#111111] text-2xl mb-3">
                    Message received.
                  </h3>
                  <p className="font-inter text-[#111111]/50 text-sm max-w-xs leading-relaxed">
                    Thank you for reaching out. Your enquiry has been sent to our inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-inter text-[#111111]/50 text-xs mb-1.5 block">
                        Full Name <span className="text-[#C6A969]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Smith"
                        className={inputClass}
                        value={formData.name}
                        onChange={handleChange("name")}
                      />
                    </div>
                    <div>
                      <label className="font-inter text-[#111111]/50 text-xs mb-1.5 block">
                        Email Address <span className="text-[#C6A969]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className={inputClass}
                        value={formData.email}
                        onChange={handleChange("email")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-inter text-[#111111]/50 text-xs mb-1.5 block">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className={inputClass}
                      value={formData.company}
                      onChange={handleChange("company")}
                    />
                  </div>

                  <div>
                    <label className="font-inter text-[#111111]/50 text-xs mb-1.5 block">
                      Service of Interest
                    </label>
                    <select
                      className={inputClass}
                      value={formData.service}
                      onChange={handleChange("service")}
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-inter text-[#111111]/50 text-xs mb-1.5 block">
                      Tell us about your project <span className="text-[#C6A969]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your goals, timeline, and anything else we should know…"
                      className={inputClass + " resize-none"}
                      value={formData.message}
                      onChange={handleChange("message")}
                    />
                  </div>

                  {errorMsg && (
                    <p className="font-inter text-sm text-red-600">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#111111] text-white py-4 rounded-xl font-sora font-semibold text-sm hover:bg-[#1f1f1f] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}