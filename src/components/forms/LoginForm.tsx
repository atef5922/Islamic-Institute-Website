"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, Lock, LogIn, Mail, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/shared/Button";
import { loginSchema, type LoginFormValues } from "@/lib/validations";

const inputClass =
  "focus-ring min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 pr-11 text-slate-800 placeholder:text-slate-400";
const labelClass = "mb-2 block text-sm font-semibold text-slate-700";

export function LoginForm() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { identifier: "", password: "", role: "", remember: false }
  });

  const onSubmit = async () => {
    toast.success("লগইন সফল হয়েছে।");
    router.push("/dashboard");
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className={labelClass} htmlFor="identifier">
          মোবাইল বা ইমেইল
        </label>
        <div className="relative">
          <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input id="identifier" className={inputClass} placeholder="মোবাইল বা ইমেইল লিখুন" {...register("identifier")} />
        </div>
        {errors.identifier ? <p className="mt-1 text-sm text-red-600">{errors.identifier.message}</p> : null}
      </div>
      <div>
        <label className={labelClass} htmlFor="password">
          পাসওয়ার্ড
        </label>
        <div className="relative">
          <Lock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            id="password"
            className={inputClass}
            type={visible ? "text" : "password"}
            placeholder="পাসওয়ার্ড লিখুন"
            {...register("password")}
          />
          <button
            type="button"
            className="focus-ring absolute left-2 top-1/2 rounded-md p-2 text-slate-500"
            aria-label="পাসওয়ার্ড দেখুন"
            onClick={() => setVisible((value) => !value)}
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>
        {errors.password ? <p className="mt-1 text-sm text-red-600">{errors.password.message}</p> : null}
      </div>
      <div>
        <label className={labelClass} htmlFor="role">
          ভূমিকা
        </label>
        <div className="relative">
          <UserRound className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <select id="role" className={inputClass} {...register("role")}>
            <option value="">ভূমিকা নির্বাচন করুন</option>
            <option value="admin">অ্যাডমিন</option>
            <option value="teacher">শিক্ষক</option>
            <option value="reception">রিসেপশন</option>
          </select>
        </div>
        {errors.role ? <p className="mt-1 text-sm text-red-600">{errors.role.message}</p> : null}
      </div>
      <label className="flex items-center justify-between gap-3 text-sm text-slate-600">
        <span className="inline-flex items-center gap-2">
          <input className="h-4 w-4 rounded border-slate-300 text-primary" type="checkbox" {...register("remember")} />
          মনে রাখুন
        </span>
        <button type="button" className="font-semibold text-primary" onClick={() => toast.info("পাসওয়ার্ড রিসেট ডেমো হিসেবে রাখা হয়েছে।")}>
          ভুলে গেছেন?
        </button>
      </label>
      <Button className="w-full" disabled={isSubmitting}>
        <LogIn className="h-4 w-4" />
        লগইন
      </Button>
    </form>
  );
}
