import { ExternalLink, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

type MapPreviewProps = {
  compact?: boolean;
  className?: string;
};

const mapEmbedUrl =
  "https://www.openstreetmap.org/export/embed.html?bbox=90.3475%2C23.7925%2C90.3855%2C23.8295&layer=mapnik&marker=23.8103%2C90.3654";

export function MapPreview({ compact = false, className }: MapPreviewProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[10px] border border-emerald-100 bg-white shadow-soft",
        compact ? "min-h-[220px]" : "min-h-[320px] sm:min-h-[360px]",
        className
      )}
    >
      <iframe
        title="মাদরাসাতুল হিদায়াহ-এর অবস্থান"
        src={mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/88 via-white/30 to-transparent" />

      <div className="absolute bottom-4 left-4 right-4 rounded-[10px] border border-white/70 bg-white/92 p-4 shadow-soft backdrop-blur">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
            <MapPin className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-base font-bold text-primary-dark">মিরপুর, ঢাকা</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">প্রধান ক্যাম্পাসের অবস্থান ও আশেপাশের রুট</p>
          </div>
          <a
            href="https://www.openstreetmap.org/?mlat=23.8103&mlon=90.3654#map=15/23.8103/90.3654"
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden items-center gap-1 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary sm:inline-flex"
          >
            বড় ম্যাপ
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
