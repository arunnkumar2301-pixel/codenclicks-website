import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/sections/CTABand";
import ServicesHero from "@/components/sections/ServicesHero";
import AllServices from "@/components/sections/AllServices";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore all services offered by Code N Clicks — branding, SEO, website design, social media, paid ads, influencer marketing, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <AllServices />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
