"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/shared/Button";
import { contactSchema, type ContactFormValues } from "@/lib/validations";

const inputClass =
  "focus-ring min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-slate-800 placeholder:text-slate-400";
const labelClass = "mb-2 block text-sm font-semibold text-slate-700";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", subject: "", message: "" }
  });

  const onSubmit = async () => {
    toast.success("আপনার বার্তা সফলভাবে পাঠানো হয়েছে।");
    reset();
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            আপনার নাম
          </label>
          <input id="name" className={inputClass} placeholder="পূর্ণ নাম" {...register("name")} />
          {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name.message}</p> : null}
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            মোবাইল নম্বর
          </label>
          <input id="phone" className={inputClass} placeholder="০১৭১২৩৪৫৬৭৮" {...register("phone")} />
          {errors.phone ? <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p> : null}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="email">
            ইমেইল
          </label>
          <input id="email" className={inputClass} placeholder="আপনার ইমেইল" {...register("email")} />
          {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email.message}</p> : null}
        </div>
        <div>
          <label className={labelClass} htmlFor="subject">
            বিষয়
          </label>
          <input id="subject" className={inputClass} placeholder="বার্তার বিষয়" {...register("subject")} />
          {errors.subject ? <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p> : null}
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="message">
          বার্তা
        </label>
        <textarea id="message" className={`${inputClass} min-h-36 py-3`} placeholder="আপনার বার্তা লিখুন" {...register("message")} />
        {errors.message ? <p className="mt-1 text-sm text-red-600">{errors.message.message}</p> : null}
      </div>
      <Button className="w-full sm:w-auto" disabled={isSubmitting}>
        <Send className="h-4 w-4" />
        পাঠান
      </Button>
    </form>
  );
}
