"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DataGridBackground from "@/components/effects/data-grid-background";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black selection:bg-blue-500/30">
      <DataGridBackground />
      
      {/* Top Spotlight Source */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent blur-[120px] pointer-events-none" />
      
      {/* Center Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 pt-20">
        <motion.div
          className="mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm hover:border-blue-500/30 transition-colors cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">New: RLHF for Enterprise</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-[2.7rem] font-light leading-none md:leading-tight xl:leading-[80px] lg:text-6xl xl:text-7xl -tracking-[1%] font-display max-w-2xl xl:max-w-4xl text-balance text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white block">
              Making AI clear
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 pb-2">
              for India
            </span>
          </motion.h1>
          
          {/* Sub-headline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl leading-relaxed font-light text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We transform raw regional language content into high-quality training datasets that power India's AI applications.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-blue-400 blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Start Your Free Pilot
                <ArrowRight className="w-5 h-5 -mr-1 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button className="px-8 py-4 glass text-gray-300 hover:text-white font-medium rounded-full text-lg transition-all duration-300 border border-white/10 hover:border-white/20 hover:bg-white/5">
              See How It Works
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
