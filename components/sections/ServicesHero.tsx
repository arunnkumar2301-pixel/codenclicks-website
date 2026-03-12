"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#111111] pt-40 pb-28 lg:pb-36">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        className="absolute top-0 left-1/2 h-[50vh] w-[80vw] -translate-x-1/2 opacity-[0.06] blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #C6A969 0%, transparent 70%)" }}
      />

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-[#C6A969]" />
              <span className="font-inter text-xs uppercase tracking-[0.25em] text-[#C6A969]">
                What We Offer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 max-w-3xl font-sora font-bold leading-[1.06] tracking-tight text-white"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4.75rem)" }}
            >
              A full suite of{" "}
              <span className="text-[#C6A969]">digital services</span>
              <br />
              built to grow your brand.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl font-inter text-lg leading-relaxed text-white/65"
            >
              From brand identity and website design to SEO, paid media, and influencer
              marketing — we cover every dimension of your digital growth.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-sm aspect-[16/9]">
              <video
                className="h-full w-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/CNC-Services-Video.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/28" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#111111]/35 via-transparent to-[#C6A969]/10" />
            </div>

            <div className="absolute -bottom-5 left-6 right-6 h-10 rounded-full bg-black/20 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}