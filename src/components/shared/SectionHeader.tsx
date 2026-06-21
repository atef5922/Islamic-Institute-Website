import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 max-w-3xl", centered && "mx-auto text-center", className)} data-aos="fade-up">
      {eyebrow ? <p className="mb-2 text-sm font-semibold text-gold">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-normal text-primary-dark md:text-4xl">{title}</h2>
      <div className={cn("mt-4 h-1 w-20 rounded-full bg-gold", centered ? "mx-auto" : "")} />
      {description ? <p className="mt-5 text-base leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}
