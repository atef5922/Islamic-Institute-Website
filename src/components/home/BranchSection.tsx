import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { branches } from "@/data/branches";

export function BranchSection() {
  return (
    <section className="section-tight islamic-pattern">
      <div className="container">
        <SectionHeader title="আমাদের শাখাসমূহ" />
        <div className="grid gap-5 md:grid-cols-3">
          {branches.map((branch) => (
            <article key={branch.id} className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-dark">{branch.name}</h3>
              <ul className="mt-5 space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-primary" />
                  {branch.address}
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-1 h-4 w-4 text-primary" />
                  {branch.phone}
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-1 h-4 w-4 text-primary" />
                  {branch.email}
                </li>
                <li className="flex gap-3">
                  <Clock3 className="mt-1 h-4 w-4 text-primary" />
                  {branch.hours}
                </li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
