"use client";

const ITEMS = ["Branding", "Web Design", "SEO", "Paid Ads", "Social Media", "Strategy", "Local Growth", "Influencer Marketing"];

function Strip() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className="inline-flex items-center whitespace-nowrap">
          <span className="font-sora font-bold text-[#111111] tracking-tight" style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.9rem)" }}>
            {item}
          </span>
          <span className="text-[#C6A969] mx-7 text-base select-none" aria-hidden="true">&#10022;</span>
        </span>
      ))}
    </>
  );
}

export default function MarqueeSection() {
  return (
    <section className="bg-white border-y border-[#111111]/6 py-7 overflow-hidden" aria-label="Services marquee">
      <div className="flex items-center w-max animate-marquee">
        <Strip />
        <Strip />
      </div>
    </section>
  );
}
