import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { blogPosts } from "@/data/blogs";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: "প্রবন্ধ" };
  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHero title={post.title} subtitle={post.excerpt} />
      <article className="section bg-white">
        <div className="container max-w-4xl">
          <Image src={post.image} alt={post.title} width={1200} height={680} className="rounded-xl object-cover shadow-soft" />
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-500">
            <span>{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
            <span>{post.author}</span>
          </div>
          <div className="prose prose-slate mt-8 max-w-none">
            {post.content.map((paragraph) => (
              <p key={paragraph} className="mb-5 text-lg leading-9 text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
          <Link href="/blog" className="mt-8 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-dark">
            সব প্রবন্ধে ফিরুন
          </Link>
        </div>
      </article>
    </>
  );
}
