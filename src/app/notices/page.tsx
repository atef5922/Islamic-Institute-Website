import type { Metadata } from "next";
import { NoticeDirectory } from "@/components/sections/NoticeDirectory";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "নোটিশ",
  description: "ভর্তি, পরীক্ষা, ফলাফল, সাধারণ ও অভিভাবক সভার সর্বশেষ নোটিশ।"
};

export default function NoticesPage() {
  return (
    <>
      <PageHero title="নোটিশ" subtitle="প্রতিষ্ঠানের সব গুরুত্বপূর্ণ ঘোষণা, সময়সূচি ও আপডেট এক জায়গায়।" />
      <section className="section bg-white">
        <div className="container">
          <NoticeDirectory />
        </div>
      </section>
    </>
  );
}
