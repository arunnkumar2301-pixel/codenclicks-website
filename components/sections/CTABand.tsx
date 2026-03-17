import Link from "next/link";
import Image from "next/image";

const TAGS = ["Branding", "SEO", "Web", "Ads"];

export default function CTABand() {
  return (
    <section className="bg-[#F5F5F2] px-6 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, #EDE7DB 0%, #F5F5F2 55%, #E8E2D6 100%)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 sm:p-14 lg:p-16">
              <div className="mb-8 h-0.5 w-10 bg-[#C6A969]" />

              <h2 className="mb-9 font-sora text-4xl font-bold leading-tight tracking-tight text-[#111111] lg:text-5xl">
                {"Let's build something"}
                <br />
                remarkable together.
              </h2>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#111111] px-8 py-4 font-sora text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1f1f1f]"
                >
                  Start a Project &#8594;
                </Link>
              </div>
            </div>

            <div className="hidden items-center justify-center p-12 lg:flex lg:p-14">
              <div
                className="flex h-72 w-full flex-col items-center justify-center gap-6 rounded-2xl px-10"
                style={{
                  background:
                    "linear-gradient(145deg, #181610 0%, #211e15 100%)",
                }}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo-white.svg"
                    alt="Code N Clicks logo"
                    width={44}
                    height={44}
                    className="h-11 w-auto object-contain"
                    priority={false}
                  />
                  <span className="font-sora text-[1.75rem] font-bold tracking-tight text-white">
                    Code N Clicks
                  </span>
                </div>

                <p className="max-w-[280px] text-center font-inter text-base font-medium leading-relaxed text-white/75">
                  Premium digital experiences crafted for brands that mean
                  business.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/20 px-3.5 py-1.5 font-inter text-sm font-medium text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute top-6 right-6 h-28 w-28 rounded-full border border-[#C6A969]/12" />
          <div className="pointer-events-none absolute top-14 right-14 h-10 w-10 rounded-full border border-[#C6A969]/18" />
        </div>
      </div>
    </section>
  );
}