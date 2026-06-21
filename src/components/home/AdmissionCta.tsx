import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { LinkButton } from "@/components/shared/Button";
import admissionImage from "@/product/herobanner1.png";

export function AdmissionCta() {
  return (
    <section className="section-tight bg-white">
      <div className="container overflow-hidden rounded-xl bg-primary-dark text-white shadow-glow">
        <div className="grid items-center gap-8 p-8 md:grid-cols-[1fr_360px] md:p-10">
          <div>
            <h2 className="text-3xl font-bold tracking-normal md:text-4xl">২০২৬ শিক্ষাবর্ষে ভর্তি চলছে</h2>
            <p className="mt-4 max-w-2xl leading-8 text-emerald-50">
              আপনার সন্তানের দ্বীনি ও আধুনিক শিক্ষার সুন্দর ভবিষ্যৎ গড়তে আজই ভর্তি আবেদন করুন।
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/admission" variant="light">
                অনলাইনে আবেদন করুন
                <ArrowLeft className="h-4 w-4" />
              </LinkButton>
              <LinkButton href="/admission#fees" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
                ভর্তি তথ্য দেখুন
              </LinkButton>
            </div>
          </div>
          <Image
            src={admissionImage}
            alt="ভর্তি চলমান শিক্ষার্থী"
            width={520}
            height={330}
            quality={100}
            className="h-56 w-full rounded-xl object-cover md:h-64"
          />
        </div>
      </div>
    </section>
  );
}
