import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/sections/CTABand";
import BlogHero from "@/components/sections/BlogHero";
import BlogListing from "@/components/sections/BlogListing";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Digital marketing insights, SEO tips, branding advice, and growth strategies from the Code N Clicks team.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogHero />
        <BlogListing />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
