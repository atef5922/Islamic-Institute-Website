"use client";

import { useEffect, useState } from "react";
import { stats } from "@/data/stats";
import { toBanglaNumber } from "@/lib/utils";

export function StatsBar() {
  const [ready, setReady] = useState(false);
  const [values, setValues] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const targetValues = stats.map((entry) => entry.value);
    let rafId = 0;
    const start = performance.now();
    const duration = 1100;

    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValues(targetValues.map((value) => Math.round(value * eased)));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const readyTimer = window.setTimeout(() => setReady(true), 100);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.clearTimeout(readyTimer);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="bg-primary-dark py-9 text-white">
      <div className="container grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, suffix, icon: Icon }, index) => (
          <div
            key={label}
            className={`flex items-center justify-center gap-3 border border-transparent bg-white/5 p-2 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:gap-4 md:p-0 ${
              ready ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <Icon className="h-7 w-7" />
            </span>
            <div>
              <p className="text-3xl font-bold md:text-4xl">{toBanglaNumber(values[index])}{suffix}</p>
              <p className="mt-1 text-emerald-50">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
