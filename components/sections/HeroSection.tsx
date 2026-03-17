import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#111111]">
      <div className="absolute inset-0 z-0">
        {/* Fallback / poster image */}
        <Image
          src="https://res.cloudinary.com/dx8xkca5i/image/upload/f_auto,q_auto,c_fill,w_1200/v1773490174/hero-poster_hvn9ie.jpg"
          alt="Code N Clicks hero background"
          fill
          priority
          sizes="100vw"
          unoptimized
          className="object-cover"
        />

        {/* Desktop-only background video */}
        <video
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://res.cloudinary.com/dx8xkca5i/image/upload/f_auto,q_auto,c_fill,w_1200/v1773490174/hero-poster_hvn9ie.jpg"
          style={{ pointerEvents: "none" }}
        >
          <source
            src="https://res.cloudinary.com/dx8xkca5i/video/upload/q_auto:good,f_auto/v1773490187/hero-video_yuhlkh.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div
          className="pointer-events-none absolute bottom-0 left-1/2 hidden h-[30vh] w-[70vw] -translate-x-1/2 opacity-[0.05] blur-[80px] md:block"
          style={{
            background: "radial-gradient(ellipse, #C6A969 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-32 pb-24 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-9 flex items-center gap-3">
            <div className="h-px w-8 bg-[#C6A969]" />
            <span className="font-inter text-xs font-medium uppercase tracking-[0.28em] text-[#C6A969]">
              Digital Growth Agency
            </span>
          </div>

          <h1
            className="mb-8 font-sora text-white font-bold leading-[1.04] tracking-tight"
            style={{ fontSize: "clamp(2.1rem, 6vw, 4.75rem)" }}
          >
            We build digital
            <br />
            experiences that <span className="text-[#C6A969]">convert</span>,
            <br />
            scale and last.
          </h1>

          <p className="mb-10 max-w-[520px] font-inter text-base leading-relaxed text-white/70 sm:text-lg">
            Code N Clicks helps brands grow through website design, SEO,
            social media marketing, paid ads, branding, influencer marketing,
            and digital strategy.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#C6A969] px-8 py-4 font-sora text-sm font-semibold text-[#111111] transition-colors duration-200 hover:bg-[#D4BC87]"
            >
              Start a Project
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-sora text-sm font-semibold text-white transition-all duration-200 hover:border-white/35 hover:bg-white/5"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-white/30">
          Scroll
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}