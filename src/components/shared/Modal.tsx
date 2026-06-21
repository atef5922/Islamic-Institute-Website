"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ open, title, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/65 p-4" role="dialog" aria-modal="true">
      <button className="absolute inset-0 h-full w-full" aria-label="বন্ধ করুন" onClick={onClose} />
      <div className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-5 shadow-soft md:p-7">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-bold text-primary-dark">{title}</h3>
          <button
            className="focus-ring rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100"
            aria-label="বন্ধ করুন"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
