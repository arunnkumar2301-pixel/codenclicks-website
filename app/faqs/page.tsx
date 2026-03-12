import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/sections/CTABand";
import FAQHero from "@/components/sections/FAQHero";
import FAQAccordion from "@/components/sections/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about working with Code N Clicks — our process, services, pricing, and timelines.",
};

export default function FAQsPage() {
  return (
    <>
      <Navbar />
      <main>
        <FAQHero />
        <FAQAccordion />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
