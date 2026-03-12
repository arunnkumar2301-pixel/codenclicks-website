import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/sections/CTABand";
import { BLOG_POSTS, getBlogBySlug } from "@/lib/blogs";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: Props) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#111111] pt-40 pb-20 lg:pb-24 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[50vw] h-[55vh] opacity-[0.06] blur-[110px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #C6A969 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)," +
                "linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="font-inter text-xs px-3 py-1.5 rounded-full bg-[#C6A969]/12 text-[#C6A969] font-medium">
                {post.category}
              </span>
              <span className="font-inter text-white/35 text-sm">{post.date}</span>
              <span className="font-inter text-white/35 text-sm">{post.readTime}</span>
            </div>

            <h1
              className="font-sora font-bold text-white leading-[1.06] tracking-tight mb-8"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              {post.title}
            </h1>

            <p className="font-inter text-white/60 text-lg leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <article className="space-y-7">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-inter text-[#111111]/70 text-base lg:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </article>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}