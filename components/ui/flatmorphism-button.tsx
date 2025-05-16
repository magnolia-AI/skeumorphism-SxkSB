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
        blue: "bg-[#a5c1d3]",
        white: "bg-white",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "beige",
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
          "absolute inset-0 rounded-full border-2 border-black",
          variant === "circle" ? "rounded-full" : "rounded-full"
        )}
      />
      
      {/* Button element */}
      <button
        className={cn(
          flatmorphismButtonVariants({ variant, size, color, className }),
          "relative z-10 border-2 border-transparent shadow-[0_6px_10px_rgba(0,0,0,0.15)]",
          "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-black/30 before:to-transparent before:mix-blend-darken",
          "after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-b after:from-white/100 after:to-transparent after:opacity-30 after:mix-blend-soft-light",
          "[&>span]:relative [&>span]:z-10 [&>span]:bg-gradient-to-b [&>span]:from-black/100 [&>span]:via-black/35 [&>span]:to-black/100 [&>span]:bg-clip-text [&>span]:text-transparent [&>span]:mix-blend-darken [&>span]:opacity-45"
        )}
        ref={ref}
        {...props}
      >
        {/* Inner shadow effect */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] mix-blend-darken" />
        
        {/* Inner highlight effect */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_-2px_4px_rgba(255,255,255,0.3)] mix-blend-soft-light" />
        
        {/* Content wrapper */}
        <div className="relative z-20 flex items-center justify-center gap-2">
          {icon && <span className="opacity-45 mix-blend-darken">{icon}</span>}
          {typeof children === 'string' ? <span>{children}</span> : children}
        </div>
      </button>
      
      {/* Drop shadow effect */}
      <div 
        className={cn(
          "absolute -bottom-1 left-0 right-0 h-4 blur-sm bg-black/20 rounded-full",
          variant === "circle" ? "aspect-square" : ""
        )}
      />
    </div>
  );
});

FlatmorphismButton.displayName = "FlatmorphismButton";

export { FlatmorphismButton, flatmorphismButtonVariants };
