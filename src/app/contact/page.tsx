import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { BranchSection } from "@/components/home/BranchSection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { MapPreview } from "@/components/shared/MapPreview";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { contactCards } from "@/data/site";

export const metadata: Metadata = {
  title: "যোগাযোগ",
  description: "ফোন, ইমেইল, ঠিকানা, শাখা তথ্য, প্রশ্নোত্তর এবং যোগাযোগ ফর্ম।"
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="যোগাযোগ" subtitle="ভর্তি, বিভাগ, ফলাফল বা যেকোনো তথ্যের জন্য আমাদের সঙ্গে যোগাযোগ করুন।" />
      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map(({ title, value, icon: Icon }) => (
              <div key={title} className="premium-card rounded-xl p-5 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-bold text-primary-dark">{title}</h2>
                <p className="mt-1 text-slate-600">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft md:p-8">
              <ContactForm />
            </div>
            <MapPreview />
          </div>
        </div>
      </section>
      <BranchSection />
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <SectionHeader title="সাধারণ প্রশ্নোত্তর" />
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
