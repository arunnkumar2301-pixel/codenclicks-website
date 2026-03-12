import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/sections/CTABand";
import AboutHero from "@/components/sections/AboutHero";
import AboutStory from "@/components/sections/AboutStory";
import LeadershipSection from "@/components/sections/LeadershipSection";
import AboutValues from "@/components/sections/AboutValues";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Code N Clicks — our story, leadership, approach, and the people behind your digital growth.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <LeadershipSection />
        <AboutValues />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}