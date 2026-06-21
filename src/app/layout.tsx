import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ClientProviders } from "@/components/layout/ClientProviders";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteInfo } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "মাদরাসাতুল হিদায়াহ | ইসলামি ও আধুনিক শিক্ষার সমন্বিত প্রতিষ্ঠান",
    template: "%s | মাদরাসাতুল হিদায়াহ"
  },
  description:
    "মাদরাসাতুল হিদায়াহ একটি মানসম্মত ইসলামি শিক্ষা প্রতিষ্ঠান, যেখানে হিফজ, নাজেরা, নূরানী, কিতাব ও আধুনিক একাডেমিক শিক্ষা প্রদান করা হয়।",
  keywords: ["মাদরাসা", "হিফজ", "নাজেরা", "ইসলামি শিক্ষা", "ঢাকা", "ভর্তি"],
  openGraph: {
    title: "মাদরাসাতুল হিদায়াহ",
    description: siteInfo.tagline,
    type: "website",
    locale: "bn_BD",
    siteName: siteInfo.name
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="bn">
      <body>
        <ClientProviders>
          <SiteShell>{children}</SiteShell>
        </ClientProviders>
      </body>
    </html>
  );
}
