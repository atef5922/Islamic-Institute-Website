import { ContactForm } from "@/components/forms/ContactForm";
import { MapPreview } from "@/components/shared/MapPreview";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { contactCards } from "@/data/site";

export function ContactPreview() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader title="আমাদের সাথে যোগাযোগ" />
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.slice(0, 3).map(({ title, value, icon: Icon }) => (
            <div key={title} className="premium-card h-full rounded-[10px] p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-primary-dark">{title}</h3>
                  <p className="mt-1 break-words text-slate-600">{value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[10px] border border-slate-200 bg-white p-5 shadow-soft md:p-7">
            <ContactForm />
          </div>
          <MapPreview />
        </div>
      </div>
    </section>
  );
}
