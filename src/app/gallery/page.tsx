import type { Metadata } from "next";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "গ্যালারি",
  description: "ক্যাম্পাস, শ্রেণিকক্ষ, অনুষ্ঠান ও শিক্ষার্থী কার্যক্রমের ছবির গ্যালারি।"
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="গ্যালারি" subtitle="মাদরাসার পরিবেশ, ক্লাস, অনুষ্ঠান ও শিক্ষার্থীদের কার্যক্রমের নির্বাচিত ছবি।" />
      <section className="section bg-white">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
