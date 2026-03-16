"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function StrategySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl shadow-black/10 bg-[#d9d9d9]">
              <Image
  src="https://res.cloudinary.com/dx8xkca5i/image/upload/f_auto,q_auto/v1773490174/strategy-image_z7emh4.png"
  alt="Strategy and creative planning"
  fill
  sizes="(min-width: 1024px) 50vw, 100vw"
  className="object-cover"
  priority={false}
/>

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-7 left-7 right-7">
                <div className="flex flex-wrap gap-2">
                  {["Research", "Ideation", "Design", "Launch", "Optimise"].map((tag) => (
                    <span
                      key={tag}
                      className="font-inter text-white text-[11px] px-3 py-1.5 rounded-full border border-white/25 bg-black/25 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 left-6 right-6 h-10 bg-black/10 blur-xl rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="w-12 h-0.5 bg-[#C6A969] mb-10" />
            <h2 className="font-sora font-bold text-[#111111] text-4xl lg:text-5xl leading-tight tracking-tight mb-5">
              Strategy,
              <br />
              Creativity
              <br />
              &amp; Results
            </h2>
            <p className="font-inter italic text-[#111111]/40 text-[15px] mb-7 leading-snug">
              Every project is shaped by clarity, craft, and performance.
            </p>
            <p className="font-inter text-[#111111]/60 text-base leading-relaxed mb-10">
              Our process combines strategic thinking, creative execution, and
              performance-focused decision making. From first ideas to launch and
              optimisation, we create digital solutions that not only look refined,
              but also work hard for your business.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-[#111111] text-[#111111] px-7 py-3.5 rounded-xl font-sora font-semibold text-sm hover:bg-[#111111] hover:text-white transition-all duration-200"
            >
              Our Approach &#8594;
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}