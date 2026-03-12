"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 40, suffix: "+", label: "Brands Grown" },
  { value: 9, suffix: "", label: "Core Services" },
];

function CountUp({
  end,
  suffix = "",
  startAnimation,
}: {
  end: number;
  suffix?: string;
  startAnimation: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 1800;
    const stepTime = Math.max(20, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, startAnimation]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutStory() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-12 h-0.5 bg-[#C6A969] mb-10" />
            <h2 className="font-sora font-bold text-[#111111] text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
              Who we are
            </h2>
            <p className="font-inter text-[#111111]/60 text-base leading-relaxed mb-5">
              Code N Clicks was founded with a clear conviction: that great digital
              marketing is the intersection of thoughtful strategy, refined creative,
              and purposeful execution. We believe every brand deserves a digital
              presence that genuinely reflects its ambition.
            </p>
            <p className="font-inter text-[#111111]/60 text-base leading-relaxed">
              We work with businesses of all sizes — from emerging brands
              establishing themselves online, to established companies looking to
              elevate their digital performance. Our approach is collaborative,
              thorough, and always oriented around real business outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-12 h-0.5 bg-[#C6A969] mb-10" />
            <h2 className="font-sora font-bold text-[#111111] text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
              How we work
            </h2>
            <p className="font-inter text-[#111111]/60 text-base leading-relaxed mb-5">
              Our process begins with understanding your brand, your audience, and
              your goals. We do not apply generic templates — every strategy, every
              creative direction, every campaign is shaped specifically for you.
            </p>
            <p className="font-inter text-[#111111]/60 text-base leading-relaxed">
              From discovery through to delivery and ongoing optimisation, we
              operate as an extension of your team. Transparent communication, clear
              timelines, and measurable results are at the core of how we engage
              with every client.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 pt-12 border-t border-[#111111]/8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.35 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-gradient-to-br from-[#F8F4EA] to-white border border-[#C6A969]/20 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C6A969]/10 transition-all duration-300"
            >
              <div className="w-10 h-1 rounded-full bg-[#C6A969] mb-6" />
              <p className="font-sora font-bold text-[#111111] text-5xl mb-3 tracking-tight">
                <CountUp
                  end={s.value}
                  suffix={s.suffix}
                  startAnimation={inView}
                />
              </p>
              <p className="font-inter text-[#111111]/55 text-sm font-medium">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}