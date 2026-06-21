"use client";

import { CalendarDays, Clock3, Facebook, Instagram, LogIn, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function formatClock(date: Date) {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${period}`;
}

function formatDate(date: Date) {
  return [
    String(date.getDate()).padStart(2, "0"),
    String(date.getMonth() + 1).padStart(2, "0"),
    date.getFullYear()
  ].join("/");
}

export function TopInfoBar() {
  const [now, setNow] = useState({ time: "--:--:--", date: "--/--/----" });

  useEffect(() => {
    const update = () => {
      const date = new Date();
      setNow({ time: formatClock(date), date: formatDate(date) });
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="border-b border-white/10 bg-gradient-to-r from-primary-dark via-[#006052] to-primary-dark text-white">
      <div className="mx-auto flex min-h-9 w-full max-w-7xl items-center justify-between gap-4 overflow-x-auto px-4 py-1 text-xs font-bold sm:px-6 md:text-sm lg:px-8">
        <div className="flex shrink-0 items-center gap-4 text-emerald-50 md:gap-6">
          <span>
            <span className="text-gold">Madrasa Code:</span> 11004
          </span>
          <span>
            <span className="text-gold">EIIN:</span> 107906
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-4 text-emerald-50 md:gap-6">
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-4 w-4 text-gold" />
            {now.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-gold" />
            {now.date}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {[Facebook, Youtube, Twitter, Instagram].map((Icon, index) => (
            <button
              key={index}
              className="focus-ring rounded-full p-1.5 text-emerald-50 transition hover:bg-white/10"
              aria-label="সামাজিক লিংক"
              onClick={() => toast.success("সামাজিক লিংক ডেমো হিসেবে রাখা হয়েছে।")}
            >
              <Icon className="h-3.5 w-3.5" />
            </button>
          ))}
          <Link
            href="/login"
            className="focus-ring inline-flex min-h-7 items-center gap-1 rounded-md border border-white/15 bg-white/10 px-3 text-xs font-semibold text-white transition hover:bg-white/20"
          >
            <LogIn className="h-3.5 w-3.5" />
            লগইন
          </Link>
          <Link
            href="/admission"
            className="focus-ring inline-flex min-h-7 items-center rounded-md border border-white/15 bg-white/10 px-3 text-xs font-semibold text-white transition hover:bg-white/20"
          >
            অনলাইন আবেদন
          </Link>
        </div>
      </div>
    </div>
  );
}
