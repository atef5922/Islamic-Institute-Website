import type { Department, DepartmentCategory } from "@/types";

export const departmentFilters: DepartmentCategory[] = [
  "সব বিভাগ",
  "দ্বীনি শিক্ষা",
  "হিফজ বিভাগ",
  "একাডেমিক বিভাগ",
  "প্রযুক্তি বিভাগ"
];

export const departments: Department[] = [
  {
    id: "nurani",
    title: "নূরানী বিভাগ",
    category: "দ্বীনি শিক্ষা",
    description: "শিশুদের জন্য আরবি হরফ, কায়দা, আমপারা ও প্রাথমিক আদব-আখলাক শিক্ষা।",
    level: "প্রাক-প্রাথমিক",
    duration: "১ বছর",
    seats: "৪০ আসন",
    image:
      "https://images.unsplash.com/photo-1599687266725-269f56dddf7f?auto=format&fit=crop&w=900&q=80",
    features: ["শুদ্ধ উচ্চারণ", "প্রতিদিন সবক", "আচরণ গঠন"]
  },
  {
    id: "nazera",
    title: "নাজেরা বিভাগ",
    category: "দ্বীনি শিক্ষা",
    description: "মাখরাজ, তাজবিদ ও নিয়মিত তিলাওয়াতের মাধ্যমে কুরআন পাঠে দক্ষতা তৈরি।",
    level: "প্রাথমিক থেকে মাধ্যমিক",
    duration: "১-২ বছর",
    seats: "৫০ আসন",
    image:
      "https://images.unsplash.com/photo-1587617425953-9075d28b8c46?auto=format&fit=crop&w=900&q=80",
    features: ["তাজবিদ চর্চা", "শ্রবণ মূল্যায়ন", "দৈনিক রিভিশন"]
  },
  {
    id: "hifz",
    title: "হিফজ বিভাগ",
    category: "হিফজ বিভাগ",
    description: "অভিজ্ঞ হাফেজ শিক্ষকের তত্ত্বাবধানে পরিকল্পিত হিফজ ও দাওর পদ্ধতি।",
    level: "নাজেরা উত্তীর্ণ",
    duration: "৩-৪ বছর",
    seats: "৩০ আসন",
    image:
      "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=900&q=80",
    features: ["ব্যক্তিগত সবক", "সাপ্তাহিক দাওর", "মাসিক মূল্যায়ন"]
  },
  {
    id: "kitab",
    title: "কিতাব বিভাগ",
    category: "দ্বীনি শিক্ষা",
    description: "আরবি ব্যাকরণ, ফিকহ, হাদিস, আকাইদ ও ইসলামী সাহিত্য পাঠের সুবিন্যস্ত কোর্স।",
    level: "মুতাওয়াসসিতাহ",
    duration: "৪ বছর",
    seats: "৩৫ আসন",
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=900&q=80",
    features: ["দরস পদ্ধতি", "কিতাব পাঠ", "বক্তৃতা অনুশীলন"]
  },
  {
    id: "academic",
    title: "বাংলা-ইংরেজি-গণিত",
    category: "একাডেমিক বিভাগ",
    description: "জাতীয় শিক্ষার গুরুত্বপূর্ণ বিষয়সমূহে ভিত্তিমূলক দক্ষতা ও নিয়মিত মূল্যায়ন।",
    level: "প্রথম থেকে অষ্টম",
    duration: "বার্ষিক কোর্স",
    seats: "৬০ আসন",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    features: ["ওয়ার্কশিট", "ক্লাস টেস্ট", "অভিভাবক রিপোর্ট"]
  },
  {
    id: "computer",
    title: "কম্পিউটার শিক্ষা",
    category: "প্রযুক্তি বিভাগ",
    description: "ডিজিটাল সাক্ষরতা, টাইপিং, প্রেজেন্টেশন ও নিরাপদ প্রযুক্তি ব্যবহারের পাঠ।",
    level: "তৃতীয় থেকে অষ্টম",
    duration: "৬ মাস",
    seats: "২৫ আসন",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    features: ["ল্যাব ক্লাস", "প্রজেক্ট কাজ", "নিরাপদ ইন্টারনেট"]
  }
];
