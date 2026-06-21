"use client";

import { CalendarDays, Download, FileText, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { EmptyState } from "@/components/shared/EmptyState";
import { Modal } from "@/components/shared/Modal";
import { ToastButton } from "@/components/shared/ToastButton";
import { notices } from "@/data/notices";
import { cn } from "@/lib/utils";
import type { Notice, NoticeCategory } from "@/types";

const categories: Array<"সব" | NoticeCategory> = ["সব", "ভর্তি", "পরীক্ষা", "ফলাফল", "সাধারণ", "অভিভাবক সভা"];

export function NoticeDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"সব" | NoticeCategory>("সব");
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState<Notice | null>(null);

  const filtered = useMemo(() => {
    return notices
      .filter((notice) => (category === "সব" ? true : notice.category === category))
      .filter((notice) => (date ? notice.date.includes(date) : true))
      .filter((notice) => notice.title.includes(query) || notice.description.includes(query));
  }, [category, date, query]);

  return (
    <div>
      <div className="mb-6 grid gap-3 lg:grid-cols-[1fr_220px_220px]">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            className="focus-ring min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 pr-11"
            placeholder="নোটিশ খুঁজুন"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <select className="focus-ring min-h-12 rounded-lg border border-slate-200 bg-white px-4" value={category} onChange={(event) => setCategory(event.target.value as "সব" | NoticeCategory)}>
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select className="focus-ring min-h-12 rounded-lg border border-slate-200 bg-white px-4" value={date} onChange={(event) => setDate(event.target.value)}>
          <option value="">সব তারিখ</option>
          <option value="ডিসেম্বর">ডিসেম্বর</option>
          <option value="জানুয়ারি">জানুয়ারি</option>
        </select>
      </div>
      <div className="space-y-4">
        {filtered.length ? (
          filtered.map((notice) => (
            <article key={notice.id} className="premium-card rounded-xl p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <FileText className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <span className="rounded-full bg-primary-soft px-3 py-1 font-semibold text-primary">{notice.category}</span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {notice.date}
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-primary-dark">{notice.title}</h2>
                  <p className="mt-2 leading-7 text-slate-600">{notice.description}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="focus-ring rounded-lg border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                    onClick={() => setSelected(notice)}
                  >
                    বিস্তারিত
                  </button>
                  <ToastButton message="নোটিশ পিডিএফ ডেমো হিসেবে রাখা হয়েছে।">
                    <Download className="h-4 w-4" />
                  </ToastButton>
                </div>
              </div>
            </article>
          ))
        ) : (
          <EmptyState text="কোনো নোটিশ পাওয়া যায়নি" />
        )}
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {["১", "২", "৩"].map((item, index) => (
          <button key={item} className={cn("focus-ring h-10 w-10 rounded-lg border text-sm font-bold", index === 0 ? "border-primary bg-primary text-white" : "border-slate-200 bg-white text-slate-600")}>
            {item}
          </button>
        ))}
      </div>
      <Modal open={Boolean(selected)} title={selected?.title ?? ""} onClose={() => setSelected(null)}>
        {selected ? (
          <div>
            <p className="mb-2 text-sm font-semibold text-primary">{selected.category} · {selected.date}</p>
            <p className="leading-8 text-slate-600">{selected.description}</p>
            <ToastButton className="mt-5" message="নোটিশ পিডিএফ ডেমো হিসেবে রাখা হয়েছে।">
              <Download className="h-4 w-4" />
              {selected.fileLabel}
            </ToastButton>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
