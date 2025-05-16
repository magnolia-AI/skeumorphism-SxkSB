"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const flatmorphismButtonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        circle: "rounded-full aspect-square",
      },
      size: {
        default: "h-14 px-8",
        sm: "h-10 px-5",
        lg: "h-16 px-10",
        icon: "h-10 w-10",
      },
      color: {
        beige: "bg-[#d9b99b]",
        darkBeige: "bg-[#c5a687]", 
        blue: "bg-[#a5c1d3]",
        white: "bg-white",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "darkBeige",
    },
  }
);

export interface FlatmorphismButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof flatmorphismButtonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
}

const FlatmorphismButton = React.forwardRef<
  HTMLButtonElement,
  FlatmorphismButtonProps
>(({ className, variant, size, color, children, icon, ...props }, ref) => {
  return (
    <div className="relative group">
      {/* Outer wrapper with border effect */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full border-[3px] border-black",
          variant === "circle" ? "rounded-full" : "rounded-full"
        )}
      />
      
      {/* Button element */}
      <button
        className={cn(
          flatmorphismButtonVariants({ variant, size, color, className }),
          "relative z-10 border-[3px] border-transparent shadow-[0_6px_10px_rgba(0,0,0,0.15)]",
          "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-black/30 before:to-transparent before:mix-blend-darken",
          "after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-b after:from-white/50 after:to-transparent after:opacity-50 after:mix-blend-soft-light",
          "[&>span]:relative [&>span]:z-10 [&>span]:bg-gradient-to-b [&>span]:from-black/100 [&>span]:via-black/35 [&>span]:to-black/100 [&>span]:bg-clip-text [&>span]:text-transparent [&>span]:mix-blend-darken [&>span]:opacity-45 [&>span]:font-bold"
        )}
        ref={ref}
        {...props}
      >
        {/* Inner shadow effect */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_3px_6px_rgba(0,0,0,0.25)] mix-blend-darken" />
        
        {/* Inner highlight effect - top edge highlight */}
        <div className="absolute inset-x-0 top-0 h-[40%] rounded-t-full bg-gradient-to-b from-white/40 to-transparent mix-blend-soft-light" />
        
        {/* Content wrapper */}
        <div className="relative z-20 flex items-center justify-center gap-2">
          {icon && <span className="opacity-45 mix-blend-darken">{icon}</span>}
          {typeof children === 'string' ? <span>{children}</span> : children}
        </div>
      </button>
      
      {/* Drop shadow effect */}
      <div 
        className={cn(
          "absolute -bottom-1 left-0 right-0 h-3 blur-md bg-black/25 rounded-full transform scale-x-[0.95]",
          variant === "circle" ? "aspect-square" : ""
        )}
      />
    </div>
  );
});

FlatmorphismButton.displayName = "FlatmorphismButton";

export { FlatmorphismButton, flatmorphismButtonVariants };


