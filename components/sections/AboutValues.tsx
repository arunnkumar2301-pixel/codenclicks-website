"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VALUES = [
  { num: "01", title: "Clarity First", desc: "Effective digital work begins with clarity — about your audience, your goals, and what sets you apart. Strategy before execution, always." },
  { num: "02", title: "Refined Creative", desc: "Design and creative execution should be beautiful and functional. We hold our visual standards to the same level as our strategic thinking." },
  { num: "03", title: "Performance Driven", desc: "Every touchpoint should contribute to growth. We measure what matters and continuously optimise to ensure your digital systems work harder over time." },
  { num: "04", title: "Long-term Partnership", desc: "We build enduring client relationships, not project transactions. Your sustained growth is what we are here to support." },
];

export default function AboutValues() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="bg-[#F5F5F2] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mb-16">
          <div className="w-12 h-0.5 bg-[#C6A969] mb-8" />
          <h2 className="font-sora font-bold text-[#111111] text-4xl lg:text-5xl leading-tight tracking-tight">What we believe in</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VALUES.map((v, i) => (
            <motion.div key={v.num} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }} className="bg-white rounded-2xl p-8 border border-[#111111]/5">
              <span className="font-sora text-[#C6A969] text-xs tracking-widest mb-4 block">{v.num}</span>
              <h3 className="font-sora font-bold text-[#111111] text-xl mb-3">{v.title}</h3>
              <p className="font-inter text-[#111111]/55 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
