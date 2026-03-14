"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    let idleId: number;

    const loadVideo = () => setShowVideo(true);

    if ("requestIdleCallback" in window) {
      idleId = (window as any).requestIdleCallback(loadVideo);
    } else {
      idleId = window.setTimeout(loadVideo, 2000);
    }

    return () => {
      if ("cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#111111]">

        {/* Background */}
        <div className="absolute inset-0 z-0">

          {/* Instant poster */}
          <img
            src="/hero-poster.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />

          {/* Video loads after page idle */}
          {showVideo && (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay
              preload="none"
              style={{ pointerEvents: "none" }}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          )}

          {/* grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)," +
                "linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          {/* bottom glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[45vh] opacity-[0.08] blur-[130px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, #C6A969 0%, transparent 70%)",
            }}
          />

          {/* top glow */}
          <div
            className="absolute top-0 right-0 w-[40vw] h-[40vh] opacity-[0.05] blur-[100px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, #C6A969 0%, transparent 70%)",
            }}
          />
        </div>

        {/* dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/55" />

        {/* content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-24">
          <div className="max-w-3xl">

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 mb-9"
            >
              <div className="w-8 h-px bg-[#C6A969]" />
              <span className="font-inter text-[#C6A969] text-xs tracking-[0.28em] uppercase font-medium">
                Digital Growth Agency
              </span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="font-sora font-bold text-white leading-[1.04] tracking-tight mb-8"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4.75rem)" }}
            >
              We build digital
              <br />
              experiences that <span className="text-[#C6A969]">convert</span>,
              <br />
              scale and last.
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.52 }}
              className="font-inter text-white/70 text-lg leading-relaxed mb-12 max-w-[520px]"
            >
              Code N Clicks helps brands grow through website design, SEO,
              social media marketing, paid ads, branding, influencer marketing,
              and digital strategy.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.66 }}
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
            </m.div>

          </div>
        </div>

        {/* scroll indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="font-inter text-white/30 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </m.div>

      </section>
    </LazyMotion>
  );
}