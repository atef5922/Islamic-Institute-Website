"use client";

import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { EmptyState } from "@/components/shared/EmptyState";
import { Modal } from "@/components/shared/Modal";
import { teachers } from "@/data/teachers";
import { cn } from "@/lib/utils";
import type { Teacher } from "@/types";

const departmentOptions = ["সব বিভাগ", ...Array.from(new Set(teachers.map((teacher) => teacher.department)))];

export function TeacherDirectory() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("সব বিভাগ");
  const [selected, setSelected] = useState<Teacher | null>(null);

  const filtered = useMemo(() => {
    return teachers
      .filter((teacher) => (department === "সব বিভাগ" ? true : teacher.department === department))
      .filter((teacher) => [teacher.name, teacher.subject, teacher.designation].some((value) => value.includes(query)));
  }, [department, query]);

  return (
    <div>
      <div className="mb-8 grid gap-3 md:grid-cols-[1fr_260px]">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            className="focus-ring min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 pr-11"
            placeholder="শিক্ষক খুঁজুন"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <select
          className="focus-ring min-h-12 rounded-lg border border-slate-200 bg-white px-4"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        >
          {departmentOptions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      {filtered.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((teacher) => (
            <article key={teacher.id} className="premium-card rounded-xl p-5 text-center">
              <Image src={teacher.image} alt={teacher.name} width={180} height={180} className="mx-auto h-28 w-28 rounded-full object-cover" />
              <h2 className="mt-4 text-lg font-bold text-primary-dark">{teacher.name}</h2>
              <p className="mt-1 text-sm text-slate-500">{teacher.designation}</p>
              <p className="mt-2 font-semibold text-slate-700">{teacher.subject}</p>
              <span className="mt-3 inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                {teacher.department}
              </span>
              <button
                className="focus-ring mt-4 w-full rounded-lg border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                onClick={() => setSelected(teacher)}
              >
                বিস্তারিত
              </button>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState text="এই অনুসন্ধানে কোনো শিক্ষক পাওয়া যায়নি" />
      )}

      <div className="mt-8 flex justify-center gap-2">
        {[ChevronRight, null, null, ChevronLeft].map((Icon, index) => (
          <button
            key={index}
            className={cn(
              "focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-sm font-bold",
              index === 1 ? "bg-primary text-white" : "bg-white text-slate-600"
            )}
          >
            {Icon ? <Icon className="h-4 w-4" /> : index === 1 ? "১" : "২"}
          </button>
        ))}
      </div>

      <Modal open={Boolean(selected)} title={selected?.name ?? ""} onClose={() => setSelected(null)}>
        {selected ? (
          <div className="grid gap-5 md:grid-cols-[180px_1fr]">
            <Image src={selected.image} alt={selected.name} width={220} height={220} className="h-44 w-44 rounded-xl object-cover" />
            <div>
              <p className="text-lg font-bold text-primary">{selected.designation}</p>
              <p className="mt-2 text-slate-600">বিষয়: {selected.subject}</p>
              <p className="mt-2 text-slate-600">অভিজ্ঞতা: {selected.experience}</p>
              <p className="mt-2 text-slate-600">বিভাগ: {selected.department}</p>
              <p className="mt-4 leading-8 text-slate-600">{selected.bio}</p>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
