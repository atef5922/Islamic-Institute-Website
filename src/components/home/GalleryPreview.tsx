import { LinkButton } from "@/components/shared/Button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export function GalleryPreview() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <SectionHeader title="ক্যাম্পাস গ্যালারি" />
        <GalleryGrid limit={8} />
        <div className="mt-8 text-center">
          <LinkButton href="/gallery" variant="outline">
            সব ছবি দেখুন
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
