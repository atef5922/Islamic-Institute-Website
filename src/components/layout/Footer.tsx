"use client";

import { Facebook, Mail, MapPin, Phone, Send, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { MapPreview } from "@/components/shared/MapPreview";
import { branches } from "@/data/branches";
import { navItems, siteInfo } from "@/data/site";

export function Footer() {
  const [email, setEmail] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes("@")) {
      toast.error("সঠিক ইমেইল লিখুন");
      return;
    }
    toast.success("নিউজলেটার সাবস্ক্রিপশন সম্পন্ন হয়েছে।");
    setEmail("");
  };

  return (
    <footer className="bg-ink text-white">
      <div className="border-b border-white/10 bg-primary-dark/60 py-10">
        <div className="container grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold">{siteInfo.name}</h2>
            <p className="mt-3 max-w-2xl leading-8 text-slate-300">{siteInfo.tagline}</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row lg:justify-end" onSubmit={submit}>
            <label className="sr-only" htmlFor="footer-email">
              ইমেইল
            </label>
            <input
              id="footer-email"
              className="focus-ring min-h-12 rounded-lg border border-white/10 bg-white/10 px-4 text-white placeholder:text-slate-300 sm:min-w-72"
              placeholder="আপনার ইমেইল"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gold px-5 font-semibold text-ink transition hover:bg-amber-400">
              <Send className="h-4 w-4" />
              সাবস্ক্রাইব
            </button>
          </form>
        </div>
      </div>
      <div className="container grid gap-6 py-9 md:grid-cols-2 xl:grid-cols-[1.2fr_0.9fr_0.9fr_1fr_1.1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary-dark">
              <span className="text-lg font-bold">হি</span>
            </span>
            <span className="text-lg font-bold">{siteInfo.name}</span>
          </div>
          <p className="mt-3 leading-7 text-slate-300">
            কুরআন-সুন্নাহর আলোকে নৈতিকতা, জ্ঞান ও আধুনিক দক্ষতায় সমৃদ্ধ প্রজন্ম গড়ার একটি আদর্শ প্রতিষ্ঠান।
          </p>
          <div className="mt-4 flex gap-2">
            {[Facebook, Youtube, Twitter].map((Icon, index) => (
              <button
                key={index}
                className="focus-ring rounded-lg bg-white/10 p-2.5 text-slate-200 transition hover:bg-white/20"
                aria-label="সামাজিক লিংক"
                onClick={() => toast.success("সামাজিক লিংক ডেমো হিসেবে রাখা হয়েছে।")}
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">গুরুত্বপূর্ণ লিংক</h3>
          <ul className="space-y-3 text-slate-300">
            {navItems.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">একাডেমিক লিংক</h3>
          <ul className="space-y-3 text-slate-300">
            {["বিভাগসমূহ", "ভর্তি", "শিক্ষকবৃন্দ", "ফলাফল", "নোটিশ"].map((label, index) => (
              <li key={label}>
                <Link className="transition hover:text-white" href={["/departments", "/admission", "/teachers", "/students", "/notices"][index]}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">যোগাযোগ</h3>
          <ul className="space-y-4 text-slate-300">
            <li className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 text-gold" /> {siteInfo.phone}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 text-gold" /> {siteInfo.email}
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 text-gold" /> {branches[0].address}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">ম্যাপ প্রিভিউ</h3>
          <MapPreview compact />
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>{siteInfo.copyright}</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-white">
              যোগাযোগ
            </Link>
            <Link href="/login" className="hover:text-white">
              লগইন
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
