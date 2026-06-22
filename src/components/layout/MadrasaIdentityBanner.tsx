/* eslint-disable @next/next/no-img-element */
import finalBanner from "@/product/navbar-final-banner.webp";

export function MadrasaIdentityBanner() {
  return (
    <section className="block w-full overflow-hidden border-y border-gold/25 bg-[#fff7df]">
      <img
        src={finalBanner.src}
        alt="Madrasa banner"
        className="block h-auto w-full object-contain"
        decoding="async"
        fetchPriority="high"
      />
    </section>
  );
}
