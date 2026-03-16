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
        >
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <Image
              src="/logo-whitee.png"
              alt="Code N Clicks logo"
              width={44}
              height={44}
              className="h-10 w-auto object-contain"
              priority
            />
            <span className="font-sora font-bold text-white text-lg sm:text-xl tracking-tight group-hover:text-[#C6A969] transition-colors duration-300">
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
              className="inline-flex items-center gap-1.5 bg-[#C6A969] text-[#111111] px-5 py-2.5 rounded-xl text-[13px] font-sora font-semibold hover:bg-[#D4BC87] transition-colors duration-200"
            >
              Start a Project
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
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
        className={`fixed top-[88px] left-4 right-4 z-40 border border-white/10 rounded-2xl bg-[#111111]/95 backdrop-blur-xl shadow-2xl p-6 transition-all duration-200 lg:hidden ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1 mb-6">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
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
          className="flex items-center justify-center bg-[#C6A969] text-[#111111] px-5 py-3.5 rounded-xl text-sm font-sora font-semibold hover:bg-[#D4BC87] transition-colors duration-200"
        >
          Start a Project
        </Link>
      </div>
    </>
  );
}