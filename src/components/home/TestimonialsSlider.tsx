"use client";

import { Quote } from "lucide-react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSlider() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <SectionHeader title="অভিভাবকের মতামত" />
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="pb-10">
              <article className="premium-card h-full rounded-xl p-6">
                <Quote className="h-8 w-8 text-primary" />
                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <Image src={item.image} alt={item.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold text-primary-dark">{item.name}</h3>
                    <p className="text-sm text-slate-500">{item.relation}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
