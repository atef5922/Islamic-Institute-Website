import type { Metadata } from "next";
import { DepartmentsDirectory } from "@/components/sections/DepartmentsDirectory";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "বিভাগসমূহ",
  description: "নূরানী, নাজেরা, হিফজ, কিতাব, একাডেমিক ও কম্পিউটার শিক্ষা বিভাগের বিস্তারিত তথ্য।"
};

export default function DepartmentsPage() {
  return (
    <>
      <PageHero title="বিভাগসমূহ" subtitle="শিক্ষার্থীর বয়স, মেধা ও লক্ষ্য অনুযায়ী পরিকল্পিত বিভাগসমূহ।" />
      <section className="section bg-white">
        <div className="container">
          <DepartmentsDirectory />
        </div>
      </section>
      <section className="section islamic-pattern">
        <div className="container grid gap-6 lg:grid-cols-3">
          {[
            ["কারিকুলাম ও পাঠ পরিকল্পনা", "প্রতিটি বিভাগের জন্য বার্ষিক সিলেবাস, দৈনিক সবক পরিকল্পনা, ক্লাস টেস্ট ও অভিভাবক রিপোর্ট রয়েছে।"],
            ["রুটিন প্রিভিউ", "ফজরের পর হিফজ সবক, সকালে একাডেমিক ক্লাস, বিকেলে দাওর ও সন্ধ্যায় পুনরাবৃত্তি পরিচালিত হয়।"],
            ["ভর্তি যোগ্যতা", "বিভাগভেদে বয়স, পূর্ববর্তী পাঠ, তিলাওয়াত দক্ষতা ও মৌখিক মূল্যায়নের ভিত্তিতে ভর্তি নেওয়া হয়।"]
          ].map(([title, text]) => (
            <article key={title} className="premium-card rounded-xl p-6">
              <h2 className="text-2xl font-bold text-primary-dark">{title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <SectionHeader title="নমুনা ক্লাস রুটিন" />
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-soft">
            <table className="w-full min-w-[720px] text-right">
              <thead className="bg-primary-soft text-primary-dark">
                <tr>
                  {["সময়", "নূরানী", "হিফজ", "একাডেমিক", "কিতাব"].map((head) => (
                    <th key={head} className="p-4 font-bold">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {[
                  ["ফজর", "দোয়া", "নতুন সবক", "পুনরাবৃত্তি", "মুতালাআ"],
                  ["সকাল", "কায়দা", "দাওর", "বাংলা-গণিত", "নাহু-সরফ"],
                  ["দুপুর", "বিশ্রাম", "বিশ্রাম", "খাবার", "খাবার"],
                  ["বিকাল", "আদব", "পুরোনো সবক", "ইংরেজি", "ফিকহ"]
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, cellIndex) => (
                      <td key={`${row[0]}-${cellIndex}`} className="p-4">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
