import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white shadow-glow hover:bg-primary-dark",
  secondary: "bg-gold text-ink hover:bg-amber-400",
  outline: "border border-primary/35 bg-white text-primary hover:bg-primary-soft",
  ghost: "text-slate-700 hover:bg-slate-100",
  light: "bg-white text-primary hover:bg-primary-soft"
};

const base =
  "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

export function Button({ className, variant = "primary", children, ...props }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({ className, variant = "primary", children, href, ...props }: LinkButtonProps) {
  return (
    <Link className={cn(base, variants[variant], className)} href={href} {...props}>
      {children}
    </Link>
  );
}
