"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryCategories, galleryItems } from "@/data/gallery";
import type { GalleryCategory, GalleryItem } from "@/types";
import { cn } from "@/lib/utils";

type Filter = "সব ছবি" | GalleryCategory;

export function GalleryGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<Filter>("সব ছবি");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered = useMemo(() => {
    const items = active === "সব ছবি" ? galleryItems : galleryItems.filter((item) => item.category === active);
    return typeof limit === "number" ? items.slice(0, limit) : items;
  }, [active, limit]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {galleryCategories.map((category) => (
          <button
            key={category}
            className={cn(
              "focus-ring rounded-lg border px-4 py-2 text-sm font-semibold transition",
              active === category ? "border-primary bg-primary text-white" : "border-slate-200 bg-white text-slate-600 hover:bg-primary-soft"
            )}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            className={cn(
              "group relative overflow-hidden rounded-xl text-right shadow-soft",
              index % 5 === 0 && !limit ? "sm:col-span-2 sm:row-span-2" : ""
            )}
            onClick={() => setSelected(item)}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={900}
              height={650}
              className={cn("h-56 w-full object-cover transition duration-500 group-hover:scale-105", index % 5 === 0 && !limit ? "sm:h-full" : "")}
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-4 right-4 rounded-lg bg-white/90 px-3 py-2 text-sm font-bold text-primary-dark">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/80 p-4" role="dialog" aria-modal="true">
          <button className="absolute inset-0 h-full w-full" aria-label="বন্ধ করুন" onClick={() => setSelected(null)} />
          <div className="relative w-full max-w-5xl">
            <button
              className="focus-ring absolute -top-12 left-0 rounded-full bg-white p-2 text-slate-700"
              aria-label="বন্ধ করুন"
              onClick={() => setSelected(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <Image
              src={selected.image}
              alt={selected.title}
              width={1400}
              height={900}
              className="max-h-[82vh] w-full rounded-xl object-contain"
            />
            <p className="mt-3 text-center text-lg font-bold text-white">{selected.title}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
