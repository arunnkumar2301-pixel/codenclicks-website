import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import IntegratedSolutionsSection from "@/components/sections/IntegratedSolutionsSection";
import StrategySection from "@/components/sections/StrategySection";
import CTABand from "@/components/sections/CTABand";

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
