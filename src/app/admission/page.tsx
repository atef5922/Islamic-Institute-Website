import type { Metadata } from "next";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { admissionSteps, feeRows, requiredDocuments } from "@/data/admissions";
import { toBanglaNumber } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ভর্তি",
  description: "মাদরাসাতুল হিদায়াহ ভর্তি কার্যক্রম ২০২৬, প্রয়োজনীয় কাগজপত্র, ফি ও অনলাইন আবেদন ফর্ম।"
};

export default function AdmissionPage() {
  return (
    <>
      <PageHero title="ভর্তি" subtitle="২০২৬ শিক্ষাবর্ষে নূরানী, নাজেরা, হিফজ, কিতাব ও একাডেমিক বিভাগে ভর্তি চলছে।" />
      <section className="section bg-white">
        <div className="container">
          <SectionHeader title="ভর্তি কার্যক্রম ২০২৬" description="অনলাইন আবেদন জমা দিলে অফিস থেকে যাচাই ও সাক্ষাৎকারের সময় জানানো হবে।" />
          <div className="grid gap-4 md:grid-cols-5">
            {admissionSteps.map((step, index) => (
              <div key={step} className="premium-card rounded-xl p-5 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">{toBanglaNumber(index + 1)}</span>
                <p className="mt-4 font-bold text-primary-dark">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section islamic-pattern">
        <div className="container grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="premium-card rounded-xl p-6">
            <h2 className="text-2xl font-bold text-primary-dark">প্রয়োজনীয় কাগজপত্র</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              {requiredDocuments.map((document) => <li key={document}>✓ {document}</li>)}
            </ul>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-soft" id="fees">
            <table className="w-full min-w-[680px] text-right">
              <thead className="bg-primary-soft text-primary-dark">
                <tr>
                  {["বিভাগ", "ভর্তি ফি", "মাসিক বেতন", "আবাসিক"].map((head) => <th key={head} className="p-4">{head}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {feeRows.map((row) => (
                  <tr key={row.department} className="text-slate-600">
                    <td className="p-4 font-semibold text-slate-800">{row.department}</td>
                    <td className="p-4">{row.admission}</td>
                    <td className="p-4">{row.monthly}</td>
                    <td className="p-4">{row.residential}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <SectionHeader title="অনলাইন ভর্তি আবেদন" />
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft md:p-8">
            <AdmissionForm />
          </div>
        </div>
      </section>
    </>
  );
}
