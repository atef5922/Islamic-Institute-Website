"use client";

import AOS from "aos";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { Toaster } from "sonner";

export function ClientProviders({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 650,
      once: true,
      easing: "ease-out-cubic"
    });
  }, []);

  return (
    <>
      {children}
      <Toaster richColors position="top-center" closeButton />
    </>
  );
}
