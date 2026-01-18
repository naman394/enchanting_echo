"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassmorphismCard({ 
  children, 
  className,
  hover = true 
}: GlassmorphismCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-dark rounded-2xl p-8 transition-all duration-300",
        hover && "hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#E67E22]/20",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
