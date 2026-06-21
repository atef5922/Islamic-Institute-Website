import type { Metadata } from "next";
import { ResultSearchForm } from "@/components/forms/ResultSearchForm";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "শিক্ষার্থী ও ফলাফল",
  description: "শিক্ষার্থীর রোল নম্বর, বিভাগ ও শিক্ষাবর্ষ দিয়ে মক ফলাফল অনুসন্ধান।"
};

export default function StudentsPage() {
  return (
    <>
      <PageHero title="শিক্ষার্থী / ফলাফল" subtitle="রোল নম্বর দিয়ে ফলাফল খুঁজুন এবং মেধাতালিকা দেখুন।" />
      <section className="section bg-white">
        <div className="container">
          <ResultSearchForm />
        </div>
      </section>
      <section className="section islamic-pattern">
        <div className="container">
          <SectionHeader title="মেধা তালিকা" />
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-soft">
            <table className="w-full min-w-[640px] text-right">
              <thead className="bg-primary-soft text-primary-dark">
                <tr>{["মেধা", "নাম", "বিভাগ", "নম্বর"].map((head) => <th key={head} className="p-4">{head}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {[
                  ["১ম", "মুহাম্মদ আবদুল্লাহ", "হিফজ", "২৭৩"],
                  ["২য়", "সাদমান করিম", "নাজেরা", "২৬৮"],
                  ["৩য়", "মাহিম হাসান", "নূরানী", "২৬১"],
                  ["৪র্থ", "রাফি ইসলাম", "একাডেমিক", "২৫৬"]
                ].map((row) => (
                  <tr key={row[0]}>{row.map((cell) => <td key={cell} className="p-4">{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
