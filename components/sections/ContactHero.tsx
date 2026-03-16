"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#111111] pt-40 pb-28 lg:pb-36">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dx8xkca5i/image/upload/f_auto,q_auto/v1773637400/Contact_Us_q6txrz.png"
          alt="Contact banner"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 z-10 bg-black/82" />

      <div
        className="absolute top-0 left-0 z-10 w-[55vw] h-[60vh] opacity-[0.07] blur-[120px] pointer-events-none"
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
            Let&apos;s Talk
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="font-sora font-bold text-white leading-[1.06] tracking-tight mb-8 max-w-2xl"
          style={{ fontSize: "clamp(2.6rem, 6vw, 4.75rem)" }}
        >
          Start a{" "}
          <span className="text-[#C6A969]">conversation.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="font-inter text-white/60 text-lg leading-relaxed max-w-md"
        >
          Tell us about your brand and what you are working towards. We will get
          back to you within one business day.
        </motion.p>
      </div>
    </section>
  );
}