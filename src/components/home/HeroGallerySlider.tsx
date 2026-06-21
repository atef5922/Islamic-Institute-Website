"use client";

import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroGallery } from "@/data/heroGallery";

export function HeroGallerySlider() {
  return (
    <div
      className="hero-gallery-slider relative h-[280px] overflow-hidden rounded-[10px] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:h-[320px] md:h-[380px] lg:h-[460px] xl:h-[500px]"
      aria-label="প্রতিষ্ঠানের গ্যালারি স্লাইডার"
    >
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {heroGallery.map((item, index) => (
          <SwiperSlide key={item.id} className="h-full">
            <div className="relative h-full w-full">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority={index === 0}
                quality={100}
                sizes="(max-width: 1023px) 100vw, 70vw"
                className="object-cover"
                style={{ objectPosition: item.objectPosition ?? "center" }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-slate-200/70" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
