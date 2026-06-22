"use client";

import { ChevronDown, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
    <Link href="/" className="flex min-w-0 max-w-full items-center gap-3" aria-label="হোমে যান">
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
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-base font-bold text-primary-dark sm:text-xl">{siteInfo.name}</span>
        <span className="hidden truncate text-xs font-medium text-slate-500 sm:block">ইসলামি শিক্ষা প্রতিষ্ঠান</span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearDesktopCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const showDesktopMenu = (label: string) => {
    clearDesktopCloseTimer();
    setOpenDesktopMenu(label);
  };

  const scheduleDesktopMenuClose = () => {
    clearDesktopCloseTimer();
    closeTimer.current = setTimeout(() => setOpenDesktopMenu(null), 140);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setOpenGroup(null);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  return (
    <>
      <div className="relative z-40 w-full overflow-x-clip bg-white">
        <TopInfoBar />
        <MadrasaIdentityBanner />
        <NoticeMarquee />
      </div>

      <header className="sticky top-0 z-50 w-full overflow-x-clip border-b border-slate-100 bg-white/96 shadow-sm backdrop-blur-xl">
        <div className="relative mx-auto flex min-h-16 w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <div className="min-w-0 flex-1 pr-14 xl:flex-none xl:pr-0">
            <Logo />
          </div>
          <nav className="hidden items-center gap-1 xl:flex xl:gap-1.5" aria-label="প্রধান নেভিগেশন">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              const dropdownOpen = openDesktopMenu === item.label;
              return (
                <div
                  className="relative"
                  key={item.label}
                  onMouseEnter={() => (item.children ? showDesktopMenu(item.label) : setOpenDesktopMenu(null))}
                  onMouseLeave={item.children ? scheduleDesktopMenuClose : undefined}
                  onFocus={() => (item.children ? showDesktopMenu(item.label) : setOpenDesktopMenu(null))}
                  onBlur={(event) => {
                    const nextTarget = event.relatedTarget;
                    if (item.children && (!nextTarget || !(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget))) {
                      scheduleDesktopMenuClose();
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    aria-haspopup={item.children ? "menu" : undefined}
                    aria-expanded={item.children ? dropdownOpen : undefined}
                    className={cn(
                      "focus-ring inline-flex min-h-10 items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-primary-soft hover:text-primary xl:px-3",
                      (active || dropdownOpen) && "bg-primary-soft text-primary"
                    )}
                  >
                    {item.label}
                    {item.children ? <ChevronDown className={cn("h-4 w-4 transition duration-200", dropdownOpen && "rotate-180")} /> : null}
                  </Link>
                  {item.children ? (
                    <div
                      className={cn(
                        "pointer-events-none absolute left-0 top-full z-50 w-64 pt-3 opacity-0 transition duration-200 ease-out",
                        dropdownOpen && "pointer-events-auto opacity-100"
                      )}
                      onMouseEnter={() => showDesktopMenu(item.label)}
                    >
                      <div
                        className={cn(
                          "relative rounded-[10px] border border-slate-200/90 bg-white p-2 shadow-[0_22px_55px_rgba(15,23,42,0.14)] ring-1 ring-black/5 transition duration-200 ease-out",
                          dropdownOpen ? "translate-y-0" : "translate-y-2"
                        )}
                        role="menu"
                      >
                        <span className="absolute -top-1.5 left-8 h-3 w-3 rotate-45 border-l border-t border-slate-200/90 bg-white" />
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-primary-soft hover:text-primary focus:bg-primary-soft focus:text-primary"
                            onClick={() => setOpenDesktopMenu(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <div className="hidden items-center gap-2 xl:flex">
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
            className="focus-ring absolute right-4 top-1/2 shrink-0 -translate-y-1/2 rounded-lg border border-slate-200 bg-white p-2 text-primary shadow-sm xl:hidden"
            aria-label="মেনু খুলুন"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {drawerOpen ? (
        <div className="fixed inset-0 z-[80] xl:hidden">
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
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link
                href="/login"
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-lg border border-primary/25 bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary-soft"
                onClick={closeDrawer}
              >
                লগইন
              </Link>
              <LinkButton href="/admission" className="w-full" onClick={closeDrawer}>
                ভর্তি আবেদন
              </LinkButton>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
