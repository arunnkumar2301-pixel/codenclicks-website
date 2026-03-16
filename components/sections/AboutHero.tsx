"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="bg-[#111111] pt-40 pb-28 lg:pb-36 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dx8xkca5i/image/upload/f_auto,q_auto/v1773637400/AboutUS_twn0kq.png"
          alt="About Code N Clicks"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 z-10 bg-black/92" />

      <div
        className="absolute top-0 right-0 z-10 w-[55vw] h-[55vh] opacity-[0.07] blur-[110px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #C6A969 0%, transparent 70%)" }}
      />

      <div
        className="absolute inset-0 z-10 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-[#C6A969]" />
          <span className="font-inter text-[#C6A969] text-xs tracking-[0.25em] uppercase">
            Our Story
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="font-sora font-bold text-white leading-[1.06] tracking-tight mb-8 max-w-4xl"
          style={{ fontSize: "clamp(2.6rem, 6vw, 4.75rem)" }}
        >
          A digital agency built for{" "}
          <span className="text-[#C6A969]">meaningful growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="font-inter text-white/60 text-lg leading-relaxed max-w-xl"
        >
          We are a creative digital agency helping ambitious brands grow through
          elegant design, strategic marketing, and performance-led digital systems.
        </motion.p>
      </div>
    </section>
  );
}