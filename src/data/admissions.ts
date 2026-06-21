import type { AdmissionRecord, DashboardMessage } from "@/types";

export const admissionSteps = [
  "অনলাইন ফর্ম পূরণ",
  "প্রাথমিক যাচাই",
  "মৌখিক মূল্যায়ন",
  "ভর্তি ফি জমা",
  "ক্লাস শুরু"
];

export const requiredDocuments = [
  "জন্ম নিবন্ধনের কপি",
  "দুই কপি পাসপোর্ট সাইজ ছবি",
  "পূর্ববর্তী প্রতিষ্ঠানের ছাড়পত্র",
  "অভিভাবকের জাতীয় পরিচয়পত্রের কপি",
  "স্বাস্থ্য সম্পর্কিত প্রয়োজনীয় তথ্য"
];

export const feeRows = [
  { department: "নূরানী বিভাগ", admission: "৫,০০০ টাকা", monthly: "২,৫০০ টাকা", residential: "প্রযোজ্য নয়" },
  { department: "নাজেরা বিভাগ", admission: "৬,০০০ টাকা", monthly: "৩,০০০ টাকা", residential: "৫,০০০ টাকা" },
  { department: "হিফজ বিভাগ", admission: "৮,০০০ টাকা", monthly: "৪,০০০ টাকা", residential: "৬,৫০০ টাকা" },
  { department: "কিতাব বিভাগ", admission: "৭,০০০ টাকা", monthly: "৩,৫০০ টাকা", residential: "৬,০০০ টাকা" },
  { department: "একাডেমিক বিভাগ", admission: "৫,৫০০ টাকা", monthly: "৩,২০০ টাকা", residential: "প্রযোজ্য নয়" }
];

export const recentAdmissions: AdmissionRecord[] = [
  { id: "ad-1", studentName: "আব্দুল্লাহ রহমান", department: "হিফজ", date: "২০ জানুয়ারি, ২০২৬", status: "নতুন" },
  { id: "ad-2", studentName: "মাহিম হাসান", department: "নূরানী", date: "১৯ জানুয়ারি, ২০২৬", status: "যাচাই চলছে" },
  { id: "ad-3", studentName: "সাদমান করিম", department: "নাজেরা", date: "১৮ জানুয়ারি, ২০২৬", status: "অনুমোদিত" },
  { id: "ad-4", studentName: "রাফি ইসলাম", department: "একাডেমিক", date: "১৭ জানুয়ারি, ২০২৬", status: "নতুন" }
];

export const dashboardMessages: DashboardMessage[] = [
  { id: "msg-1", sender: "মো. জাহিদ হাসান", subject: "ভর্তি বিষয়ে জানতে চাই", time: "১০ মিনিট আগে" },
  { id: "msg-2", sender: "মোছা. আমিনা", subject: "ফলাফল সংক্রান্ত প্রশ্ন", time: "১ ঘণ্টা আগে" },
  { id: "msg-3", sender: "মো. শাহীন", subject: "আবাসিক আসন আছে কি", time: "গতকাল" }
];

export const chartData = [
  { month: "জানু", আবেদন: 45, ভর্তি: 25 },
  { month: "ফেব", আবেদন: 60, ভর্তি: 32 },
  { month: "মার্চ", আবেদন: 80, ভর্তি: 48 },
  { month: "এপ্রিল", আবেদন: 110, ভর্তি: 75 },
  { month: "মে", আবেদন: 70, ভর্তি: 40 },
  { month: "জুন", আবেদন: 90, ভর্তি: 58 }
];
