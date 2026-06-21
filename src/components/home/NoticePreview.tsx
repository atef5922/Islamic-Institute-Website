"use client";

import { Download, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ToastButton } from "@/components/shared/ToastButton";
import { notices } from "@/data/notices";
import type { NoticeCategory } from "@/types";
import { cn } from "@/lib/utils";

const categories: Array<"সব" | NoticeCategory> = ["সব", "ভর্তি", "পরীক্ষা", "ফলাফল", "সাধারণ", "অভিভাবক সভা"];

export function NoticePreview() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"সব" | NoticeCategory>("সব");

  const filtered = useMemo(() => {
    return notices
      .filter((notice) => (category === "সব" ? true : notice.category === category))
      .filter((notice) => notice.title.includes(query) || notice.description.includes(query));
  }, [category, query]);

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader title="সর্বশেষ নোটিশ" />
        <div className="mb-6 grid gap-3 md:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              className="focus-ring min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 pr-11"
              placeholder="নোটিশ খুঁজুন..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                className={cn(
                  "focus-ring rounded-lg border px-4 py-2 text-sm font-semibold",
                  category === item ? "border-primary bg-primary text-white" : "border-slate-200 bg-white text-slate-600 hover:bg-primary-soft"
                )}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.slice(0, 4).map((notice) => (
            <article key={notice.id} className="premium-card rounded-xl p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">{notice.category}</span>
                  <h3 className="mt-3 text-xl font-bold text-primary-dark">{notice.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{notice.description}</p>
                  <p className="mt-2 text-sm text-slate-500">{notice.date}</p>
                </div>
                <ToastButton message="পিডিএফ ডাউনলোড ডেমো হিসেবে রাখা হয়েছে।">
                  <Download className="h-4 w-4" />
                  ডাউনলোড
                </ToastButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
