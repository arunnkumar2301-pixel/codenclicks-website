"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTABand() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#F5F5F2] py-16 lg:py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl"
          style={{ background: "linear-gradient(135deg, #EDE7DB 0%, #F5F5F2 55%, #E8E2D6 100%)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 sm:p-14 lg:p-16 flex flex-col justify-center">
              <div className="w-10 h-0.5 bg-[#C6A969] mb-8" />
              <h2 className="font-sora font-bold text-[#111111] text-4xl lg:text-5xl leading-tight tracking-tight mb-9">
                {"Let's build something"}
                <br />
                remarkable together.
              </h2>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#111111] text-white px-8 py-4 rounded-xl font-sora font-semibold text-sm hover:bg-[#1f1f1f] transition-colors duration-200"
                >
                  Start a Project &#8594;
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center p-12 lg:p-14">
              <div
                className="w-full h-72 rounded-2xl flex flex-col items-center justify-center gap-6 px-10"
                style={{ background: "linear-gradient(145deg, #181610 0%, #211e15 100%)" }}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo-whitee.png"
                    alt="Code N Clicks logo"
                    width={44}
                    height={44}
                    className="h-11 w-auto object-contain"
                    priority={false}
                  />
                  <span className="font-sora font-bold text-white text-[1.75rem] tracking-tight">
                    Code N Clicks
                  </span>
                </div>

                <p className="font-inter text-white/75 text-base font-medium text-center leading-relaxed max-w-[280px]">
                  Premium digital experiences crafted for brands that mean business.
                </p>

                <div className="flex flex-wrap gap-3 justify-center">
                  {["Branding", "SEO", "Web", "Ads"].map((tag) => (
                    <span
                      key={tag}
                      className="font-inter text-white/80 text-sm font-medium px-3.5 py-1.5 rounded-lg border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-6 right-6 w-28 h-28 rounded-full border border-[#C6A969]/12 pointer-events-none" />
          <div className="absolute top-14 right-14 w-10 h-10 rounded-full border border-[#C6A969]/18 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}