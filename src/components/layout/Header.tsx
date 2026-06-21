"use client";

import { ChevronDown, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { LinkButton } from "@/components/shared/Button";
import { MadrasaIdentityBanner } from "@/components/layout/MadrasaIdentityBanner";
import { NoticeMarquee } from "@/components/layout/NoticeMarquee";
import { TopInfoBar } from "@/components/layout/TopInfoBar";
import { navItems, siteInfo } from "@/data/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import brandLogo from "@/product/brand-logo-cropped.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="হোমে যান">
      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-emerald-100 bg-white shadow-sm ring-2 ring-primary-soft md:h-12 md:w-12">
        <Image
          src={brandLogo}
          alt="মাদরাসাতুল হিদায়াহ লোগো"
          fill
          sizes="48px"
          className="p-0.5 object-contain object-center"
          priority
        />
      </span>
      <span className="leading-tight">
        <span className="block text-xl font-bold text-primary-dark">{siteInfo.name}</span>
        <span className="block text-xs font-medium text-slate-500">ইসলামি শিক্ষা প্রতিষ্ঠান</span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const closeDrawer = () => {
    setDrawerOpen(false);
    setOpenGroup(null);
  };

  return (
    <>
      <div className="relative z-40 w-full overflow-x-clip bg-white">
        <TopInfoBar />
        <MadrasaIdentityBanner />
        <NoticeMarquee />
      </div>

      <header className="sticky top-0 z-50 w-full overflow-x-clip border-b border-slate-100 bg-white/96 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="প্রধান নেভিগেশন">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <div className="group relative" key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
              "focus-ring inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-primary-soft hover:text-primary",
                      active && "bg-primary-soft text-primary"
                    )}
                  >
                    {item.label}
                    {item.children ? <ChevronDown className="h-4 w-4" /> : null}
                  </Link>
                  {item.children ? (
                    <div className="invisible absolute right-0 top-full w-56 translate-y-3 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-primary-soft hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <button
            className="focus-ring rounded-lg border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-100"
              aria-label="সার্চ"
              onClick={() => toast.info("সার্চ সুবিধা ডেমো সংস্করণে প্রস্তুত রাখা হয়েছে।")}
            >
              <Search className="h-5 w-5" />
            </button>
            <LinkButton href="/admission">ভর্তি আবেদন</LinkButton>
          </div>
          <button
            className="focus-ring rounded-lg border border-slate-200 p-2 text-primary lg:hidden"
            aria-label="মেনু খুলুন"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {drawerOpen ? (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <button className="absolute inset-0 bg-ink/45" aria-label="মেনু বন্ধ করুন" onClick={closeDrawer} />
          <aside className="absolute right-0 top-0 h-dvh w-[min(88vw,360px)] overflow-y-auto bg-white p-5 shadow-soft">
            <div className="mb-6 flex items-center justify-between gap-4">
              <Logo />
              <button
                className="focus-ring rounded-lg border border-slate-200 p-2 text-slate-600"
                aria-label="মেনু বন্ধ করুন"
                onClick={closeDrawer}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-1">
              {navItems.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <div key={item.label}>
                    {item.children ? (
                      <button
                        className={cn(
                          "focus-ring flex w-full items-center justify-between rounded-lg px-3 py-3 text-right font-semibold text-slate-700",
                          active && "bg-primary-soft text-primary"
                        )}
                        onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={cn("h-4 w-4 transition", openGroup === item.label && "rotate-180")} />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-lg px-3 py-3 font-semibold text-slate-700",
                          active && "bg-primary-soft text-primary"
                        )}
                        onClick={closeDrawer}
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.children && openGroup === item.label ? (
                      <div className="mr-3 border-r border-emerald-100 pr-3">
                        {item.children.map((child) => (
                          <Link
                            href={child.href}
                            key={child.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-primary-soft hover:text-primary"
                            onClick={closeDrawer}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <LinkButton href="/admission" className="mt-6 w-full" onClick={closeDrawer}>
              ভর্তি আবেদন
            </LinkButton>
          </aside>
        </div>
      ) : null}
    </>
  );
}
