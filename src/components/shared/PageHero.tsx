import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle: string;
};

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-primary-dark py-16 text-white md:py-20">
      <div className="absolute inset-0 -z-10 bg-pattern bg-[length:22px_22px] opacity-20" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.28),transparent_32%),linear-gradient(135deg,rgba(0,105,92,0.95),rgba(15,23,42,0.96))]" />
      <div className="container">
        <nav className="mb-6 flex items-center gap-2 text-sm text-emerald-50/85" aria-label="ব্রেডক্রাম্ব">
          <Link href="/" className="inline-flex items-center gap-1 transition hover:text-white">
            <Home className="h-4 w-4" />
            হোম
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>{title}</span>
        </nav>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-normal md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-emerald-50/90">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
