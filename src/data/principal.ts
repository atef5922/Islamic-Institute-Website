import type { StaticImageData } from "next/image";
import principalImage from "@/product/principle.png";

export interface PrincipalProfile {
  label: string;
  title: string;
  name: string;
  designation: string;
  institute: string;
  message: string;
  image: StaticImageData;
}

export const principalProfile: PrincipalProfile = {
  label: "প্রতিষ্ঠানের বার্তা",
  title: "অধ্যক্ষের বাণী",
  name: "মাওলানা মোঃ আব্দুল কাইয়ুম",
  designation: "অধ্যক্ষ",
  institute: "মাদরাসাতুল হিদায়াহ",
  message:
    "শিক্ষাই জাতির মেরুদণ্ড, আর নৈতিকতা হচ্ছে সেই মেরুদণ্ডের শক্তি। আমরা এমন এক প্রজন্ম গড়ে তুলতে প্রতিশ্রুতিবদ্ধ, যারা দ্বীনি ও দুনিয়ার জ্ঞান অর্জনের মাধ্যমে নিজেকে, পরিবারকে এবং সমাজকে আলোকিত করবে। মাদরাসাতুল হিদায়াহ সেই মহৎ লক্ষ্যেই নিরলসভাবে কাজ করে যাচ্ছে।",
  image: principalImage
};
