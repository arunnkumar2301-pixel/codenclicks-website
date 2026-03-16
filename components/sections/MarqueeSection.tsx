const ITEMS = [
  "Branding",
  "Web Design",
  "SEO",
  "Paid Ads",
  "Social Media",
  "Strategy",
  "Local Growth",
  "Influencer Marketing",
];

function Strip() {
  return (
    <>
      {ITEMS.map((item) => (
        <span key={item} className="inline-flex items-center whitespace-nowrap">
          <span
            className="font-sora font-bold tracking-tight text-[#111111]"
            style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.4rem)" }}
          >
            {item}
          </span>
          <span
            className="mx-5 select-none text-sm text-[#C6A969] sm:mx-7 sm:text-base"
            aria-hidden="true"
          >
            &#10022;
          </span>
        </span>
      ))}
    </>
  );
}

export default function MarqueeSection() {
  return (
    <section
      className="overflow-hidden border-y border-[#111111]/6 bg-white py-5 sm:py-7"
      aria-label="Services marquee"
    >
      <div className="hidden w-max items-center md:flex animate-marquee motion-reduce:animate-none">
        <Strip />
        <Strip />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 px-4 md:hidden">
        {ITEMS.map((item) => (
          <span key={item} className="inline-flex items-center whitespace-nowrap">
            <span className="font-sora text-lg font-bold tracking-tight text-[#111111]">
              {item}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}