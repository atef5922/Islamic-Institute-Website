"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/shared/Button";

type ToastButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  message?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "light";
};

export function ToastButton({
  children,
  message = "এই সুবিধাটি ডেমো সংস্করণে প্রদর্শনের জন্য রাখা হয়েছে।",
  variant = "outline",
  onClick,
  ...props
}: ToastButtonProps) {
  return (
    <Button
      variant={variant}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) toast.success(message);
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
