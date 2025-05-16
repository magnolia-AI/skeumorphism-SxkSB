import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const flatmorphismButtonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-[#d2a78f] text-[#2a0e01]",
        emoji: "bg-[#d2a78f] text-[#2a0e01] rounded-full",
        blue: "bg-[#a7c4d2] text-[#0e283a]",
        green: "bg-[#a7d2a8] text-[#0e3a12]",
        purple: "bg-[#d2a7c4] text-[#3a0e28]",
      },
      size: {
        default: "h-14 px-8 py-4 text-base rounded-[32px]",
        sm: "h-10 px-5 py-2 text-sm rounded-[24px]",
        lg: "h-16 px-10 py-5 text-lg rounded-[36px]",
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
        className={cn(flatmorphismButtonVariants({ variant, size, className }))}
        ref={ref}
        style={{
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
          position: "relative",
          overflow: "hidden",
          border: "none"
        }}
        {...props}
      >
        {/* Fading border effect - stronger at top, fading toward bottom */}
        <div className="absolute inset-0 rounded-[inherit] border-0" 
          style={{
            background: ,
            padding: "2px",
            WebkitMask: 
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none"
          }}
        ></div>
        
        {/* Light rim at the top edge */}
        <div className="absolute top-0 left-[3px] right-[3px] h-[2px] bg-[#f5e6dc] opacity-80 rounded-t-full"></div>
        
        {/* Inner shadow gradient */}
        <div className="absolute inset-[2px] rounded-[inherit] bg-gradient-to-b from-[rgba(255,255,255,0.15)] via-transparent to-[rgba(0,0,0,0.2)]"></div>
        
        {/* Button content */}
        <span className="relative z-10 flex items-center justify-center gap-2 font-bold">
          {children}
        </span>
      </Comp>
    )
  }
)
FlatmorphismButton.displayName = "FlatmorphismButton"

export { FlatmorphismButton, flatmorphismButtonVariants }


