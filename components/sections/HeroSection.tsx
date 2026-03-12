"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#111111]">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[45vh] opacity-[0.08] blur-[130px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #C6A969 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-0 right-0 w-[40vw] h-[40vh] opacity-[0.05] blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #C6A969 0%, transparent 70%)" }}
        />
      </div>

      <div className="absolute inset-0 z-10 bg-black/55" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-9"
          >
            <div className="w-8 h-px bg-[#C6A969]" />
            <span className="font-inter text-[#C6A969] text-xs tracking-[0.28em] uppercase font-medium">
              Digital Growth Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-sora font-bold text-white leading-[1.04] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.75rem)" }}
          >
            We build digital
            <br />
            experiences that <span className="text-[#C6A969]">convert</span>,
            <br />
            scale and last.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="font-inter text-white/70 text-lg leading-relaxed mb-12 max-w-[520px]"
          >
            Code N Clicks helps brands grow through website design, SEO, social
            media marketing, paid ads, branding, influencer marketing, and digital
            strategy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.66, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#C6A969] text-[#111111] px-8 py-4 rounded-xl font-sora font-semibold text-sm hover:bg-[#D4BC87] transition-colors duration-200 shadow-lg shadow-[#C6A969]/15"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-xl font-sora font-semibold text-sm hover:bg-white/5 hover:border-white/35 transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-inter text-white/30 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}