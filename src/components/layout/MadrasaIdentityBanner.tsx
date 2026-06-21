/* eslint-disable @next/next/no-img-element */
import desktopBanner from "@/product/navbar-banner-desktop.png";
import laptopBanner from "@/product/navbar-banner-laptop.png";
import mobileBanner from "@/product/navbar-banner-mobile.png";
import tabletBanner from "@/product/navbar-banner-tablet.png";

export function MadrasaIdentityBanner() {
  return (
    <section className="block w-full overflow-hidden border-y border-gold/25 bg-[#fff7df]">
      <picture className="block w-full">
        <source media="(min-width: 1200px)" srcSet={desktopBanner.src} />
        <source media="(min-width: 1024px)" srcSet={laptopBanner.src} />
        <source media="(min-width: 640px)" srcSet={tabletBanner.src} />
        <img
          src={mobileBanner.src}
          alt="মাদরাসাতুল হিদায়াহ নেভবার ব্যানার"
          className="block h-auto w-full object-center"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
    </section>
  );
}
