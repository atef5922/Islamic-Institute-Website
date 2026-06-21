import Image from "next/image";
import { LinkButton } from "@/components/shared/Button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { teachers } from "@/data/teachers";

export function TeachersPreview() {
  return (
    <section className="section-tight bg-white">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader title="আমাদের শিক্ষকবৃন্দ" centered={false} className="mb-2" />
          <LinkButton href="/teachers" variant="outline" className="mb-10">
            সব শিক্ষক দেখুন
          </LinkButton>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {teachers.slice(0, 5).map((teacher) => (
            <article key={teacher.id} className="premium-card rounded-xl p-4 text-center">
              <Image src={teacher.image} alt={teacher.name} width={160} height={160} className="mx-auto h-24 w-24 rounded-full object-cover" />
              <h3 className="mt-4 font-bold text-primary-dark">{teacher.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{teacher.designation}</p>
              <span className="mt-3 inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                {teacher.department}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
