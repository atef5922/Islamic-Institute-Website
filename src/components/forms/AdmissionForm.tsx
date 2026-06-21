"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/shared/Button";
import { departments } from "@/data/departments";
import { admissionSchema, type AdmissionFormValues } from "@/lib/validations";

const inputClass =
  "focus-ring min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-slate-800 placeholder:text-slate-400";
const labelClass = "mb-2 block text-sm font-semibold text-slate-700";

export function AdmissionForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      studentName: "",
      birthDate: "",
      department: "",
      guardianName: "",
      phone: "",
      address: "",
      previousInstitute: "",
      message: ""
    }
  });

  const onSubmit = async () => {
    toast.success("ভর্তি আবেদন গ্রহণ করা হয়েছে। অফিস থেকে যোগাযোগ করা হবে।");
    reset();
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="studentName">
            শিক্ষার্থীর নাম
          </label>
          <input id="studentName" className={inputClass} placeholder="শিক্ষার্থীর পূর্ণ নাম" {...register("studentName")} />
          {errors.studentName ? <p className="mt-1 text-sm text-red-600">{errors.studentName.message}</p> : null}
        </div>
        <div>
          <label className={labelClass} htmlFor="birthDate">
            জন্ম তারিখ
          </label>
          <input id="birthDate" className={inputClass} placeholder="দিন-মাস-বছর" {...register("birthDate")} />
          {errors.birthDate ? <p className="mt-1 text-sm text-red-600">{errors.birthDate.message}</p> : null}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="department">
            শ্রেণি / বিভাগ
          </label>
          <select id="department" className={inputClass} {...register("department")}>
            <option value="">বিভাগ নির্বাচন করুন</option>
            {departments.map((department) => (
              <option key={department.id} value={department.title}>
                {department.title}
              </option>
            ))}
          </select>
          {errors.department ? <p className="mt-1 text-sm text-red-600">{errors.department.message}</p> : null}
        </div>
        <div>
          <label className={labelClass} htmlFor="guardianName">
            অভিভাবকের নাম
          </label>
          <input id="guardianName" className={inputClass} placeholder="অভিভাবকের পূর্ণ নাম" {...register("guardianName")} />
          {errors.guardianName ? <p className="mt-1 text-sm text-red-600">{errors.guardianName.message}</p> : null}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="phone">
            মোবাইল নম্বর
          </label>
          <input id="phone" className={inputClass} placeholder="০১৭১২৩৪৫৬৭৮" {...register("phone")} />
          {errors.phone ? <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p> : null}
        </div>
        <div>
          <label className={labelClass} htmlFor="previousInstitute">
            পূর্ববর্তী প্রতিষ্ঠানের নাম
          </label>
          <input id="previousInstitute" className={inputClass} placeholder="প্রযোজ্য হলে লিখুন" {...register("previousInstitute")} />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="address">
          ঠিকানা
        </label>
        <textarea id="address" className={`${inputClass} min-h-24 py-3`} placeholder="পূর্ণ ঠিকানা" {...register("address")} />
        {errors.address ? <p className="mt-1 text-sm text-red-600">{errors.address.message}</p> : null}
      </div>
      <div>
        <label className={labelClass} htmlFor="message">
          বার্তা
        </label>
        <textarea id="message" className={`${inputClass} min-h-28 py-3`} placeholder="অতিরিক্ত তথ্য লিখুন" {...register("message")} />
      </div>
      <Button className="w-full sm:w-auto" disabled={isSubmitting}>
        <Send className="h-4 w-4" />
        আবেদন পাঠান
      </Button>
    </form>
  );
}
