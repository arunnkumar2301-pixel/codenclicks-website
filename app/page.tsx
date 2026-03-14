import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"));
const WhatWeDoSection = dynamic(() => import("@/components/sections/WhatWeDoSection"));
const ServicesOverviewSection = dynamic(() => import("@/components/sections/ServicesOverviewSection"));
const MarqueeSection = dynamic(() => import("@/components/sections/MarqueeSection"));
const IntegratedSolutionsSection = dynamic(() => import("@/components/sections/IntegratedSolutionsSection"));
const StrategySection = dynamic(() => import("@/components/sections/StrategySection"));
const CTABand = dynamic(() => import("@/components/sections/CTABand"));

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <ServicesOverviewSection />
        <MarqueeSection />
        <IntegratedSolutionsSection />
        <StrategySection />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}