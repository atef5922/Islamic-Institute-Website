"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Header } from "@/components/layout/Header";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isolated = pathname === "/dashboard" || pathname === "/login";

  if (isolated) return <>{children}</>;

  return (
    <>
      <Header />
      <main>{children}</main>
      <FloatingActions />
      <Footer />
    </>
  );
}
