"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 24);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <nav
          className={`w-full max-w-6xl flex items-center justify-between px-5 py-3 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "bg-[#111111]/90 border-white/10 backdrop-blur-xl shadow-xl shadow-black/30"
              : "bg-[#111111]/70 border-white/10 backdrop-blur-md"
          }`}
          aria-label="Main navigation"
        >
          <Link href="/" className="group flex flex-shrink-0 items-center gap-3">
            <Image
              src="/logo-whitee.svg"
              alt="Code N Clicks logo"
              width={44}
              height={44}
              className="h-10 w-auto object-contain"
              priority
            />
            <span className="font-sora text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#C6A969] sm:text-xl">
              Code N Clicks
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`px-4 py-2 rounded-xl text-[13px] font-inter transition-all duration-200 ${
                    active
                      ? "text-[#C6A969] bg-white/5"
                      : "text-white/65 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#C6A969] px-5 py-2.5 text-[13px] font-sora font-semibold text-[#111111] transition-colors duration-200 hover:bg-[#D4BC87]"
            >
              Start a Project
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden flex h-8 w-8 flex-col justify-center gap-[5px]"
          >
            <span
              className={`block h-px bg-white origin-center transition-all duration-300 ${
                menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0 w-0" : "w-4"
              }`}
            />
            <span
              className={`block h-px bg-white origin-center transition-all duration-300 ${
                menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed top-[88px] left-4 right-4 z-40 rounded-2xl border border-white/10 bg-[#111111]/95 p-6 shadow-2xl backdrop-blur-xl transition-all duration-200 lg:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="mb-6 flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`px-4 py-3 rounded-xl text-sm font-inter transition-all duration-200 ${
                  active
                    ? "text-[#C6A969] bg-white/5"
                    : "text-white/65 hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="flex items-center justify-center rounded-xl bg-[#C6A969] px-5 py-3.5 text-sm font-sora font-semibold text-[#111111] transition-colors duration-200 hover:bg-[#D4BC87]"
        >
          Start a Project
        </Link>
      </div>
    </>
  );
}