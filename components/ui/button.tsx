"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-none text-label font-bold font-mono-technical tracking-wider transition-all duration-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-slate-950 hover:opacity-90 hover:shadow-[0_0_15px_hsl(var(--primary)/0.35)]",
        outline: "border border-primary text-primary bg-primary/5 hover:bg-primary/20",
        secondary: "bg-secondary/20 border border-secondary/40 text-white hover:bg-secondary/30 hover:border-secondary/60",
        ghost: "text-slate-400 hover:bg-white/5 hover:text-white",
      },
      size: {
        default: "px-6 py-2.5",
        sm: "px-3 py-1.5 text-mono-xs",
        lg: "px-8 py-3 text-sm",
        icon: "h-9 w-9 p-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
