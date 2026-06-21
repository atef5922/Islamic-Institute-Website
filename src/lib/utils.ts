import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBanglaNumber(value: string | number) {
  return String(value).replace(/\d/g, (digit) => banglaDigits[Number(digit)]);
}

export function createBanglaSlug(value: string) {
  return value
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\u0980-\u09FFa-zA-Z0-9-]/g, "")
    .toLowerCase();
}
