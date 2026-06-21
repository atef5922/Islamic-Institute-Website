import { SectionHeader } from "@/components/shared/SectionHeader";
import { facilities } from "@/data/site";

export function FacilitiesSection() {
  return (
    <section className="section-tight bg-white" id="facilities">
      <div className="container">
        <SectionHeader title="আমাদের সুযোগ-সুবিধাসমূহ" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {facilities.map(({ title, description, icon: Icon }) => (
            <div key={title} className="premium-card rounded-xl border-b-4 border-b-primary p-6 text-center" data-aos="fade-up">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-glow">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-primary-dark">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
