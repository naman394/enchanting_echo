"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function DataGridBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Floating bounding boxes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/20 rounded-lg"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-emerald-500/20 rounded-lg"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-40 h-28 border-2 border-blue-400/20 rounded-lg"
        animate={{
          x: [0, 25, 0],
          y: [0, 15, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );
}
