import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export const metadata: Metadata = {
  title: "ড্যাশবোর্ড",
  description: "মাদরাসাতুল হিদায়াহর ফ্রন্টএন্ড ড্যাশবোর্ড ডেমো।"
};

export default function DashboardPage() {
  return <DashboardShell />;
}
