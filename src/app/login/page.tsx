import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/forms/LoginForm";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "লগইন",
  description: "মাদরাসাতুল হিদায়াহ অ্যাডমিন, শিক্ষক ও রিসেপশন লগইন।"
};

export default function LoginPage() {
  return (
    <main className="grid min-h-dvh place-items-center bg-primary-soft p-4">
      <div className="w-full max-w-md rounded-xl border border-white/80 bg-white p-6 shadow-soft md:p-8">
        <Link href="/" className="mx-auto mb-6 flex w-fit flex-col items-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
            <span className="text-3xl font-bold">হি</span>
          </span>
          <span className="mt-3 text-2xl font-bold text-primary-dark">{siteInfo.name}</span>
          <span className="mt-1 text-sm text-slate-500">ড্যাশবোর্ডে প্রবেশ করুন</span>
        </Link>
        <LoginForm />
        <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
          {["অ্যাডমিন", "শিক্ষক", "রিসেপশন"].map((role) => (
            <span key={role} className="rounded-lg bg-slate-50 p-3 font-semibold text-slate-600">{role}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
