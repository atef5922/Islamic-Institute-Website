"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { siteInfo } from "@/data/site";

const banglaToEnglishDigits: Record<string, string> = {
  "০": "0",
  "১": "1",
  "২": "2",
  "৩": "3",
  "৪": "4",
  "৫": "5",
  "৬": "6",
  "৭": "7",
  "৮": "8",
  "৯": "9"
};

const normalizeToDigits = (value: string): string => {
  return value.replace(/[০-৯]/g, (digit) => banglaToEnglishDigits[digit] || digit).replace(/[^\d]/g, "");
};

const buildWhatsAppNumber = () => {
  const digits = normalizeToDigits(siteInfo.phone);

  if (!digits) {
    return "";
  }

  if (digits.startsWith("880") && digits.length >= 11) {
    return digits;
  }

  if (digits.length === 11 && digits.startsWith("0")) {
    return `88${digits}`;
  }

  if (digits.length === 10) {
    return `880${digits}`;
  }

  return digits;
};

const WHATSAPP_NUMBER = buildWhatsAppNumber();
const WHATSAPP_MESSAGE = encodeURIComponent("আসসালামু আলাইকুম, আমি আপনার ওয়েবসাইট থেকে যোগাযোগ করছি।");
const WHATSAPP_HREF = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}` : "mailto:info@hidayah.edu.bd";

export function FloatingActions() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-fab fixed z-[50] flex flex-col items-center">
      {showTopButton ? (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="উপরের দিকে যান"
          title="উপরের দিকে যান"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(0,0,0,0.08)] bg-white text-primary shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:scale-[1.05] focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-[#006655] focus-visible:outline-offset-2"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2.4} />
        </button>
      ) : null}

      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="হোয়াটসঅ্যাপ এ যোগাযোগ করুন"
        title="হোয়াটসঅ্যাপ এ যোগাযোগ করুন"
          className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_rgba(37,211,102,0.38)] transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:scale-[1.05] focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-[#25D366] focus-visible:outline-offset-2"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2.35} />
      </a>

      <style jsx>{`
        .floating-fab {
          right: 16px;
          bottom: 16px;
          gap: 12px;
        }

        @media (min-width: 768px) {
          .floating-fab {
            right: 24px;
            bottom: 24px;
            gap: 12px;
          }
          .floating-fab button {
            width: 48px;
            height: 48px;
          }

          .floating-fab a {
            width: 56px;
            height: 56px;
          }
        }
      `}</style>
    </div>
  );
}
