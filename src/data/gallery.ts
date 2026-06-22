import type { GalleryCategory, GalleryItem } from "@/types";
import parentMeetingImage from "@/product/Campus Gallery/অভিভাবক সভা.png";
import awardImage from "@/product/Campus Gallery/পুরস্কার বিতরণ.png";
import mainCampusImage from "@/product/Campus Gallery/প্রধান ক্যাম্পাস.png";
import residentialStudyImage from "@/product/Campus Gallery/আবাসিক পাঠঘর.png";
import academicClassImage from "@/product/Campus Gallery/একাডেমিক ক্লাস.png";
import computerLabImage from "@/product/Campus Gallery/কম্পিউটার ল্যাব.png";
import quranClassImage from "@/product/Campus Gallery/কুরআন ক্লাস.png";
import hifzSabakImage from "@/product/Campus Gallery/হিফজ সবক.png";

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
    image: mainCampusImage
  },
  {
    id: "gallery-2",
    title: "কুরআন ক্লাস",
    category: "শ্রেণিকক্ষ",
    image: quranClassImage
  },
  {
    id: "gallery-3",
    title: "পুরস্কার বিতরণ",
    category: "অনুষ্ঠান",
    image: awardImage
  },
  {
    id: "gallery-4",
    title: "হিফজ সবক",
    category: "শিক্ষার্থী কার্যক্রম",
    image: hifzSabakImage
  },
  {
    id: "gallery-5",
    title: "আবাসিক পাঠঘর",
    category: "ক্যাম্পাস",
    image: residentialStudyImage
  },
  {
    id: "gallery-6",
    title: "একাডেমিক ক্লাস",
    category: "শ্রেণিকক্ষ",
    image: academicClassImage
  },
  {
    id: "gallery-7",
    title: "অভিভাবক সভা",
    category: "অনুষ্ঠান",
    image: parentMeetingImage
  },
  {
    id: "gallery-8",
    title: "কম্পিউটার ল্যাব",
    category: "শিক্ষার্থী কার্যক্রম",
    image: computerLabImage
  }
];
