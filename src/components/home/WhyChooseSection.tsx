"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { whyChooseUs } from "@/data/site";
import { toBanglaNumber } from "@/lib/utils";

export function WhyChooseSection() {
  return (
    <section className="section islamic-pattern">
      <div className="container">
        <SectionHeader title="যে কারণে মাদরাসাতুল হিদায়াহ অনন্য" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="premium-card rounded-xl p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-primary-dark/80">{toBanglaNumber(String(index + 1).padStart(2, "0"))}</span>
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 ${item.accent ?? "text-primary"}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
