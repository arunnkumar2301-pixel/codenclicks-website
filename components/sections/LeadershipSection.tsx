"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LEADERS = [
  {
    name: "Arun Kumar",
    role: "Founder",
    image:
      "https://res.cloudinary.com/dx8xkca5i/image/upload/f_auto,q_auto/v1773490173/founder-arunk_ppdudk.jpg",
    bio: "Arun Kumar is the Founder of Code N Clicks, guiding the company with a clear vision to help businesses grow through refined digital experiences and performance-led solutions. With a strong foundation in web development and growth-focused strategy, he believes the best digital work happens where creativity, technology, and measurable business outcomes meet.",
    extra:
      "At Code N Clicks, Arun leads innovation across projects, ensuring that every website, campaign, and digital solution is designed with both brand value and long-term client growth in mind.",
  },
  {
    name: "Jayant Mittal",
    role: "Co-Founder",
    image:
      "https://res.cloudinary.com/dx8xkca5i/image/upload/f_auto,q_auto/v1773490173/cofounder-jayant_drl8sb.jpg",
    bio: "Jayant Mittal is the Co-Founder of Code N Clicks and plays a key role in shaping the company’s direction, partnerships, and growth. He focuses on building strong client relationships and creating scalable digital solutions that align with modern business needs.",
    extra:
      "His approach combines strategic thinking with practical execution, helping brands strengthen their digital presence through clarity, consistency, and solutions built for long-term impact.",
  },
];

export default function LeadershipSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="w-12 h-0.5 bg-[#C6A969] mb-8" />
          <h2 className="font-sora font-bold text-[#111111] text-4xl lg:text-5xl leading-tight tracking-tight mb-5">
            Leadership
          </h2>
          <p className="font-inter text-[#111111]/55 text-base leading-relaxed max-w-2xl">
            Code N Clicks is shaped by leadership that values clarity, execution,
            and meaningful business growth — blending creative thinking with
            modern digital strategy.
          </p>
        </motion.div>

        <div className="space-y-10">
          {LEADERS.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.75,
                delay: 0.1 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-center rounded-3xl border border-[#111111]/6 bg-[#F8F4EA] p-6 md:p-8 lg:p-10"
            >
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#e8dfcf]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                </div>
                <div className="absolute -bottom-4 left-5 right-5 h-8 rounded-full bg-black/10 blur-xl" />
              </div>

              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="font-sora text-[#C6A969] text-xs tracking-[0.22em] uppercase">
                    {leader.role}
                  </span>
                  <span className="w-10 h-px bg-[#C6A969]/50" />
                </div>

                <h3 className="font-sora font-bold text-[#111111] text-3xl lg:text-4xl tracking-tight mb-6">
                  {leader.name}
                </h3>

                <p className="font-inter text-[#111111]/60 text-base leading-relaxed mb-5">
                  {leader.bio}
                </p>

                <p className="font-inter text-[#111111]/60 text-base leading-relaxed">
                  {leader.extra}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}