"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "Branding & Creative Design",
    desc: "We craft distinctive brand identities — from logo design and visual language to brand guidelines and campaign creatives. Every touchpoint is shaped to communicate your brand with clarity and confidence.",
    points: [
      "Logo & visual identity",
      "Brand guidelines",
      "Campaign creatives",
      "Social media brand assets",
      "Packaging & print design",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Social Media Marketing",
    desc: "We develop and manage social media strategies that build real engagement, grow audiences, and position your brand with consistency and purpose across the platforms that matter most.",
    points: [
      "Social strategy & planning",
      "Content creation",
      "Community management",
      "Platform growth",
      "Analytics & reporting",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Digital Marketing",
    desc: "We create integrated digital marketing strategies that connect all your channels into a cohesive system — so every campaign, every post, every ad works harder together.",
    points: [
      "Digital strategy",
      "Campaign planning",
      "Multi-channel marketing",
      "Performance tracking",
      "Funnel optimisation",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 17l5-5 4 3 7-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 7h3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Influencer Marketing",
    desc: "We identify, qualify, and manage influencer partnerships that align authentically with your brand — driving awareness, trust, and reach with real audiences.",
    points: [
      "Influencer identification",
      "Campaign management",
      "Briefing & creative direction",
      "Performance measurement",
      "Micro & macro influencers",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 18c.8-2.5 2.6-4 4-4s3.2 1.5 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 18c.8-2.5 2.6-4 4-4s3.2 1.5 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Google My Business & Local Citations",
    desc: "We optimise your Google Business Profile and build consistent local citations to improve your visibility in local search — helping nearby customers find and choose you.",
    points: [
      "GMB optimisation",
      "Review management",
      "Local citation building",
      "NAP consistency",
      "Local schema markup",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "SEO",
    desc: "We improve your organic search presence through technical excellence, strategic content, and authoritative link building — driving sustained visibility and qualified traffic over time.",
    points: [
      "Technical SEO audit",
      "On-page optimisation",
      "Keyword strategy",
      "Content planning",
      "Link building",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M20 20l-4.2-4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Website Design & Development",
    desc: "We design and build premium, responsive websites that reflect your brand with precision and convert visitors into customers — combining visual elegance with performance-focused development.",
    points: [
      "Custom UI/UX design",
      "Responsive development",
      "CMS integration",
      "Speed optimisation",
      "Conversion-focused structure",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 20h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "App Development",
    desc: "We design and develop modern mobile applications that combine strong user experience, reliable performance, and scalable architecture to help your business grow across digital touchpoints.",
    points: [
      "Android & iOS app development",
      "Cross-platform app solutions",
      "UI/UX for mobile apps",
      "API integration",
      "Performance & scalability",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="2.5" width="10" height="19" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "09",
    title: "Paid Ads",
    desc: "We plan, launch, and optimise paid media campaigns across Google, Meta, and other platforms — targeting the right audiences with the right messages to maximise return on ad spend.",
    points: [
      "Google Ads",
      "Meta & social ads",
      "Audience targeting",
      "Ad creative & copy",
      "Bid strategy & optimisation",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function AllServices() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#F5F5F2] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white rounded-2xl p-8 border border-[#111111]/5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/8 hover:border-[#C6A969]/25 transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C6A969] via-[#D4BC87] to-transparent opacity-70" />

              <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-xl border border-[#C6A969]/20 bg-[#F8F4EA] text-[#C6A969] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#C6A969] group-hover:text-[#111111]">
                {svc.icon}
              </div>

              <span className="font-sora text-[#C6A969] text-xs tracking-widest mb-5 block">
                {svc.num}
              </span>

              <h3 className="font-sora font-bold text-[#111111] text-[1.1rem] mb-4 leading-snug pr-14">
                {svc.title}
              </h3>

              <p className="font-inter text-[#111111]/55 text-sm leading-relaxed mb-6 flex-1">
                {svc.desc}
              </p>

              <ul className="space-y-2.5 mb-7">
                {svc.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A969] flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                    <span className="font-inter text-[#111111]/50 text-xs">{p}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-sora font-semibold text-[#111111] text-[13px] hover:text-[#C6A969] transition-colors duration-200 group/link"
              >
                Start a Project
                <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                  &#8594;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}