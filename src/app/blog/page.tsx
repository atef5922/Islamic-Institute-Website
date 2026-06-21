import type { Metadata } from "next";
import { BlogDirectory } from "@/components/sections/BlogDirectory";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "ব্লগ",
  description: "কুরআন শিক্ষা, হিফজ রুটিন, নৈতিক শিক্ষা ও অভিভাবক নির্দেশনা বিষয়ক প্রবন্ধ।"
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="ব্লগ / প্রবন্ধ" subtitle="দ্বীনি শিক্ষা, চরিত্র গঠন ও অভিভাবক নির্দেশনা নিয়ে নিয়মিত লেখা।" />
      <section className="section bg-white">
        <div className="container">
          <BlogDirectory />
        </div>
      </section>
    </>
  );
}
