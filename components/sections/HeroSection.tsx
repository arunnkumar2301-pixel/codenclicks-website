import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center overflow-hidden bg-[#111111]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dx8xkca5i/image/upload/f_auto,q_auto,w_1600/v1773490174/hero-poster_hvn9ie.jpg"
          alt="Code N Clicks hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[32vh] opacity-[0.06] blur-[90px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, #C6A969 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-9">
            <div className="w-8 h-px bg-[#C6A969]" />
            <span className="font-inter text-[#C6A969] text-xs tracking-[0.28em] uppercase font-medium">
              Digital Growth Agency
            </span>
          </div>

          <h1
            className="font-sora font-bold text-white leading-[1.04] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.75rem)" }}
          >
            We build digital
            <br />
            experiences that <span className="text-[#C6A969]">convert</span>,
            <br />
            scale and last.
          </h1>

          <p className="font-inter text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-[520px]">
            Code N Clicks helps brands grow through website design, SEO,
            social media marketing, paid ads, branding, influencer marketing,
            and digital strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2">
        <span className="font-inter text-white/30 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}