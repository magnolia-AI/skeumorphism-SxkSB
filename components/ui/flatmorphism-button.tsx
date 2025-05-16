"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", 
  {
    variants: {
      variant: {
        default: [
          "bg-gradient-to-b from-[#d7b7a3] to-[#bb9f8c]", 
          "text-[#2a0e02]",
          "border-[2px] border-black",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_4px_8px_rgba(0,0,0,0.25)]",
          "relative overflow-hidden",
          "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black/10 after:pointer-events-none",
          "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:pointer-events-none before:rounded-[inherit]",
        ],
        blue: [
          "bg-gradient-to-b from-[#b1c5d3] to-[#8eaac0]", 
          "text-[#0a1f2e]",
          "border-[2px] border-black",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_4px_8px_rgba(0,0,0,0.25)]",
          "relative overflow-hidden",
          "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black/10 after:pointer-events-none",
          "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:pointer-events-none before:rounded-[inherit]",
        ],
        green: [
          "bg-gradient-to-b from-[#b1d3b8] to-[#8ec09a]", 
          "text-[#0a2e14]",
          "border-[2px] border-black",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_4px_8px_rgba(0,0,0,0.25)]",
          "relative overflow-hidden",
          "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black/10 after:pointer-events-none",
          "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:pointer-events-none before:rounded-[inherit]",
        ],
        purple: [
          "bg-gradient-to-b from-[#c5b1d3] to-[#aa8ec0]", 
          "text-[#1f0a2e]",
          "border-[2px] border-black",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_4px_8px_rgba(0,0,0,0.25)]",
          "relative overflow-hidden",
          "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black/10 after:pointer-events-none",
          "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:pointer-events-none before:rounded-[inherit]",
        ],
        emoji: [
          "bg-gradient-to-b from-[#d7b7a3] to-[#bb9f8c]", 
          "text-[#2a0e02]",
          "border-[2px] border-black",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_4px_8px_rgba(0,0,0,0.25)]",
          "relative overflow-hidden",
          "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black/10 after:pointer-events-none",
          "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white/20 before:pointer-events-none before:rounded-[inherit]",
        ],
      },
      size: {
        default: "h-12 px-6 rounded-full",
        sm: "h-9 px-4 rounded-full text-sm",
        lg: "h-14 px-8 rounded-full text-lg",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const FlatmorphismButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
FlatmorphismButton.displayName = "FlatmorphismButton"

export { FlatmorphismButton, buttonVariants }
