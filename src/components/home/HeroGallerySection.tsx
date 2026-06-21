import { HeroGallerySlider } from "@/components/home/HeroGallerySlider";
import { HeroNoticePanel } from "@/components/home/HeroNoticePanel";

export function HeroGallerySection() {
  return (
    <section className="overflow-x-clip bg-[#f4f7fb] py-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(320px,3fr)]">
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
