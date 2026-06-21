import type { GalleryCategory, GalleryItem } from "@/types";

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
    image:
      "https://images.unsplash.com/photo-1599687266725-269f56dddf7f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gallery-2",
    title: "কুরআন ক্লাস",
    category: "শ্রেণিকক্ষ",
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gallery-3",
    title: "পুরস্কার বিতরণ",
    category: "অনুষ্ঠান",
    image:
      "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gallery-4",
    title: "হিফজ সবক",
    category: "শিক্ষার্থী কার্যক্রম",
    image:
      "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gallery-5",
    title: "আবাসিক পাঠঘর",
    category: "ক্যাম্পাস",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gallery-6",
    title: "একাডেমিক ক্লাস",
    category: "শ্রেণিকক্ষ",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gallery-7",
    title: "অভিভাবক সভা",
    category: "অনুষ্ঠান",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gallery-8",
    title: "কম্পিউটার ল্যাব",
    category: "শিক্ষার্থী কার্যক্রম",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
  }
];
