"use client";

import {
  Bell,
  BookOpen,
  CalendarDays,
  FileText,
  GalleryHorizontal,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageCircle,
  Newspaper,
  Settings,
  UserRound,
  Users,
  X
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { toast } from "sonner";
import { chartData, dashboardMessages, recentAdmissions } from "@/data/admissions";
import { notices } from "@/data/notices";
import { siteInfo } from "@/data/site";
import { toBanglaNumber } from "@/lib/utils";

const sidebarItems = [
  { label: "ড্যাশবোর্ড", icon: LayoutDashboard },
  { label: "শিক্ষার্থী", icon: Users },
  { label: "শিক্ষক", icon: UserRound },
  { label: "ভর্তি আবেদন", icon: FileText },
  { label: "নোটিশ", icon: Bell },
  { label: "ইভেন্ট", icon: CalendarDays },
  { label: "গ্যালারি", icon: GalleryHorizontal },
  { label: "ব্লগ", icon: Newspaper },
  { label: "বার্তা", icon: MessageCircle },
  { label: "সেটিংস", icon: Settings }
];

const overviewCards = [
  { label: "মোট শিক্ষার্থী", value: "৫০০", icon: Users, tone: "bg-emerald-50 text-primary" },
  { label: "মোট শিক্ষক", value: "২৫", icon: UserRound, tone: "bg-blue-50 text-blue-600" },
  { label: "নতুন ভর্তি আবেদন", value: "১২", icon: FileText, tone: "bg-amber-50 text-amber-600" },
  { label: "নতুন বার্তা", value: "৮", icon: MessageCircle, tone: "bg-rose-50 text-rose-600" },
  { label: "প্রকাশিত নোটিশ", value: "১৬", icon: Bell, tone: "bg-teal-50 text-teal-600" }
];

export function DashboardShell() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-slate-50">
      <aside className="fixed inset-y-0 right-0 z-50 hidden w-72 bg-primary-dark text-white lg:block">
        <SidebarContent />
      </aside>
      {open ? (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <button className="absolute inset-0 bg-ink/50" aria-label="সাইডবার বন্ধ করুন" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-dvh w-[min(86vw,300px)] bg-primary-dark text-white">
            <div className="flex justify-end p-3">
              <button className="focus-ring rounded-lg bg-white/10 p-2" aria-label="সাইডবার বন্ধ করুন" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <SidebarContent onSelect={() => setOpen(false)} />
          </aside>
        </div>
      ) : null}
      <div className="lg:pr-72">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="flex min-h-16 items-center justify-between gap-4 px-4 md:px-8">
            <div className="flex items-center gap-3">
              <button className="focus-ring rounded-lg border border-slate-200 p-2 text-primary lg:hidden" aria-label="সাইডবার খুলুন" onClick={() => setOpen(true)}>
                <Menu className="h-5 w-5" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-primary-dark">স্বাগতম, অ্যাডমিন</h1>
                <p className="text-sm text-slate-500">মাদরাসার সার্বিক কার্যক্রম এক নজরে</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="focus-ring rounded-lg border border-slate-200 p-2 text-slate-600" aria-label="নোটিফিকেশন" onClick={() => toast.info("নতুন ৮টি বার্তা আছে।")}>
                <Bell className="h-5 w-5" />
              </button>
              <Link href="/" className="focus-ring rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white">
                সাইট দেখুন
              </Link>
            </div>
          </div>
        </header>
        <main className="p-4 md:p-8">
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {overviewCards.map(({ label, value, icon: Icon, tone }) => (
              <article key={label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className={`flex h-11 w-11 items-center justify-center rounded-lg ${tone}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm text-slate-500">{label}</p>
                <p className="mt-1 text-3xl font-bold text-primary-dark">{value}</p>
              </article>
            ))}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-primary-dark">ভর্তি আবেদন প্রবণতা</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="admissionColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00695C" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#00695C" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{ fill: "#475569", fontSize: 12 }} />
                    <YAxis tickFormatter={(value) => toBanglaNumber(value)} tick={{ fill: "#475569", fontSize: 12 }} />
                    <Tooltip formatter={(value) => toBanglaNumber(String(value))} labelStyle={{ color: "#0f172a" }} />
                    <Area type="monotone" dataKey="আবেদন" stroke="#00695C" fillOpacity={1} fill="url(#admissionColor)" />
                    <Area type="monotone" dataKey="ভর্তি" stroke="#F59E0B" fillOpacity={0.08} fill="#F59E0B" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-primary-dark">সাম্প্রতিক বার্তা</h2>
              <div className="space-y-3">
                {dashboardMessages.map((message) => (
                  <button
                    key={message.id}
                    className="focus-ring block w-full rounded-lg border border-slate-100 p-4 text-right transition hover:bg-primary-soft"
                    onClick={() => toast.info(`${message.sender} এর বার্তা খোলা হয়েছে।`)}
                  >
                    <p className="font-bold text-slate-800">{message.sender}</p>
                    <p className="mt-1 text-sm text-slate-600">{message.subject}</p>
                    <p className="mt-2 text-xs text-slate-400">{message.time}</p>
                  </button>
                ))}
              </div>
            </article>
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-2">
            <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 p-5">
                <h2 className="text-xl font-bold text-primary-dark">সাম্প্রতিক ভর্তি আবেদন</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] text-right text-sm">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="p-4 font-semibold">নাম</th>
                      <th className="p-4 font-semibold">বিভাগ</th>
                      <th className="p-4 font-semibold">তারিখ</th>
                      <th className="p-4 font-semibold">অবস্থা</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {recentAdmissions.map((item) => (
                      <tr key={item.id}>
                        <td className="p-4 font-semibold text-slate-800">{item.studentName}</td>
                        <td className="p-4 text-slate-600">{item.department}</td>
                        <td className="p-4 text-slate-600">{item.date}</td>
                        <td className="p-4">
                          <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">{item.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
            <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 p-5">
                <h2 className="text-xl font-bold text-primary-dark">নোটিশ ব্যবস্থাপনা</h2>
              </div>
              <div className="divide-y divide-slate-100">
                {notices.slice(0, 4).map((notice) => (
                  <button
                    key={notice.id}
                    className="focus-ring flex w-full items-center justify-between gap-4 p-4 text-right transition hover:bg-slate-50"
                    onClick={() => toast.info("নোটিশ সম্পাদনা ডেমো হিসেবে রাখা হয়েছে।")}
                  >
                    <span>
                      <span className="block font-semibold text-slate-800">{notice.title}</span>
                      <span className="mt-1 block text-sm text-slate-500">{notice.date}</span>
                    </span>
                    <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">{notice.category}</span>
                  </button>
                ))}
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

function SidebarContent({ onSelect }: { onSelect?: () => void }) {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-white/10 p-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary-dark">
            <BookOpen className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-lg font-bold">{siteInfo.name}</span>
            <span className="text-xs text-emerald-50">অ্যাডমিন প্যানেল</span>
          </span>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {sidebarItems.map(({ label, icon: Icon }, index) => (
          <button
            key={label}
            className={`focus-ring flex w-full items-center gap-3 rounded-lg px-4 py-3 text-right text-sm font-semibold transition ${
              index === 0 ? "bg-white text-primary-dark" : "text-emerald-50 hover:bg-white/10"
            }`}
            onClick={() => {
              onSelect?.();
              if (index !== 0) toast.info(`${label} মডিউল ডেমো হিসেবে রাখা হয়েছে।`);
            }}
          >
            <Icon className="h-5 w-5" />
            {label}
          </button>
        ))}
      </nav>
      <div className="border-t border-white/10 p-4">
        <button
          className="focus-ring flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-emerald-50 transition hover:bg-white/10"
          onClick={() => toast.success("লগআউট ডেমো হিসেবে দেখানো হয়েছে।")}
        >
          <LogOut className="h-5 w-5" />
          লগআউট
        </button>
      </div>
    </div>
  );
}
