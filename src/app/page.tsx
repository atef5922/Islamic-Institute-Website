import { AboutPreview } from "@/components/home/AboutPreview";
import { BranchSection } from "@/components/home/BranchSection";
import { ContactPreview } from "@/components/home/ContactPreview";
import { DepartmentsPreview } from "@/components/home/DepartmentsPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HeroGallerySection } from "@/components/home/HeroGallerySection";
import { NoticePreview } from "@/components/home/NoticePreview";
import { PrincipalMessageSection } from "@/components/home/PrincipalMessageSection";
import { StatsBar } from "@/components/home/StatsBar";

export default function HomePage() {
  return (
    <>
      <HeroGallerySection />
      <PrincipalMessageSection />
      <AboutPreview />
      <DepartmentsPreview />
      <StatsBar />
      <NoticePreview />
      <GalleryPreview />
      <ContactPreview />
      <BranchSection />
    </>
  );
}
