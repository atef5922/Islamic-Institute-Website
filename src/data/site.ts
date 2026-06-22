import {
  Award,
  BookOpen,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  HeartHandshake,
  Home,
  Laptop,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Users,
  Wifi
} from "lucide-react";
import type { HeroSlide, IconContent, NavItem } from "@/types";
import academic1 from "@/product/Academic/academic1.png";
import academic2 from "@/product/Academic/academic2.png";
import committeeChairmanImage from "@/product/Teacher Panel/t1.png";
import committeeSecretaryImage from "@/product/Teacher Panel/t2.png";
import committeeMemberImage from "@/product/Teacher Panel/t3.png";
import committeeTreasurerImage from "@/product/Teacher Panel/t4.png";
import heroBanner from "@/product/herobanner1.png";

export const siteInfo = {
  name: "মাদরাসাতুল হিদায়াহ",
  tagline: "কুরআন-সুন্নাহ ভিত্তিক আধুনিক ও আদর্শ শিক্ষার নির্ভরযোগ্য প্রতিষ্ঠান",
  phone: "০১৩২১-৪৫০৬৬৯",
  email: "info@hidayah.edu.bd",
  address: "মিরপুর, ঢাকা",
  copyright: "© ২০২৬ মাদরাসাতুল হিদায়াহ। সর্বস্বত্ব সংরক্ষিত।"
};

export const navItems: NavItem[] = [
  { label: "হোম", href: "/" },
  {
    label: "প্রতিষ্ঠান",
    href: "/about",
    children: [
      { label: "আমাদের সম্পর্কে", href: "/about" },
      { label: "লক্ষ্য ও উদ্দেশ্য", href: "/about#mission" },
      { label: "পরিচালনা কমিটি", href: "/about#committee" }
    ]
  },
  {
    label: "বিভাগসমূহ",
    href: "/departments",
    children: [
      { label: "নূরানী বিভাগ", href: "/departments#nurani" },
      { label: "নাজেরা বিভাগ", href: "/departments#nazera" },
      { label: "হিফজ বিভাগ", href: "/departments#hifz" },
      { label: "কিতাব বিভাগ", href: "/departments#kitab" },
      { label: "একাডেমিক বিভাগ", href: "/departments#academic" }
    ]
  },
  { label: "ভর্তি", href: "/admission" },
  { label: "শিক্ষকবৃন্দ", href: "/teachers" },
  { label: "নোটিশ", href: "/notices" },
  { label: "গ্যালারি", href: "/gallery" },
  { label: "ব্লগ", href: "/blog" },
  { label: "যোগাযোগ", href: "/contact" }
];

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "কুরআন-সুন্নাহর আলোকে",
    title: "আদর্শ শিক্ষা গড়ি সুন্দর ভবিষ্যৎ",
    subtitle:
      "অভিজ্ঞ শিক্ষক, শৃঙ্খলাবদ্ধ পরিবেশ ও আধুনিক পাঠদান পদ্ধতির সমন্বয়ে গড়ে উঠছে আগামী প্রজন্ম।",
    primaryCta: "ভর্তি আবেদন করুন",
    primaryHref: "/admission",
    secondaryCta: "বিভাগসমূহ দেখুন",
    secondaryHref: "/departments",
    image: academic1
  },
  {
    eyebrow: "সমন্বিত শিক্ষা",
    title: "হিফজ, নাজেরা ও একাডেমিক শিক্ষার সমন্বয়",
    subtitle:
      "দ্বীনি শিক্ষার পাশাপাশি বাংলা, ইংরেজি, গণিত ও প্রযুক্তি শিক্ষায় সমান গুরুত্ব দেওয়া হয়।",
    primaryCta: "বিভাগ দেখুন",
    primaryHref: "/departments",
    secondaryCta: "ফলাফল দেখুন",
    secondaryHref: "/students",
    image: heroBanner
  },
  {
    eyebrow: "নিরাপদ আবাসিক ব্যবস্থা",
    title: "নিয়মিত তত্ত্বাবধানে শিক্ষার্থীর বিকাশ",
    subtitle:
      "শিক্ষার্থীদের চরিত্র গঠন, পড়াশোনা, শৃঙ্খলা ও অভিভাবক যোগাযোগে বিশেষ নজর দেওয়া হয়।",
    primaryCta: "সুবিধাসমূহ দেখুন",
    primaryHref: "/about#facilities",
    secondaryCta: "যোগাযোগ করুন",
    secondaryHref: "/contact",
    image: academic2
  }
];

