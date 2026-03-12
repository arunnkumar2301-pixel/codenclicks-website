"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const SERVICE_LINKS = [
  "Branding & Creative Design",
  "Social Media Marketing",
  "SEO",
  "Website Design",
  "Paid Ads",
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <Image
                src="/logo-whitee.png"
                alt="Code N Clicks logo"
                width={44}
                height={44}
                className="h-10 w-auto object-contain"
                priority={false}
              />
              <span className="font-sora font-bold text-white text-xl tracking-tight group-hover:text-[#C6A969] transition-colors duration-300">
                Code N Clicks
              </span>
            </Link>

            <p className="font-inter text-white/40 text-sm leading-relaxed mb-8 max-w-[220px]">
              Stay connected for digital insights, ideas, and updates.
            </p>

            {subscribed ? (
              <p className="font-inter text-[#C6A969] text-sm mb-8">Thanks for subscribing ✦</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 mb-8">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 min-w-0 bg-white/5 border border-white/10 text-white text-xs px-4 py-3 rounded-xl placeholder:text-white/25 focus:outline-none focus:border-[#C6A969]/50 transition-colors font-inter"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="bg-[#C6A969] text-[#111111] px-4 py-3 rounded-xl text-sm font-sora font-bold hover:bg-[#D4BC87] transition-colors flex-shrink-0"
                >
                  →
                </button>
              </form>
            )}

            <div className="flex gap-2.5">
              <a
                href="https://www.instagram.com/codenclicksin?igsh=MTl4Znc3N3hwejFweg%3D%3D&utm_source=qr"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/35 hover:text-[#C6A969] hover:border-[#C6A969]/30 transition-all duration-200"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/codenclicks/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/35 hover:text-[#C6A969] hover:border-[#C6A969]/30 transition-all duration-200"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/p/Coden-clicks-61579730895848/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/35 hover:text-[#C6A969] hover:border-[#C6A969]/30 transition-all duration-200"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="https://youtube.com/@clicks.n.conversions?si=zE-tCDJQCMcLfnXk"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/35 hover:text-[#C6A969] hover:border-[#C6A969]/30 transition-all duration-200"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path d="M10 15l5-3-5-3v6z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sora font-semibold text-white/90 text-xs tracking-[0.18em] uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3.5">
              {SERVICE_LINKS.map((label) => (
                <li key={label}>
                  <Link href="/services" className="font-inter text-white/40 text-sm hover:text-[#C6A969] transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sora font-semibold text-white/90 text-xs tracking-[0.18em] uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3.5">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="font-inter text-white/40 text-sm hover:text-[#C6A969] transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sora font-semibold text-white/90 text-xs tracking-[0.18em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@codenclicks.in" className="font-inter text-white/40 text-sm hover:text-[#C6A969] transition-colors duration-200 break-all">
                  hello@codenclicks.in
                </a>
              </li>
              <li>
                <address className="font-inter text-white/40 text-sm not-italic leading-relaxed">
                  17, Extension-3, Nangloi,
                  <br />
                  Delhi - 110041,
                  <br />
                  India
                </address>
              </li>
              <li>
                <a href="tel:+918527855155" className="font-inter text-white/40 text-sm hover:text-[#C6A969] transition-colors duration-200">
                  +91 85278 55155
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 h-px bg-white/10" />

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Code N Clicks. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-inter text-white/25 text-xs hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-white/25 text-xs hover:text-white/50 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}