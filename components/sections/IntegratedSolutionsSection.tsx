"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function IntegratedSolutionsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#F5F5F2] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-12 h-0.5 bg-[#C6A969] mb-10" />
            <h2 className="font-sora font-bold text-[#111111] text-4xl lg:text-5xl leading-tight tracking-tight mb-5">
              Integrated Digital
              <br />
              Solutions
            </h2>
            <p className="font-inter italic text-[#111111]/40 text-[15px] mb-7 leading-snug">
              Every channel, every touchpoint, working together.
            </p>
            <p className="font-inter text-[#111111]/60 text-base leading-relaxed mb-10">
              Code N Clicks brings branding, websites, SEO, paid media, social
              media, and local growth together into one connected system. We build
              digital experiences that are visually strong, strategically aligned,
              and designed to support real business growth.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#111111] text-white px-7 py-3.5 rounded-xl font-sora font-semibold text-sm hover:bg-[#1f1f1f] transition-colors duration-200"
            >
              Explore Our Services &#8594;
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl shadow-black/10 bg-[#d9d9d9]">
              <Image
                src="/integrated-solutions.png"
                alt="Integrated digital solutions"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority={false}
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-7 left-7 right-7">
                <div className="flex flex-wrap gap-2">
                  {["SEO", "Paid Ads", "Social Media", "Branding", "Web Design"].map((tag) => (
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
        </div>
      </div>
    </section>
  );
}