export const aboutHighlights = [
  { label: "অভিজ্ঞ শিক্ষক", icon: Users },
  { label: "নিরাপদ পরিবেশ", icon: ShieldCheck },
  { label: "নিয়মিত মূল্যায়ন", icon: FileText },
  { label: "অভিভাবক যোগাযোগ", icon: Phone }
];

export const whyChooseUs: IconContent[] = [
  {
    title: "অভিজ্ঞ শিক্ষক মণ্ডলী",
    description: "দীর্ঘ অভিজ্ঞতা ও প্রশিক্ষণপ্রাপ্ত শিক্ষকদের নিবিড় তত্ত্বাবধান।",
    icon: GraduationCap,
    accent: "text-primary"
  },
  {
    title: "হিফজ ও নাজেরা বিভাগ",
    description: "শুদ্ধ তিলাওয়াত, মাখরাজ ও নিয়মিত সবক পর্যবেক্ষণ।",
    icon: BookOpen,
    accent: "text-orange-500"
  },
  {
    title: "আধুনিক পাঠদান ব্যবস্থা",
    description: "পরিকল্পিত সিলেবাস, ক্লাস রুটিন ও ধারাবাহিক মূল্যায়ন।",
    icon: Laptop,
    accent: "text-blue-600"
  },
  {
    title: "নিরাপদ শিক্ষার পরিবেশ",
    description: "সিসিটিভি, পরিচ্ছন্ন ক্যাম্পাস ও দায়িত্বশীল তত্ত্বাবধান।",
    icon: ShieldCheck,
    accent: "text-sky-600"
  },
  {
    title: "আবাসিক সুব্যবস্থা",
    description: "পরিচ্ছন্ন আবাসন, পুষ্টিকর খাবার ও নিয়মিত স্বাস্থ্য নজরদারি।",
    icon: Home,
    accent: "text-purple-600"
  },
  {
    title: "নৈতিক শিক্ষা",
    description: "আদব-আখলাক, শিষ্টাচার ও সামাজিক দায়িত্ববোধের চর্চা।",
    icon: HeartHandshake,
    accent: "text-emerald-600"
  },
  {
    title: "নিয়মিত পরীক্ষা ও মূল্যায়ন",
    description: "সাপ্তাহিক, মাসিক ও টার্ম ভিত্তিক অগ্রগতি প্রতিবেদন।",
    icon: CalendarCheck,
    accent: "text-red-500"
  },
  {
    title: "অভিভাবক যোগাযোগ ব্যবস্থা",
    description: "মাসিক সভা, ফোন আপডেট ও অনলাইন বার্তা ব্যবস্থাপনা।",
    icon: MessageCircle,
    accent: "text-indigo-600"
  },
  {
    title: "প্রযুক্তি-সহায়ক শিক্ষা",
    description: "ডিজিটাল কনটেন্ট, কম্পিউটার শিক্ষা ও মাল্টিমিডিয়া ক্লাস।",
    icon: Wifi,
    accent: "text-teal-600"
  }
];

export const facilities: IconContent[] = [
  {
    title: "নিরাপদ পরিবেশ ব্যবস্থা",
    description: "পরিচ্ছন্ন ক্যাম্পাস, সিসিটিভি ও দায়িত্বশীল তত্ত্বাবধানে নিরাপদ শিক্ষা পরিবেশ।",
    icon: ShieldCheck
  },
  {
    title: "আবাসিক সুব্যবস্থা",
    description: "নিয়মিত খাবার, বিশ্রাম, পড়ার সময় ও পরিচ্ছন্ন আবাসনের সুপরিকল্পিত ব্যবস্থা।",
    icon: Building2
  },
  {
    title: "কুরআন-হাদিস শিক্ষা",
    description: "শুদ্ধ তিলাওয়াত, হাদিস, আকাইদ ও আদব-আখলাকের জীবনঘনিষ্ঠ শিক্ষা।",
    icon: BookOpen
  },
  {
    title: "একাডেমিক পর্যবেক্ষণ",
    description: "শিক্ষার্থীর উপস্থিতি, ফলাফল ও অগ্রগতি নিয়ে নিয়মিত রিপোর্ট প্রদান।",
    icon: Award
  }
];

