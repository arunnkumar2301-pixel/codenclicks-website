import Link from "next/link";
import Image from "next/image";

const TAGS = ["Research", "Ideation", "Design", "Launch", "Optimise"];

export default function StrategySection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#d9d9d9] shadow-xl shadow-black/10">
              <Image
                src="https://res.cloudinary.com/dx8xkca5i/image/upload/f_auto,q_auto,c_fill,w_1200/v1773490174/strategy-image_z7emh4.png"
                alt="Strategy and creative planning"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-7 left-7 right-7">
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/25 bg-black/25 px-3 py-1.5 font-inter text-[11px] text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-6 right-6 hidden h-8 rounded-full bg-black/10 blur-xl md:block" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-10 h-0.5 w-12 bg-[#C6A969]" />

            <h2 className="mb-5 font-sora text-4xl font-bold leading-tight tracking-tight text-[#111111] lg:text-5xl">
              Strategy,
              <br />
              Creativity
              <br />
              &amp; Results
            </h2>

            <p className="mb-7 font-inter text-[15px] italic leading-snug text-[#111111]/40">
              Every project is shaped by clarity, craft, and performance.
            </p>

            <p className="mb-10 font-inter text-base leading-relaxed text-[#111111]/60">
              Our process combines strategic thinking, creative execution, and
              performance-focused decision making. From first ideas to launch and
              optimisation, we create digital solutions that not only look
              refined, but also work hard for your business.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-[#111111] px-7 py-3.5 font-sora text-sm font-semibold text-[#111111] transition-all duration-200 hover:bg-[#111111] hover:text-white"
            >
              Our Approach &#8594;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}