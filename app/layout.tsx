import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "Code N Clicks — Digital Marketing Agency",
    template: "%s | Code N Clicks",
  },
  description:
    "Code N Clicks is a premium digital marketing agency specialising in branding, website design, SEO, social media marketing, paid ads, influencer marketing, and digital strategy.",
  keywords: [
    "digital marketing agency",
    "branding agency",
    "SEO agency",
    "website design",
    "social media marketing",
    "paid advertising",
    "influencer marketing",
    "digital strategy",
  ],
  openGraph: {
    title: "Code N Clicks — Digital Marketing Agency",
    description: "We build digital experiences that convert, scale and last.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code N Clicks — Digital Marketing Agency",
    description: "We build digital experiences that convert, scale and last.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}