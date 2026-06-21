import type { LucideIcon } from "lucide-react";

export type DepartmentCategory = "সব বিভাগ" | "দ্বীনি শিক্ষা" | "হিফজ বিভাগ" | "একাডেমিক বিভাগ" | "প্রযুক্তি বিভাগ";

export type NoticeCategory = "ভর্তি" | "পরীক্ষা" | "ফলাফল" | "সাধারণ" | "অভিভাবক সভা";

export type GalleryCategory = "ক্যাম্পাস" | "শ্রেণিকক্ষ" | "অনুষ্ঠান" | "শিক্ষার্থী কার্যক্রম";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
}

export interface HeroSlide {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
  image: string;
}

export interface IconContent {
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: string;
}

export interface Notice {
  id: string;
  title: string;
  category: NoticeCategory;
  date: string;
  description: string;
  fileLabel: string;
}

export interface Department {
  id: string;
  title: string;
  category: DepartmentCategory;
  description: string;
  level: string;
  duration: string;
  seats: string;
  image: string;
  features: string[];
}

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  subject: string;
  experience: string;
  department: string;
  image: string;
  phone: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  relation: string;
  text: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string[];
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  status: "আসন্ন" | "সম্পন্ন";
  image: string;
  description: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface AdmissionRecord {
  id: string;
  studentName: string;
  department: string;
  date: string;
  status: string;
}

export interface DashboardMessage {
  id: string;
  sender: string;
  subject: string;
  time: string;
}
