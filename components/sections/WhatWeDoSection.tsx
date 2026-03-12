"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WhatWeDoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#F5F5F2] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left w-12 h-0.5 bg-[#C6A969] mb-16"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pr-12 pb-12 lg:pb-0"
          >
            <h2
              className="font-sora font-bold text-[#111111] leading-none tracking-tight select-none"
              style={{ fontSize: "clamp(3.75rem, 8.5vw, 6.5rem)" }}
            >
              What
              <br />
              We
              <br />
              Do
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:px-12 py-12 lg:py-0 border-t border-[#111111]/8 lg:border-t-0 lg:border-l lg:border-[#111111]/8"
          >
            <h3 className="font-sora font-bold text-[#111111] text-4xl lg:text-5xl mb-3 tracking-tight">Digital.</h3>
            <p className="font-inter italic text-[#111111]/45 text-[15px] mb-6 leading-snug">
              We create modern digital experiences that help brands grow.
            </p>
            <p className="font-inter text-[#111111]/60 text-sm leading-relaxed mb-9">
              Code N Clicks is a creative digital agency focused on branding,
              websites, SEO, and high-performance marketing strategies. We combine
              elegant design with practical business growth.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 font-sora font-semibold text-[#111111] text-sm hover:text-[#C6A969] transition-colors duration-200 group">
              About Us
              <span className="group-hover:translate-x-1 transition-transform duration-200">&#8594;</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pl-12 py-12 lg:py-0 border-t border-[#111111]/8 lg:border-t-0 lg:border-l lg:border-[#111111]/8"
          >
            <h3 className="font-sora font-bold text-[#111111] text-3xl lg:text-4xl mb-3 tracking-tight leading-tight">
              Strategy.
              <br />
              Creative.
              <br />
              Growth.
            </h3>
            <p className="font-inter italic text-[#111111]/45 text-[15px] mb-6 leading-snug">
              Marketing brands with clarity and purpose.
            </p>
            <p className="font-inter text-[#111111]/60 text-sm leading-relaxed mb-9">
              From social media and paid ads to website development and local SEO,
              we build digital systems that improve visibility, attract customers,
              and support long-term growth.
            </p>
            <Link href="/services" className="inline-flex items-center gap-2 font-sora font-semibold text-[#111111] text-sm hover:text-[#C6A969] transition-colors duration-200 group">
              Our Services
              <span className="group-hover:translate-x-1 transition-transform duration-200">&#8594;</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
