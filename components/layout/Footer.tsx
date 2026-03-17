import Link from "next/link";
import Image from "next/image";

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
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/" className="group mb-6 inline-flex items-center gap-3">
              <Image
                src="/logo-white.svg"
                alt="Code N Clicks logo"
                width={44}
                height={44}
                className="h-10 w-auto object-contain"
              />
              <span className="font-sora text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#C6A969]">
                Code N Clicks
              </span>
            </Link>

            <p className="mb-8 max-w-[220px] font-inter text-sm leading-relaxed text-white/40">
              Stay connected for digital insights, ideas, and updates.
            </p>

            <form className="mb-8 flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-xs text-white placeholder:text-white/25 transition-colors focus:border-[#C6A969]/50 focus:outline-none"
              />
              <button
                type="button"
                aria-label="Subscribe"
                className="flex-shrink-0 rounded-xl bg-[#C6A969] px-4 py-3 font-sora text-sm font-bold text-[#111111] transition-colors hover:bg-[#D4BC87]"
              >
                →
              </button>
            </form>

            <div className="flex gap-2.5">
              <a
                href="https://www.instagram.com/codenclicksin?igsh=MTl4Znc3N3hwejFweg%3D%3D&utm_source=qr"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/35 transition-all duration-200 hover:border-[#C6A969]/30 hover:text-[#C6A969]"
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
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/35 transition-all duration-200 hover:border-[#C6A969]/30 hover:text-[#C6A969]"
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
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/35 transition-all duration-200 hover:border-[#C6A969]/30 hover:text-[#C6A969]"
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
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/35 transition-all duration-200 hover:border-[#C6A969]/30 hover:text-[#C6A969]"
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
            <h4 className="mb-6 font-sora text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Services
            </h4>
            <ul className="space-y-3.5">
              {SERVICE_LINKS.map((label) => (
                <li key={label}>
                  <Link
                    href="/services"
                    className="font-inter text-sm text-white/40 transition-colors duration-200 hover:text-[#C6A969]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-sora text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Company
            </h4>
            <ul className="space-y-3.5">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-inter text-sm text-white/40 transition-colors duration-200 hover:text-[#C6A969]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-sora text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@codenclicks.in"
                  className="break-all font-inter text-sm text-white/40 transition-colors duration-200 hover:text-[#C6A969]"
                >
                  hello@codenclicks.in
                </a>
              </li>
              <li>
                <address className="font-inter text-sm not-italic leading-relaxed text-white/40">
                  17, Extension-3, Nangloi,
                  <br />
                  Delhi - 110041,
                  <br />
                  India
                </address>
              </li>
              <li>
                <a
                  href="tel:+918527855155"
                  className="font-inter text-sm text-white/40 transition-colors duration-200 hover:text-[#C6A969]"
                >
                  +91 85278 55155
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 h-px bg-white/10" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-inter text-xs text-white/25">
            &copy; {new Date().getFullYear()} Code N Clicks. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-inter text-xs text-white/25 transition-colors hover:text-white/50">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-xs text-white/25 transition-colors hover:text-white/50">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}