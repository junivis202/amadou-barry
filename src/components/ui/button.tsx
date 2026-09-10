import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap select-none outline-none focus-visible:ring-2 focus-visible:ring-wine/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50 transition-[transform,background-color,color,border-color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-wine text-paper shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_10%,transparent)] hover:bg-wine-hover",
        secondary:
          "bg-paper text-ink hover:bg-paper/90",
        outline:
          "border border-line bg-transparent text-paper hover:border-paper/40 hover:bg-elevated",
        ghost: "text-paper hover:bg-elevated",
      },
      size: {
        md: "h-11 rounded-lg px-5 text-sm",
        lg: "h-12 rounded-xl px-6 text-sm tracking-wide min-h-11",
        icon: "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
