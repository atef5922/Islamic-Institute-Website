import type { GalleryCategory, GalleryItem } from "@/types";
import academic1 from "@/product/Academic/academic1.png";
import academic2 from "@/product/Academic/academic2.png";
import academic3 from "@/product/Academic/academic3.png";
import academic4 from "@/product/Academic/academic4.png";
import heroBanner from "@/product/herobanner1.png";

export const galleryCategories: Array<"সব ছবি" | GalleryCategory> = [
  "সব ছবি",
  "ক্যাম্পাস",
  "শ্রেণিকক্ষ",
  "অনুষ্ঠান",
  "শিক্ষার্থী কার্যক্রম"
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "প্রধান ক্যাম্পাস",
    category: "ক্যাম্পাস",
    image: academic2
  },
  {
    id: "gallery-2",
    title: "কুরআন ক্লাস",
    category: "শ্রেণিকক্ষ",
    image: academic1
  },
  {
    id: "gallery-3",
    title: "পুরস্কার বিতরণ",
    category: "অনুষ্ঠান",
    image: heroBanner
  },
  {
    id: "gallery-4",
    title: "হিফজ সবক",
    category: "শিক্ষার্থী কার্যক্রম",
    image: academic3
  },
  {
    id: "gallery-5",
    title: "আবাসিক পাঠঘর",
    category: "ক্যাম্পাস",
    image: academic4
  },
  {
    id: "gallery-6",
    title: "একাডেমিক ক্লাস",
    category: "শ্রেণিকক্ষ",
    image: academic1
  },
  {
    id: "gallery-7",
    title: "অভিভাবক সভা",
    category: "অনুষ্ঠান",
    image: heroBanner
  },
  {
    id: "gallery-8",
    title: "কম্পিউটার ল্যাব",
    category: "শিক্ষার্থী কার্যক্রম",
    image: academic3
  }
];