export const values = [
  "তাকওয়া ও আমানতদারি",
  "শৃঙ্খলা ও সময়ানুবর্তিতা",
  "জ্ঞানচর্চা ও গবেষণা",
  "অভিভাবক-শিক্ষক সমন্বয়",
  "সেবা ও মানবিকতা",
  "প্রযুক্তি-সচেতনতা"
];

export const timeline = [
  { year: "২০১১", title: "প্রতিষ্ঠার সূচনা", description: "মিরপুরে সীমিত পরিসরে নূরানী ও নাজেরা বিভাগ চালু হয়।" },
  { year: "২০১৪", title: "হিফজ বিভাগ", description: "আলাদা হিফজ ভবন ও আবাসিক ব্যবস্থার সম্প্রসারণ করা হয়।" },
  { year: "২০১৮", title: "একাডেমিক শাখা", description: "দ্বীনি শিক্ষার সঙ্গে সাধারণ শিক্ষা সংযুক্ত করা হয়।" },
  { year: "২০২২", title: "ডিজিটাল সেবা", description: "অনলাইন ভর্তি, নোটিশ ও ফলাফল ব্যবস্থাপনা চালু হয়।" },
  { year: "২০২৬", title: "নতুন ক্যাম্পাস পরিকল্পনা", description: "আধুনিক লাইব্রেরি, ল্যাব ও অডিটোরিয়ামসহ সম্প্রসারণ প্রকল্প।" }
];

export const committee = [
  {
    name: "মাওলানা আবদুল করীম",
    role: "সভাপতি",
    icon: Star,
    image: committeeChairmanImage
  },
  {
    name: "ড. মাহবুবুর রহমান",
    role: "শিক্ষা উপদেষ্টা",
    icon: GraduationCap,
    image: committeeSecretaryImage
  },
  {
    name: "মুফতি সাইফুল ইসলাম",
    role: "সদস্য সচিব",
    icon: FileText,
    image: committeeMemberImage
  },
  {
    name: "হাফেজ নোমান হাসান",
    role: "অর্থ সম্পাদক",
    icon: CheckCircle2,
    image: committeeTreasurerImage
  }
];

export const contactCards = [
  { title: "ফোন করুন", value: siteInfo.phone, icon: Phone },
  { title: "ইমেইল করুন", value: siteInfo.email, icon: Mail },
  { title: "ঠিকানা", value: siteInfo.address, icon: MapPin },
  { title: "সময়", value: "সকাল ৮টা - রাত ৮টা", icon: Clock3 }
];

export const faqs = [
  {
    question: "ভর্তি আবেদন কীভাবে করা যাবে?",
    answer: "ভর্তি পেজের অনলাইন ফর্ম পূরণ করলে অফিস থেকে অভিভাবকের সঙ্গে যোগাযোগ করা হবে।"
  },
  {
    question: "আবাসিক সুবিধা আছে কি?",
    answer: "হ্যাঁ, হিফজ ও কিতাব বিভাগের শিক্ষার্থীদের জন্য পরিচ্ছন্ন আবাসিক ব্যবস্থা রয়েছে।"
  },
  {
    question: "ফলাফল অনলাইনে দেখা যায় কি?",
    answer: "রোল নম্বর, বিভাগ ও শিক্ষাবর্ষ দিয়ে শিক্ষার্থী পেজ থেকে মক ফলাফল দেখা যাবে।"
  },
  {
    question: "অভিভাবক সভা কতদিন পর হয়?",
    answer: "প্রতি মাসে অগ্রগতি প্রতিবেদনসহ অভিভাবক সভা আয়োজন করা হয়।"
  }
];
