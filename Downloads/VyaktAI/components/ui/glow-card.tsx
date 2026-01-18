import React from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(59, 130, 246, 0.5)", // Scale Blue default
  ...props
}: GlowCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300",
        "hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_var(--glow-color)] text-left",
        className
      )}
      style={
        {
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
}
