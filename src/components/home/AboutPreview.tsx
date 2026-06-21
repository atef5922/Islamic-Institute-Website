import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { LinkButton } from "@/components/shared/Button";
import { aboutHighlights } from "@/data/site";
import campusImage from "@/product/Academic/academic2.png";

export function AboutPreview() {
  return (
    <section className="section bg-white">
      <div className="container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative" data-aos="fade-up">
          <div className="overflow-hidden rounded-xl shadow-soft">
            <Image
              src={campusImage}
              alt="মাদরাসাতুল হিদায়াহর ক্যাম্পাস ভবন"
              width={900}
              height={620}
              quality={100}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute bottom-5 right-5 rounded-xl bg-white p-5 text-center shadow-soft">
            <p className="text-4xl font-bold text-primary">১৫+</p>
            <p className="mt-1 text-sm font-semibold text-slate-600">বছরের অভিজ্ঞতা</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <p className="mb-2 text-sm font-semibold text-gold">কে আমরা</p>
          <h2 className="text-4xl font-bold tracking-normal text-primary-dark">মাদরাসাতুল হিদায়াহ</h2>
          <p className="mt-5 leading-8 text-slate-600">
            মাদরাসাতুল হিদায়াহ একটি আধুনিক ও মানসম্মত ইসলামি শিক্ষা প্রতিষ্ঠান, যেখানে কুরআন, হাদিস, আকাইদ,
            আদব-আখলাক ও একাডেমিক শিক্ষাকে সমন্বিতভাবে উপস্থাপন করা হয়। আমাদের লক্ষ্য হলো শিক্ষার্থীদের
            জ্ঞান, চরিত্র, শৃঙ্খলা ও নৈতিকতার ভিত্তিতে আদর্শ মানুষ হিসেবে গড়ে তোলা।
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {aboutHighlights.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-semibold text-slate-700">{label}</span>
              </div>
            ))}
          </div>
          <LinkButton href="/about" className="mt-7">
            আরো জানুন
            <ArrowLeft className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
