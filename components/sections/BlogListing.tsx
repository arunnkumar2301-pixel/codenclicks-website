"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BLOG_POSTS } from "@/lib/blogs";

const CATEGORY_STYLES: Record<string, string> = {
  SEO: "bg-emerald-50 text-emerald-700",
  Branding: "bg-amber-50 text-amber-700",
  "Paid Ads": "bg-blue-50 text-blue-700",
  "Web Design": "bg-purple-50 text-purple-700",
  "Social Media": "bg-pink-50 text-pink-700",
  Strategy: "bg-[#F5F5F2] text-[#111111]",
  "Influencer Marketing": "bg-rose-50 text-rose-700",
};

const featured = BLOG_POSTS.find((p) => p.featured)!;
const grid = BLOG_POSTS.filter((p) => !p.featured);

export default function BlogListing() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#F5F5F2] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={`/blog/${featured.slug}`}
            className="block bg-white rounded-3xl p-10 lg:p-14 mb-10 border border-[#111111]/5 group"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-inter text-xs px-3 py-1.5 rounded-full bg-[#C6A969]/12 text-[#C6A969] font-medium">
                Featured
              </span>
              <span className={`font-inter text-xs px-3 py-1.5 rounded-full ${CATEGORY_STYLES[featured.category] ?? ""}`}>
                {featured.category}
              </span>
              <span className="font-inter text-[#111111]/35 text-xs">{featured.date}</span>
            </div>

            <h2 className="font-sora font-bold text-[#111111] text-3xl lg:text-4xl leading-tight tracking-tight mb-5 max-w-2xl group-hover:text-[#C6A969] transition-colors duration-200">
              {featured.title}
            </h2>

            <p className="font-inter text-[#111111]/55 text-base leading-relaxed mb-8 max-w-xl">
              {featured.excerpt}
            </p>

            <div className="flex items-center gap-6">
              <span className="font-sora font-semibold text-[#111111] text-sm group-hover:text-[#C6A969] transition-colors duration-200">
                Read Article &#8594;
              </span>
              <span className="font-inter text-[#111111]/30 text-xs">{featured.readTime}</span>
            </div>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grid.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl p-7 border border-[#111111]/5 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className={`font-inter text-xs px-2.5 py-1 rounded-full ${CATEGORY_STYLES[post.category] ?? "bg-[#F5F5F2] text-[#111111]"}`}>
                    {post.category}
                  </span>
                  <span className="font-inter text-[#111111]/30 text-xs">{post.date}</span>
                </div>

                <h3 className="font-sora font-bold text-[#111111] text-[1.05rem] leading-snug mb-3 min-h-[72px] group-hover:text-[#C6A969] transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="font-inter text-[#111111]/50 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-[#111111]/5">
                  <span className="font-inter text-[#111111]/30 text-xs">{post.readTime}</span>
                  <span className="font-sora font-semibold text-[#111111] text-xs group-hover:text-[#C6A969] transition-colors duration-200">
                    Read &#8594;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}