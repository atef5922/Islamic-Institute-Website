import { z } from "zod";

const phoneRegex = /^(?:\+?৮৮)?০১[৩-৯][০-৯]{৮}$|^(?:\+?88)?01[3-9][0-9]{8}$/;

export const contactSchema = z.object({
  name: z.string().min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
  phone: z.string().regex(phoneRegex, "সঠিক মোবাইল নম্বর লিখুন"),
  email: z.string().email("সঠিক ইমেইল লিখুন"),
  subject: z.string().min(3, "বিষয় লিখুন"),
  message: z.string().min(10, "বার্তা কমপক্ষে ১০ অক্ষরের হতে হবে")
});

export const admissionSchema = z.object({
  studentName: z.string().min(2, "শিক্ষার্থীর নাম লিখুন"),
  birthDate: z.string().min(1, "জন্ম তারিখ নির্বাচন করুন"),
  department: z.string().min(1, "বিভাগ নির্বাচন করুন"),
  guardianName: z.string().min(2, "অভিভাবকের নাম লিখুন"),
  phone: z.string().regex(phoneRegex, "সঠিক মোবাইল নম্বর লিখুন"),
  address: z.string().min(8, "পূর্ণ ঠিকানা লিখুন"),
  previousInstitute: z.string().optional(),
  message: z.string().optional()
});

export const loginSchema = z.object({
  identifier: z.string().min(3, "মোবাইল বা ইমেইল লিখুন"),
  password: z.string().min(6, "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে"),
  role: z.string().min(1, "ভূমিকা নির্বাচন করুন"),
  remember: z.boolean().optional()
});

export const resultSearchSchema = z.object({
  roll: z.string().min(1, "রোল নম্বর লিখুন"),
  department: z.string().min(1, "বিভাগ নির্বাচন করুন"),
  year: z.string().min(1, "শিক্ষাবর্ষ নির্বাচন করুন")
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type AdmissionFormValues = z.infer<typeof admissionSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;
export type ResultSearchValues = z.infer<typeof resultSearchSchema>;
