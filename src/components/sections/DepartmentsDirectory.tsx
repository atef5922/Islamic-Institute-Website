"use client";

import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Modal } from "@/components/shared/Modal";
import { departmentFilters, departments } from "@/data/departments";
import { cn } from "@/lib/utils";
import type { Department, DepartmentCategory } from "@/types";

export function DepartmentsDirectory() {
  const [active, setActive] = useState<DepartmentCategory>("সব বিভাগ");
  const [selected, setSelected] = useState<Department | null>(null);

  const filtered = useMemo(
    () => (active === "সব বিভাগ" ? departments : departments.filter((department) => department.category === active)),
    [active]
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {departmentFilters.map((filter) => (
          <button
            key={filter}
            className={cn(
              "focus-ring rounded-lg border px-4 py-2 text-sm font-semibold transition",
              active === filter ? "border-primary bg-primary text-white" : "border-slate-200 bg-white text-slate-600 hover:bg-primary-soft"
            )}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((department) => (
          <article key={department.id} className="premium-card overflow-hidden rounded-xl bg-white" id={department.id}>
            <Image src={department.image} alt={department.title} width={900} height={540} className="h-56 w-full object-cover" />
            <div className="p-6">
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">{department.category}</span>
              <h2 className="mt-4 text-2xl font-bold text-primary-dark">{department.title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{department.description}</p>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center text-sm">
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-slate-500">স্তর</p>
                  <p className="font-bold text-slate-800">{department.level}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-slate-500">সময়</p>
                  <p className="font-bold text-slate-800">{department.duration}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-slate-500">আসন</p>
                  <p className="font-bold text-slate-800">{department.seats}</p>
                </div>
              </div>
              <button
                className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
                onClick={() => setSelected(department)}
              >
                বিস্তারিত দেখুন
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
      <Modal open={Boolean(selected)} title={selected?.title ?? ""} onClose={() => setSelected(null)}>
        {selected ? (
          <div>
            <p className="leading-8 text-slate-600">{selected.description}</p>
            <div className="mt-5 space-y-2">
              {selected.features.map((feature) => (
                <p key={feature} className="flex items-center gap-2 rounded-lg bg-primary-soft p-3 text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {feature}
                </p>
              ))}
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
