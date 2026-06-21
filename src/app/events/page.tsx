import type { Metadata } from "next";
import { EventsDirectory } from "@/components/sections/EventsDirectory";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "ইভেন্ট",
  description: "মাদরাসাতুল হিদায়াহর আসন্ন ও সম্পন্ন অনুষ্ঠান, প্রতিযোগিতা ও সভার তথ্য।"
};

export default function EventsPage() {
  return (
    <>
      <PageHero title="ইভেন্ট" subtitle="শিক্ষা, সংস্কৃতি, পুরস্কার বিতরণী ও অভিভাবক সভার আয়োজন।" />
      <section className="section bg-white">
        <div className="container">
          <EventsDirectory />
        </div>
      </section>
    </>
  );
}
