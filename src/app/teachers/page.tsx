import type { Metadata } from "next";
import { TeacherDirectory } from "@/components/sections/TeacherDirectory";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "শিক্ষকবৃন্দ",
  description: "মাদরাসাতুল হিদায়াহর অভিজ্ঞ শিক্ষকবৃন্দ, বিভাগ, বিষয় ও বিস্তারিত পরিচিতি।"
};

export default function TeachersPage() {
  return (
    <>
      <PageHero title="শিক্ষকবৃন্দ" subtitle="দ্বীনি ও একাডেমিক শিক্ষায় অভিজ্ঞ, আন্তরিক ও দায়িত্বশীল শিক্ষক মণ্ডলী।" />
      <section className="section bg-white">
        <div className="container">
          <TeacherDirectory />
        </div>
      </section>
    </>
  );
}
