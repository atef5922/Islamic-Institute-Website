"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/site";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div key={faq.question} className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <button
            className="focus-ring flex w-full items-center justify-between gap-4 p-5 text-right font-bold text-primary-dark"
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            {faq.question}
            <ChevronDown className={cn("h-5 w-5 shrink-0 transition", open === index && "rotate-180")} />
          </button>
          {open === index ? <p className="px-5 pb-5 leading-8 text-slate-600">{faq.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
