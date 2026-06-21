"use client";

import { motion } from "framer-motion";
import { ArrowRight, BellRing, CalendarDays } from "lucide-react";
import Link from "next/link";
import { LinkButton } from "@/components/shared/Button";
import { heroUpdates } from "@/data/heroGallery";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export function HeroNoticePanel() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col rounded-[10px] border border-slate-200 border-t-4 border-t-primary bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8 md:h-[380px] lg:h-[460px] xl:h-[500px]"
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
          <BellRing className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-medium text-primary">নোটিশ বোর্ড</p>
          <h2 className="text-2xl font-bold text-slate-900">গুরুত্বপূর্ণ আপডেট</h2>
        </div>
      </div>

      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="hero-notice-scroll flex-1 space-y-3 overflow-y-auto pr-1"
      >
        {heroUpdates.map((item) => (
          <motion.li key={item.id} variants={itemVariants} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 280, damping: 24 }}>
            <Link
              href={item.href}
              className={[
                "group block rounded-[10px] border p-4 transition duration-200",
                item.isLatest ? "border-primary/20 bg-emerald-50/80" : "border-slate-200 hover:border-primary/20 hover:bg-slate-50"
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <span
                  className={[
                    "mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-primary",
                    item.isLatest ? "bg-white shadow-sm" : "bg-primary-soft"
                  ].join(" ")}
                >
                  <CalendarDays className="h-5 w-5" />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                    <span>{item.date}</span>
                    {item.isLatest ? (
                      <span className="inline-flex items-center gap-1 text-primary">
                        <motion.span
                          className="h-2 w-2 rounded-full bg-emerald-500"
                          animate={{ scale: [1, 1.25, 1], opacity: [1, 0.6, 1] }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                        />
                        সর্বশেষ
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-2 text-base font-semibold leading-7 text-slate-900">{item.title}</h3>
                </div>

                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-primary transition group-hover:bg-white group-hover:shadow-sm">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <LinkButton href="/notices" className="mt-6 w-full justify-center rounded-xl">
        সব নোটিশ দেখুন
        <ArrowRight className="h-4 w-4" />
      </LinkButton>
    </motion.aside>
  );
}
