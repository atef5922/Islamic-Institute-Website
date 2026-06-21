"use client";

import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Button } from "@/components/shared/Button";
import { Modal } from "@/components/shared/Modal";
import { ToastButton } from "@/components/shared/ToastButton";
import { events } from "@/data/events";
import { cn } from "@/lib/utils";
import type { EventItem } from "@/types";

type EventFilter = "সব" | "আসন্ন" | "সম্পন্ন";

export function EventsDirectory() {
  const [filter, setFilter] = useState<EventFilter>("সব");
  const [selected, setSelected] = useState<EventItem | null>(null);
  const filtered = useMemo(() => (filter === "সব" ? events : events.filter((event) => event.status === filter)), [filter]);

  return (
    <div>
      <div className="mb-8 flex justify-center gap-2">
        {(["সব", "আসন্ন", "সম্পন্ন"] as EventFilter[]).map((item) => (
          <button
            key={item}
            className={cn(
              "focus-ring rounded-lg border px-4 py-2 text-sm font-semibold",
              filter === item ? "border-primary bg-primary text-white" : "border-slate-200 bg-white text-slate-600 hover:bg-primary-soft"
            )}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((event) => (
          <article key={event.id} className="premium-card overflow-hidden rounded-xl bg-white">
            <Image src={event.image} alt={event.title} width={900} height={520} className="h-60 w-full object-cover" />
            <div className="p-6">
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">{event.status}</span>
              <h2 className="mt-4 text-2xl font-bold text-primary-dark">{event.title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{event.description}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  {event.date} · {event.time}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  {event.location}
                </span>
              </div>
              <div className="mt-5 flex gap-2">
                <Button variant="outline" onClick={() => setSelected(event)}>
                  বিস্তারিত
                </Button>
                <ToastButton message="নিবন্ধন অনুরোধ গ্রহণ করা হয়েছে।">নিবন্ধন</ToastButton>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Modal open={Boolean(selected)} title={selected?.title ?? ""} onClose={() => setSelected(null)}>
        {selected ? (
          <div>
            <Image src={selected.image} alt={selected.title} width={900} height={520} className="mb-5 rounded-xl object-cover" />
            <p className="leading-8 text-slate-600">{selected.description}</p>
            <p className="mt-4 font-semibold text-primary-dark">{selected.date} · {selected.time} · {selected.location}</p>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
