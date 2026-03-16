import Link from "next/link";

const CARDS = [
  {
    title: "Branding & Creative Design",
    description:
      "We create distinctive brand identities and visual systems that help businesses stand out with clarity and consistency.",
    bullets: [
      "Logo and visual identity design",
      "Brand guidelines and creative direction",
      "Marketing and campaign creatives",
      "Social media and digital brand assets",
    ],
    cta: "Learn More About Branding",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="#C6A969"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17l10 5 10-5"
          stroke="#C6A969"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12l10 5 10-5"
          stroke="#C6A969"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "SEO & Local Growth",
    description:
      "We improve your visibility across search and local discovery channels so customers can find your business faster.",
    bullets: [
      "On-page and technical SEO",
      "Keyword strategy and content planning",
      "Google My Business optimisation",
      "Local citations and local search growth",
    ],
    cta: "Learn More About SEO",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" stroke="#C6A969" strokeWidth="1.5" />
        <path
          d="M21 21l-4.35-4.35"
          stroke="#C6A969"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 11h6M11 8v6"
          stroke="#C6A969"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Website Design & Development",
    description:
      "We build premium, responsive websites designed to reflect your brand and convert visitors into customers.",
    bullets: [
      "Custom website design",
      "Responsive development",
      "Speed and performance optimisation",
      "Conversion-focused UX structure",
    ],
    cta: "Learn More About Web Design",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          stroke="#C6A969"
          strokeWidth="1.5"
        />
        <path
          d="M8 21h8M12 17v4"
          stroke="#C6A969"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function ServicesOverviewSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-xs font-sora text-4xl font-bold leading-tight tracking-tight text-[#111111] lg:text-5xl">
            Our full-service
            <br />
            digital offering&hellip;
          </h2>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-[#111111]/20 px-6 py-3 font-sora text-sm font-semibold text-[#111111] transition-all duration-200 hover:border-[#111111]"
            >
              View All Services &#8594;
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col rounded-2xl border-t-2 border-[#C6A969] bg-[#F5F5F2] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                {card.icon}
              </div>

              <h3 className="mb-3 font-sora text-[1.1rem] font-bold leading-snug text-[#111111]">
                {card.title}
              </h3>

              <p className="mb-6 font-inter text-sm leading-relaxed text-[#111111]/55">
                {card.description}
              </p>

              <ul className="mb-8 flex-1 space-y-2.5">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-[#C6A969]" />
                    <span className="font-inter text-xs leading-relaxed text-[#111111]/55">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="group/btn inline-flex items-center gap-1.5 font-sora text-[13px] font-semibold text-[#111111] transition-colors duration-200 hover:text-[#C6A969]"
              >
                {card.cta}
                <span className="transition-transform duration-200 group-hover/btn:translate-x-1">
                  &#8594;
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}