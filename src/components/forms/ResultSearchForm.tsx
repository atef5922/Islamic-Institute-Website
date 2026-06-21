"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Download, Search } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/shared/Button";
import { ToastButton } from "@/components/shared/ToastButton";
import { departments } from "@/data/departments";
import { resultSearchSchema, type ResultSearchValues } from "@/lib/validations";

const inputClass = "focus-ring min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-slate-800";

export function ResultSearchForm() {
  const [searched, setSearched] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ResultSearchValues>({
    resolver: zodResolver(resultSearchSchema),
    defaultValues: { roll: "", department: "", year: "২০২৬" }
  });

  const onSubmit = () => {
    setSearched(true);
    toast.success("মক ফলাফল পাওয়া গেছে।");
  };

  return (
    <div className="space-y-6">
      <form className="grid gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-soft md:grid-cols-[1fr_1fr_1fr_auto]" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="roll">
            রোল নম্বর
          </label>
          <input id="roll" className={inputClass} placeholder="রোল লিখুন" {...register("roll")} />
          {errors.roll ? <p className="mt-1 text-sm text-red-600">{errors.roll.message}</p> : null}
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="department">
            বিভাগ
          </label>
          <select id="department" className={inputClass} {...register("department")}>
            <option value="">বিভাগ নির্বাচন করুন</option>
            {departments.map((department) => (
              <option key={department.id} value={department.title}>
                {department.title}
              </option>
            ))}
          </select>
          {errors.department ? <p className="mt-1 text-sm text-red-600">{errors.department.message}</p> : null}
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="year">
            শিক্ষাবর্ষ
          </label>
          <select id="year" className={inputClass} {...register("year")}>
            <option value="২০২৬">২০২৬</option>
            <option value="২০২৫">২০২৫</option>
            <option value="২০২৪">২০২৪</option>
          </select>
          {errors.year ? <p className="mt-1 text-sm text-red-600">{errors.year.message}</p> : null}
        </div>
        <div className="flex items-end">
          <Button className="w-full">
            <Search className="h-4 w-4" />
            ফলাফল দেখুন
          </Button>
        </div>
      </form>

      {searched ? (
        <div className="rounded-xl border border-emerald-100 bg-primary-soft p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">মক ফলাফল</p>
              <h3 className="mt-1 text-2xl font-bold text-primary-dark">মুহাম্মদ আবদুল্লাহ</h3>
              <p className="mt-2 text-slate-600">বিভাগ: হিফজ বিভাগ · রোল: ১০২ · শিক্ষাবর্ষ: ২০২৬</p>
            </div>
            <ToastButton message="ফলাফল ডাউনলোড ডেমো হিসেবে রাখা হয়েছে।">
              <Download className="h-4 w-4" />
              ডাউনলোড
            </ToastButton>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-4">
            {[
              ["কুরআন", "৯৪"],
              ["তাজবিদ", "৯১"],
              ["আদব", "৮৮"],
              ["মোট", "২৭৩"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-1 text-2xl font-bold text-primary-dark">{value}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
