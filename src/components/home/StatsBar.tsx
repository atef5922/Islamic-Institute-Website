"use client";

import { useEffect, useState } from "react";
import { stats } from "@/data/stats";
import { toBanglaNumber } from "@/lib/utils";

export function StatsBar() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setReady(true), 250);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section className="bg-primary-dark py-9 text-white">
      <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, suffix, icon: Icon }) => (
          <div key={label} className="flex items-center justify-center gap-4 border-white/10 lg:border-l lg:last:border-l-0">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <Icon className="h-7 w-7" />
            </span>
            <div>
              <p className="text-4xl font-bold">{toBanglaNumber(ready ? value : 0)}{suffix}</p>
              <p className="mt-1 text-emerald-50">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
