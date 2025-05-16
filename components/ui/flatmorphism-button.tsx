import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const flatmorphismButtonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-[#d2a78f] text-[#3a1a0e] border-[#d2a78f]",
        emoji: "bg-[#d2a78f] text-[#3a1a0e] border-[#d2a78f] rounded-full",
      },
      size: {
        default: "h-14 px-8 py-4 text-base",
        sm: "h-10 rounded-full px-5 py-2 text-sm",
        lg: "h-16 rounded-full px-10 py-5 text-lg",
        icon: "h-14 w-14 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface FlatmorphismButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof flatmorphismButtonVariants> {
  asChild?: boolean
}

const FlatmorphismButton = React.forwardRef<HTMLButtonElement, FlatmorphismButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(flatmorphismButtonVariants({ variant, size, className }), 
          "relative border-2 shadow-lg",
          "before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/30 before:to-transparent before:opacity-30",
          "after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-white/50 after:via-transparent after:to-black/10 after:opacity-30",
        )}
        ref={ref}
        style={{
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.2)"
        }}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </Comp>
    )
  }
)
FlatmorphismButton.displayName = "FlatmorphismButton"

export { FlatmorphismButton, flatmorphismButtonVariants }
