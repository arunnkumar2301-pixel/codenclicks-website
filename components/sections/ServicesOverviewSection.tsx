"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CARDS = [
  {
    title: "Branding & Creative Design",
    description: "We create distinctive brand identities and visual systems that help businesses stand out with clarity and consistency.",
    bullets: ["Logo and visual identity design", "Brand guidelines and creative direction", "Marketing and campaign creatives", "Social media and digital brand assets"],
    cta: "Learn More About Branding",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#C6A969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="#C6A969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="#C6A969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "SEO & Local Growth",
    description: "We improve your visibility across search and local discovery channels so customers can find your business faster.",
    bullets: ["On-page and technical SEO", "Keyword strategy and content planning", "Google My Business optimisation", "Local citations and local search growth"],
    cta: "Learn More About SEO",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" stroke="#C6A969" strokeWidth="1.5" />
        <path d="M21 21l-4.35-4.35" stroke="#C6A969" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 11h6M11 8v6" stroke="#C6A969" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Website Design & Development",
    description: "We build premium, responsive websites designed to reflect your brand and convert visitors into customers.",
    bullets: ["Custom website design", "Responsive development", "Speed and performance optimisation", "Conversion-focused UX structure"],
    cta: "Learn More About Web Design",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#C6A969" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="#C6A969" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ServicesOverviewSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-sora font-bold text-[#111111] text-4xl lg:text-5xl leading-tight tracking-tight max-w-xs"
          >
            Our full-service
            <br />
            digital offering&hellip;
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/services" className="inline-flex items-center gap-2 border border-[#111111]/20 text-[#111111] px-6 py-3 rounded-xl font-sora font-semibold text-sm hover:border-[#111111] transition-all duration-200">
              View All Services &#8594;
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.14 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-[#F5F5F2] rounded-2xl p-8 border-t-2 border-[#C6A969] hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 flex flex-col"
            >
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                {card.icon}
              </div>
              <h3 className="font-sora font-bold text-[#111111] text-[1.1rem] mb-3 leading-snug">{card.title}</h3>
              <p className="font-inter text-[#111111]/55 text-sm leading-relaxed mb-6">{card.description}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-[#C6A969] flex-shrink-0" />
                    <span className="font-inter text-[#111111]/55 text-xs leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="inline-flex items-center gap-1.5 font-sora font-semibold text-[#111111] text-[13px] hover:text-[#C6A969] transition-colors duration-200 group/btn">
                {card.cta}
                <span className="group-hover/btn:translate-x-1 transition-transform duration-200">&#8594;</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
