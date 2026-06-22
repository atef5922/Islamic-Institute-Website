import { HeroGallerySlider } from "@/components/home/HeroGallerySlider";
import { HeroNoticePanel } from "@/components/home/HeroNoticePanel";

export function HeroGallerySection() {
  return (
    <section className="overflow-x-clip bg-[#f4f7fb] py-8 sm:py-10 lg:py-12">
      <div className="container">
        <div className="grid items-stretch gap-5 md:gap-6 xl:grid-cols-[minmax(0,7.2fr)_minmax(340px,2.8fr)]">
          <div className="min-w-0">
            <HeroGallerySlider />
          </div>
          <div className="min-w-0">
            <HeroNoticePanel />
          </div>
        </div>
      </div>
    </section>
  );
}
