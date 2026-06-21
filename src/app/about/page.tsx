import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { committee, timeline, values } from "@/data/site";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে",
  description: "মাদরাসাতুল হিদায়াহর পরিচিতি, লক্ষ্য, মূল্যবোধ, প্রতিষ্ঠাতা বার্তা ও পরিচালনা কমিটি।"
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="আমাদের সম্পর্কে" subtitle="দ্বীনি ও আধুনিক শিক্ষার সমন্বয়ে আদর্শ মানুষ গড়ার নির্ভরযোগ্য প্রতিষ্ঠান।" />
      <section className="section bg-white">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-gold">প্রতিষ্ঠান পরিচিতি</p>
            <h2 className="mt-2 text-4xl font-bold text-primary-dark">আলোর পথে শিক্ষার যাত্রা</h2>
            <p className="mt-5 leading-8 text-slate-600">
              মাদরাসাতুল হিদায়াহ শিক্ষার্থীদের কুরআন-সুন্নাহর আলোকে জীবন গঠন, আধুনিক জ্ঞান অর্জন এবং নৈতিক
              দায়িত্ববোধ তৈরির জন্য নিবেদিত। এখানে প্রতিটি শিক্ষার্থীর মেধা, আচরণ, স্বাস্থ্য ও আধ্যাত্মিক বিকাশকে
              গুরুত্ব দিয়ে পাঠ পরিকল্পনা করা হয়।
            </p>
            <div id="mission" className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-primary-soft p-5">
                <h3 className="font-bold text-primary-dark">লক্ষ্য</h3>
                <p className="mt-2 leading-7 text-slate-600">দ্বীনদার, জ্ঞানী ও দায়িত্বশীল প্রজন্ম গড়ে তোলা।</p>
              </div>
              <div className="rounded-xl bg-amber-50 p-5">
                <h3 className="font-bold text-primary-dark">উদ্দেশ্য</h3>
                <p className="mt-2 leading-7 text-slate-600">শিক্ষা, চরিত্র ও দক্ষতার ভারসাম্যপূর্ণ বিকাশ নিশ্চিত করা।</p>
              </div>
            </div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1599687266725-269f56dddf7f?auto=format&fit=crop&w=1100&q=85"
            alt="মাদরাসার ক্যাম্পাস"
            width={900}
            height={650}
            className="rounded-xl object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="section islamic-pattern">
        <div className="container grid gap-6 md:grid-cols-2">
          {[
            ["প্রতিষ্ঠাতার বার্তা", "শিক্ষার উদ্দেশ্য শুধু পরীক্ষায় সফলতা নয়; বরং আল্লাহভীতি, আদব ও মানুষের উপকারে নিজেকে নিয়োজিত করার মানসিকতা তৈরি করা।"],
            ["অধ্যক্ষের বার্তা", "আমরা প্রতিটি শিক্ষার্থীকে ব্যক্তিগতভাবে পর্যবেক্ষণ করি এবং অভিভাবকের সঙ্গে নিয়মিত যোগাযোগ রেখে উন্নতির পথ সহজ করি।"]
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
          <SectionHeader title="আমাদের মূল্যবোধ" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value} className="rounded-xl border border-slate-200 bg-white p-5 text-center font-bold text-primary-dark shadow-sm">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <SectionHeader title="প্রতিষ্ঠানের টাইমলাইন" />
          <div className="grid gap-4 md:grid-cols-5">
            {timeline.map((item) => (
              <article key={item.year} className="premium-card rounded-xl p-5">
                <p className="text-3xl font-bold text-primary">{item.year}</p>
                <h3 className="mt-3 font-bold text-primary-dark">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" id="committee">
        <div className="container">
          <SectionHeader title="পরিচালনা কমিটি" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {committee.map(({ name, role, icon: Icon }) => (
              <article key={name} className="premium-card rounded-xl p-6 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary-dark">{name}</h3>
                <p className="mt-1 text-slate-500">{role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
