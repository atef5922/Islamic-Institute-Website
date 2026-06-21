import type { EventItem } from "@/types";
import academic1 from "@/product/Academic/academic1.png";
import academic3 from "@/product/Academic/academic3.png";
import academic4 from "@/product/Academic/academic4.png";
import heroBanner from "@/product/herobanner1.png";

export const events: EventItem[] = [
  {
    id: "event-1",
    title: "বার্ষিক পুরস্কার বিতরণী",
    date: "২৫ জানুয়ারি, ২০২৬",
    time: "সকাল ১০টা",
    location: "প্রধান মিলনায়তন",
    status: "আসন্ন",
    image: heroBanner,
    description: "বার্ষিক পরীক্ষায় কৃতী শিক্ষার্থীদের সম্মাননা ও সাংস্কৃতিক পরিবেশনা অনুষ্ঠিত হবে।"
  },
  {
    id: "event-2",
    title: "হিফজ সবক প্রতিযোগিতা",
    date: "০৫ ফেব্রুয়ারি, ২০২৬",
    time: "বিকাল ৩টা",
    location: "হিফজ শাখা",
    status: "আসন্ন",
    image: academic1,
    description: "হিফজ শিক্ষার্থীদের সবক, দাওর ও তিলাওয়াত দক্ষতা মূল্যায়ন করা হবে।"
  },
  {
    id: "event-3",
    title: "অভিভাবক মতবিনিময় সভা",
    date: "১২ ডিসেম্বর, ২০২৫",
    time: "সকাল ৯টা",
    location: "প্রধান ক্যাম্পাস",
    status: "সম্পন্ন",
    image: academic4,
    description: "শিক্ষার্থীদের অগ্রগতি, উপস্থিতি ও আচরণ উন্নয়ন নিয়ে অভিভাবকদের সঙ্গে আলোচনা।"
  },
  {
    id: "event-4",
    title: "বিজ্ঞান ও প্রযুক্তি প্রদর্শনী",
    date: "১৮ নভেম্বর, ২০২৫",
    time: "দুপুর ১২টা",
    location: "একাডেমিক ভবন",
    status: "সম্পন্ন",
    image: academic3,
    description: "শিক্ষার্থীদের প্রযুক্তি প্রজেক্ট, চার্ট ও শিক্ষণীয় প্রদর্শনী আয়োজন করা হয়।"
  }
];
