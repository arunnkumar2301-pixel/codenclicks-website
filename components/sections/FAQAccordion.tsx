"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";

const FAQS = [
  { category: "General", q: "What does Code N Clicks do?", a: "Code N Clicks is a full-service digital marketing agency. We specialise in branding and creative design, website design and development, SEO, social media marketing, paid advertising, influencer marketing, Google My Business optimisation, and digital strategy consulting. We work with businesses across a wide range of industries to help them grow their digital presence and attract more customers." },
  { category: "General", q: "What types of businesses do you work with?", a: "We work with businesses of all sizes — from ambitious startups and growing SMEs to established companies looking to strengthen their digital presence. Our clients span industries including retail, professional services, hospitality, healthcare, technology, and more. If you're looking to grow online, we're here to help." },
  { category: "Process", q: "What does the onboarding process look like?", a: "We begin every new client relationship with a discovery session — a focused conversation to understand your brand, your audience, your current digital situation, and your goals. From there, we develop a tailored strategy and present a clear proposal. Once agreed, we move into the project or retainer phase with defined timelines and regular communication throughout." },
  { category: "Process", q: "How long does it typically take to see results?", a: "It depends on the service. Paid advertising can generate measurable results within days of launching. SEO typically builds meaningful traction over 3 to 6 months as your rankings and authority improve. Branding and web design projects are usually completed within 4 to 10 weeks depending on scope. We set realistic expectations from the outset and keep you informed at every stage." },
  { category: "Services", q: "Do you offer one-off projects or ongoing retainers?", a: "Both. Some clients engage us for specific projects — a website build, a brand refresh, or a one-time SEO audit. Others work with us on an ongoing basis for services like social media management, SEO, or paid advertising. We're flexible and design engagements to suit what makes sense for your business." },
  { category: "Services", q: "Can you manage our social media accounts?", a: "Yes. We offer comprehensive social media management including strategy, content planning, content creation, scheduling, community management, and monthly performance reporting. We tailor our approach to your brand tone, your audience, and the platforms that are most relevant for your business." },
  { category: "Services", q: "Do you run Google and Meta ads?", a: "Yes, paid advertising is one of our core services. We manage Google Search, Display, Shopping, and Performance Max campaigns, as well as Meta (Facebook and Instagram) and other social advertising. We handle everything from strategy and audience targeting to ad creative, bid management, and ongoing optimisation." },
  { category: "Services", q: "Can you help with our Google My Business profile?", a: "Absolutely. We optimise your Google Business Profile to improve visibility in local search results, manage review responses, build consistent local citations, and ensure your NAP (Name, Address, Phone) information is accurate across the web. This is particularly valuable for businesses serving local customers." },
  { category: "Working Together", q: "Will we have a dedicated point of contact?", a: "Yes. Every client has a dedicated account manager who is your primary point of contact throughout the engagement. You'll know exactly who to reach out to, and we maintain consistent, transparent communication via your preferred channels — whether that's email, video calls, or a project management tool." },
  { category: "Working Together", q: "How do you report on performance?", a: "We provide regular performance reports tailored to the services we're delivering — whether that's SEO rankings and traffic, paid ad spend and return, social media engagement metrics, or overall campaign performance. Reports are clear, honest, and focused on the metrics that matter to your business." },
  { category: "Pricing", q: "How is your pricing structured?", a: "Our pricing varies based on the scope and nature of the work. Project-based work (like website design or a branding package) is quoted on a fixed-fee basis. Ongoing services like SEO, social media management, or paid advertising are structured as monthly retainers. We provide clear, transparent proposals before any work begins — no hidden costs." },
  { category: "Pricing", q: "What is the minimum engagement to work with you?", a: "For ongoing services, we generally recommend a minimum 3-month engagement to allow sufficient time to implement strategy and measure meaningful results. For project-based work, there's no minimum — we're happy to scope individual projects. Get in touch and we'll discuss what makes sense for your goals and budget." },
];

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }} className="border-b border-[#111111]/8 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-6 py-6 text-left group" aria-expanded={open}>
        <div>
          <span className="font-inter text-[#C6A969] text-[11px] tracking-widest uppercase mb-1.5 block">{faq.category}</span>
          <span className="font-sora font-semibold text-[#111111] text-[15px] leading-snug group-hover:text-[#C6A969] transition-colors duration-200">{faq.q}</span>
        </div>
        <span className={`flex-shrink-0 mt-1 w-7 h-7 rounded-full border border-[#111111]/12 flex items-center justify-center transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          <svg width="11" height="11" fill="none" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M6 2v8M2 6h8" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <p className="font-inter text-[#111111]/55 text-sm leading-relaxed pb-7 max-w-2xl">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQAccordion() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="bg-[#F5F5F2] py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mb-12">
          <div className="w-12 h-0.5 bg-[#C6A969] mb-8" />
          <h2 className="font-sora font-bold text-[#111111] text-3xl lg:text-4xl mb-3 tracking-tight">Frequently Asked Questions</h2>
          <p className="font-inter text-[#111111]/45 text-sm">
            {"Can't find what you're looking for? "}
            <Link href="/contact" className="text-[#C6A969] underline underline-offset-2 hover:text-[#D4BC87] transition-colors">
              Get in touch directly.
            </Link>
          </p>
        </motion.div>
        <div className="bg-white rounded-2xl px-8 lg:px-12 py-4 border border-[#111111]/5">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
