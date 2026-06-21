import type { StaticImageData } from "next/image";
import academic1 from "@/product/Academic/academic1.png";
import academic2 from "@/product/Academic/academic2.png";
import academic3 from "@/product/Academic/academic3.png";
import academic4 from "@/product/Academic/academic4.png";
import herobanner1 from "@/product/herobanner1.png";

export interface HeroGalleryItem {
  id: number;
  title: string;
  image: StaticImageData;
  alt: string;
  objectPosition?: string;
}

export interface HeroUpdateItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  href: string;
  isLatest?: boolean;
}

export const heroGallery: HeroGalleryItem[] = [
  {
    id: 1,
    title: "মাদরাসার মূল ক্যাম্পাস",
    image: academic2,
    alt: "সবুজ গম্বুজসহ মাদরাসার মূল ক্যাম্পাস ভবন",
    objectPosition: "center 52%"
  },
  {
    id: 2,
    title: "প্রবেশদ্বার ও প্রাঙ্গণ",
    image: academic3,
    alt: "মাদরাসার প্রধান ফটক ও সুশৃঙ্খল প্রাঙ্গণ",
    objectPosition: "center 42%"
  },
  {
    id: 3,
    title: "একাডেমিক ভবনের পরিবেশ",
    image: academic4,
    alt: "মাদরাসার একাডেমিক ভবনের সামনে পরিচ্ছন্ন বাগান ও প্রাঙ্গণ",
    objectPosition: "center 50%"
  },
  {
    id: 4,
    title: "শ্রেণিকক্ষ ও কুরআন শিক্ষা",
    image: academic1,
    alt: "শ্রেণিকক্ষ, কুরআন পাঠ এবং পাঠাগারের সমন্বিত দৃশ্য",
    objectPosition: "center 38%"
  },
  {
    id: 5,
    title: "শিক্ষার্থী সম্মাননা অনুষ্ঠান",
    image: herobanner1,
    alt: "মাদরাসার শিক্ষার্থী ও শিক্ষকদের অংশগ্রহণে সম্মাননা অনুষ্ঠান",
    objectPosition: "center 34%"
  }
];

export const heroUpdates: HeroUpdateItem[] = [
  {
    id: 1,
    title: "শিক্ষার্থী পরিচয়ের সিসি ক্যামেরা স্থাপন সংক্রান্ত বিজ্ঞপ্তি",
    date: "১০ জুলাই, ২০২৬",
    excerpt: "প্রধান ফটক, করিডর ও শ্রেণিকক্ষে নতুন নিরাপত্তা তদারকি ব্যবস্থা ধাপে ধাপে চালু করা হবে।",
    href: "/notices",
    isLatest: true
  },
  {
    id: 2,
    title: "পবিত্র রমজান ও ঈদুল ফিতর ২০২৬ উপলক্ষে ছুটির বিজ্ঞপ্তি",
    date: "০৫ মার্চ, ২০২৬",
    excerpt: "ছুটি, ক্লাস পুনরারম্ভ এবং আবাসিক শিক্ষার্থীদের প্রত্যাবর্তনের সময়সূচি প্রকাশ করা হয়েছে।",
    href: "/notices"
  },
  {
    id: 3,
    title: "ভর্তি আবেদনের সময়সীমা বৃদ্ধি প্রসঙ্গে নোটিশ",
    date: "২২ জানুয়ারি, ২০২৬",
    excerpt: "নূরানী, নাজেরা, হিফজ ও একাডেমিক বিভাগের ভর্তি আবেদন নির্ধারিত সময়ের অতিরিক্ত আরও এক সপ্তাহ চলবে।",
    href: "/notices"
  },
  {
    id: 4,
    title: "বার্ষিক পরীক্ষার ফলাফল প্রকাশ",
    date: "১৫ ডিসেম্বর, ২০২৫",
    excerpt: "ফলাফল অনলাইন নোটিশ বোর্ড ও অফিস কাউন্টারে প্রকাশ করা হয়েছে, অভিভাবকদের জন্য সংগ্রহের ব্যবস্থাও রাখা হয়েছে।",
    href: "/notices"
  },
  {
    id: 5,
    title: "অভিভাবক সভার সময়সূচি প্রকাশ",
    date: "০৮ ডিসেম্বর, ২০২৫",
    excerpt: "প্রতিটি শ্রেণির জন্য আলাদা সময়সূচি নির্ধারণ করা হয়েছে, উপস্থিতি নিশ্চিত করতে অভিভাবকদের অনুরোধ করা হচ্ছে।",
    href: "/notices"
  }
];
