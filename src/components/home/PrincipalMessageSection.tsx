"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Quote } from "lucide-react";
import Image from "next/image";
import { LinkButton } from "@/components/shared/Button";
import { principalProfile } from "@/data/principal";

const sectionTransition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

export function PrincipalMessageSection() {
  return (
    <section className="relative overflow-x-clip bg-[#f8fafc] py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,253,245,0.95),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.10),transparent_24%)]" />
        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(0,105,92,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionTransition}
          className="group relative overflow-hidden rounded-[22px] border border-emerald-100/80 bg-[linear-gradient(135deg,#fffdf7_0%,#ffffff_54%,#f8fafc_100%)] shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition duration-500 hover:shadow-[0_30px_90px_rgba(15,23,42,0.12)] md:rounded-[28px]"
        >
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] bg-[radial-gradient(circle_at_center,rgba(0,105,92,0.08),transparent_62%)] lg:block" />
          <div className="pointer-events-none absolute right-14 top-12 hidden h-28 w-28 rounded-full border border-gold/25 lg:block" />
          <div className="pointer-events-none absolute bottom-12 right-16 hidden h-3 w-3 rotate-45 bg-gold/75 lg:block" />
          <div className="pointer-events-none absolute right-24 top-24 hidden h-2 w-2 rounded-full bg-primary/50 lg:block" />

          <div className="grid items-center gap-10 p-5 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:p-10 xl:p-12">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ ...sectionTransition, delay: 0.05 }}
              className="relative min-w-0"
            >
              <div className="absolute -inset-4 hidden rounded-[34px] border border-gold/25 lg:block" />
              <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-gradient-to-tr from-primary/18 to-transparent blur-2xl" />

              <div className="relative overflow-hidden rounded-[24px] border border-emerald-100/80 bg-white p-2 shadow-soft">
                <Image
                  src={principalProfile.image}
                  alt="মাদরাসাতুল হিদায়াহ-এর অধ্যক্ষ"
                  width={900}
                  height={1040}
                  quality={100}
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="h-[360px] w-full rounded-[20px] object-cover object-center sm:h-[420px] lg:h-[520px]"
                />

                <div className="absolute bottom-6 left-6 max-w-[220px] rounded-2xl bg-white/92 px-4 py-3 shadow-soft backdrop-blur">
                  <p className="text-xs font-semibold text-primary">অধ্যক্ষ</p>
                  <p className="mt-1 text-sm font-bold text-primary-dark">মাদরাসাতুল হিদায়াহ</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...sectionTransition, delay: 0.12 }}
              className="relative min-w-0"
            >
              <Quote className="absolute -top-2 right-0 hidden h-20 w-20 text-primary/10 md:block" />

              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary shadow-sm">
                  <Quote className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gold">{principalProfile.label}</p>
                  <h2 className="mt-2 text-3xl font-bold tracking-normal text-primary-dark sm:text-4xl">
                    {principalProfile.title}
                  </h2>
                </div>
              </div>

              <p className="mt-8 text-base leading-8 text-slate-700 md:text-lg md:leading-9">
                {principalProfile.message}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 via-gold/45 to-primary/20" />
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rotate-45 bg-gold/75" />
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                  <span className="h-2.5 w-2.5 rotate-45 bg-gold/75" />
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 via-gold/45 to-primary/20" />
              </div>

              <div className="mt-8 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-primary-dark">{principalProfile.name}</h3>
                  <p className="mt-2 text-base font-medium text-slate-600">{principalProfile.designation}</p>
                  <p className="mt-1 text-base text-slate-500">{principalProfile.institute}</p>
                </div>

                <LinkButton href="/about" className="w-full rounded-xl sm:w-auto">
                  আরো পড়ুন
                  <ArrowLeft className="h-4 w-4" />
                </LinkButton>
              </div>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
