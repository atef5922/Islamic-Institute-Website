"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { EmptyState } from "@/components/shared/EmptyState";
import { blogCategories, blogPosts } from "@/data/blogs";
import { cn } from "@/lib/utils";

export function BlogDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("সব");

  const filtered = useMemo(() => {
    return blogPosts
      .filter((post) => (category === "সব" ? true : post.category === category))
      .filter((post) => post.title.includes(query) || post.excerpt.includes(query));
  }, [category, query]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <div>
        <div className="mb-6 grid gap-3 md:grid-cols-[1fr_220px]">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              className="focus-ring min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 pr-11"
              placeholder="প্রবন্ধ খুঁজুন"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <select className="focus-ring min-h-12 rounded-lg border border-slate-200 bg-white px-4" value={category} onChange={(event) => setCategory(event.target.value)}>
            {blogCategories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        {filtered.length ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((post) => (
              <article key={post.slug} className="premium-card overflow-hidden rounded-xl bg-white">
                <Image src={post.image} alt={post.title} width={900} height={520} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm font-semibold text-gold">{post.category} · {post.date}</p>
                  <h2 className="mt-3 text-2xl font-bold leading-snug text-primary-dark">{post.title}</h2>
                  <p className="mt-3 leading-8 text-slate-600">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark">
                    বিস্তারিত পড়ুন
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState text="এই অনুসন্ধানে কোনো প্রবন্ধ পাওয়া যায়নি" />
        )}
      </div>
      <aside className="space-y-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
          <h3 className="text-xl font-bold text-primary-dark">সাম্প্রতিক প্রবন্ধ</h3>
          <div className="mt-4 space-y-4">
            {blogPosts.slice(0, 4).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-lg p-3 transition hover:bg-primary-soft">
                <p className="font-semibold text-slate-800">{post.title}</p>
                <p className="mt-1 text-sm text-slate-500">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
          <h3 className="text-xl font-bold text-primary-dark">বিভাগ</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {blogCategories.map((item) => (
              <button
                key={item}
                className={cn("focus-ring rounded-full border px-3 py-1 text-sm", category === item ? "border-primary bg-primary text-white" : "border-slate-200 text-slate-600")}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
