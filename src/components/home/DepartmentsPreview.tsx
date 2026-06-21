"use client";

import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { LinkButton } from "@/components/shared/Button";
import { Modal } from "@/components/shared/Modal";
import { departmentFilters, departments } from "@/data/departments";
import type { Department, DepartmentCategory } from "@/types";
import { cn } from "@/lib/utils";

export function DepartmentsPreview() {
  const [active, setActive] = useState<DepartmentCategory>("সব বিভাগ");
  const [selected, setSelected] = useState<Department | null>(null);

  const filtered = useMemo(
    () => (active === "সব বিভাগ" ? departments : departments.filter((department) => department.category === active)),
    [active]
  );

  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="mb-8 flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-normal text-primary-dark md:text-4xl">একাডেমিক বিভাগসমূহ</h2>
          <div className="flex flex-wrap justify-center gap-2">
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
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((department) => (
            <article key={department.id} className="premium-card overflow-hidden rounded-xl bg-white" id={department.id}>
              <Image src={department.image} alt={department.title} width={720} height={420} className="h-48 w-full object-cover" />
              <div className="p-5">
                <p className="text-sm font-semibold text-gold">{department.level}</p>
                <h3 className="mt-1 text-xl font-bold text-primary-dark">{department.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{department.description}</p>
                <button
                  className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg bg-primary-soft px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                  onClick={() => setSelected(department)}
                >
                  বিস্তারিত দেখুন
                  <ArrowLeft className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <LinkButton href="/departments" variant="outline">
            সব বিভাগ দেখুন
          </LinkButton>
        </div>
      </div>
      <Modal open={Boolean(selected)} title={selected?.title ?? ""} onClose={() => setSelected(null)}>
        {selected ? (
          <div>
            <Image src={selected.image} alt={selected.title} width={900} height={520} className="mb-5 rounded-xl object-cover" />
            <p className="leading-8 text-slate-600">{selected.description}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["স্তর", selected.level],
                ["সময়কাল", selected.duration],
                ["আসন", selected.seats]
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg bg-primary-soft p-4 text-center">
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="mt-1 font-bold text-primary-dark">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-2">
              {selected.features.map((feature) => (
                <p key={feature} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {feature}
                </p>
              ))}
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
