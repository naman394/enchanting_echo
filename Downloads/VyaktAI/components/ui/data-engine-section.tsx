"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, MessageSquareText, Mic, Box, Scan, Activity, Code, Layers } from "lucide-react";

const tabs = [
  {
    id: "vision",
    label: "Visual Moderation",
    icon: Eye,
    description: "Detect NSFW, Violence, Gore, and Text-in-Image policy violations with high precision.",
  },
  {
    id: "nlp",
    label: "Language Safety",
    icon: MessageSquareText,
    description: "Hate speech, harassment, and misinformation detection in code-mixed Hinglish & regional languages.",
  },
  {
    id: "audio",
    label: "Audio Intelligence",
    icon: Mic,
    description: "Flag toxic voice chats, bullying, and illegal content in real-time audio streams.",
  },
];

export default function DataEngineSection() {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <section className="section-padding bg-black border-t border-white/5 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-display text-white mb-6 -tracking-[1%]">
            The Vyakt <span className="text-blue-500">Data Engine</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans font-light">
            Interactive, multi-modal workflows designed for <span className="text-white">Trust & Safety</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative p-5 rounded-xl text-left transition-all duration-300 border group overflow-hidden ${
                  activeTab === tab.id
                    ? "bg-white/[0.03] border-blue-500/30 shadow-[0_0_20px_-10px_rgba(59,130,246,0.2)]"
                    : "bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5"
                }`}
              >
                {/* Active Indicator Line */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500"
                  />
                )}

                <div className="flex items-center gap-3 mb-2 relative z-10">
                  <div
                    className={`transition-colors duration-300 ${
                      activeTab === tab.id ? "text-blue-400" : "text-gray-500 group-hover:text-gray-300"
                    }`}
                  >
                    <tab.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3
                    className={`text-lg font-display transition-colors duration-300 ${
                      activeTab === tab.id ? "text-white font-medium" : "text-gray-400 font-normal"
                    }`}
                  >
                    {tab.label}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 font-sans font-light pl-8 leading-relaxed">
                  {tab.description}
                </p>
              </button>
            ))}
          </div>

          {/* Right Column: Visualization Window */}
          <div className="lg:col-span-8">
            <div className="relative h-[500px] w-full bg-[#050505] rounded-xl border border-white/10 overflow-hidden shadow-2xl ring-1 ring-white/5">
              {/* Window Header */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-white/[0.02] border-b border-white/5 flex items-center px-4 justify-between z-20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="px-2 py-0.5 rounded text-[10px] font-mono text-gray-500 bg-white/5 border border-white/5 uppercase tracking-widest flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   {activeTab}_mod_stream
                </div>
              </div>

              {/* Dynamic Content */}
              <div className="p-6 pt-16 h-full w-full">
                <AnimatePresence mode="wait">
                  {activeTab === "vision" && <VisionDemo key="vision" />}
                  {activeTab === "nlp" && <NLPDemo key="nlp" />}
                  {activeTab === "audio" && <AudioDemo key="audio" />}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Internal Visualization Components --- */

function VisionDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full relative group"
    >
      {/* Simulated Blurred Content Background */}
      <div className="absolute inset-0 bg-neutral-900 overflow-hidden rounded-lg border border-white/10 flex items-center justify-center">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center blur-md opacity-20" />
         
         {/* Animated Grid Background */}
         <div className="absolute inset-0 z-0">
            <svg className="w-full h-full opacity-20" width="100%" height="100%">
               <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
               </defs>
               <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
         </div>

         <div className="z-10 text-white/10 font-display text-6xl font-black tracking-tighter mix-blend-overlay">
            ANALYZING
         </div>
      </div>
      
      {/* Overlay - Target Lock Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
         {/* The Lock-On Reticle */}
         <motion.div 
            initial={{ width: "80%", height: "80%", opacity: 0, borderColor: "rgba(255, 255, 255, 0.5)" }}
            animate={{ 
               width: "50%", 
               height: "60%", 
               opacity: 1,
               borderColor: "rgb(239, 68, 68)", // Red when locked
               backgroundColor: "rgba(239, 68, 68, 0.1)"
            }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
            className="border-2 rounded border-dashed relative flex items-center justify-center"
         >
            {/* Corner Brackets */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-red-500" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-red-500" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-red-500" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-red-500" />

            {/* Center Pulse */}
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div 
                  className="w-full h-[1px] bg-red-500 absolute"
                  animate={{ rotate: [0, 180] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
               <motion.div 
                   className="h-full w-[1px] bg-red-500 absolute"
                   animate={{ rotate: [0, 180] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
               <Activity size={48} className="text-red-500 animate-pulse" />
            </div>

            {/* Label */}
            <motion.div 
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1 }}
               className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] border border-red-400 whitespace-nowrap"
            >
              Violation Detected: Violence (99.8%)
            </motion.div>
         </motion.div>
      </div>
      
      {/* Stats Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
        <div className="font-mono text-[10px] text-gray-500 space-y-1">
           <div>LATENCY: 12ms</div>
           <div>FRAME: 2048x1080</div>
           <div>MODEL: RESNET_50_V2</div>
        </div>
        
        <div className="bg-black/90 backdrop-blur border border-red-500/30 px-4 py-2 rounded-lg font-mono text-xs text-red-400">
          STATUS: <span className="font-bold animate-pulse text-red-500">BLOCKED</span>
        </div>
      </div>
    </motion.div>
  );
}

function NLPDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full flex flex-col gap-6 font-mono text-sm"
    >
        {/* Input Block */}
        <div className="group relative">
           <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-white/10 group-hover:bg-blue-500/50 transition-colors" />
           <div className="text-xs text-gray-500 mb-2 font-sans tracking-wide">INPUT_STREAM_01 (HINGLISH)</div>
           <div className="p-4 bg-white/[0.03] rounded border border-white/5 text-gray-300 font-light">
             "Oye <span className="bg-red-500/20 text-red-400 px-1 rounded animate-pulse">******</span>, tu bahar mil. Tera <span className="bg-red-500/20 text-red-400 px-1 rounded animate-pulse">khel khatam</span> kar dunga."
           </div>
        </div>

        {/* Output JSON */}
        <div className="relative flex-grow bg-[#0A0A0A] rounded-lg border border-white/10 overflow-hidden font-mono text-xs leading-relaxed p-4 shadow-inner">
           {/* Line Numbers */}
           <div className="absolute left-0 top-0 bottom-0 w-8 bg-white/[0.02] border-r border-white/5 flex flex-col items-end pr-2 pt-4 text-gray-700 select-none">
             {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <div key={n}>{n}</div>)}
           </div>
           
           <div className="pl-10 h-full overflow-y-auto custom-scrollbar">
             <div className="text-gray-500">{"// automated_classification_result"}</div>
             <div className="text-yellow-500">{"{"}</div>
             <div className="pl-4">
               <span className="text-purple-400">"safety_check"</span>: <span className="text-yellow-500">{"{"}</span>
             </div>
             <div className="pl-8">
               <span className="text-blue-400">"flagged"</span>: <span className="text-red-400">true</span>,
             </div>
             <div className="pl-8">
               <span className="text-blue-400">"categories"</span>: <span className="text-yellow-500">{"{"}</span>
             </div>
             <div className="pl-12">
               <span className="text-blue-400">"harassment"</span>: <span className="text-red-400">true</span>,
             </div>
             <div className="pl-12">
               <span className="text-blue-400">"violence"</span>: <span className="text-red-400">true</span>
             </div>
             <div className="pl-8 text-yellow-500">{"},"}</div>
             <div className="pl-8">
               <span className="text-blue-400">"risk_score"</span>: <span className="text-orange-400">0.98</span>
             </div>
             <div className="pl-4 text-yellow-500">{"},"}</div>
             <div className="pl-4">
               <span className="text-purple-400">"action"</span>: <span className="text-green-400">"BAN_USER_IMMEDIATE"</span>
             </div>
             <div className="text-yellow-500">{"}"}</div>
           </div>
           
           {/* Status Badge */}
           <div className="absolute top-4 right-4 px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-[10px] text-red-500 font-bold uppercase tracking-wider flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
             High Risk
           </div>
        </div>
    </motion.div>
  );
}

function AudioDemo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full flex flex-col justify-center items-center gap-8"
    >
       {/* Frequency Visualization */}
       <div className="w-full h-32 flex items-end justify-center gap-1">
          {[...Array(40)].map((_, i) => (
             <motion.div
               key={i}
               className={`w-1 rounded-t-full ${
                  i > 15 && i < 25 ? "bg-red-500" : "bg-red-500/30"
               }`}
               animate={{ 
                  height: [10, Math.random() * 80 + 20, 10],
                  opacity: [0.3, 1, 0.3]
               }}
               transition={{
                  duration: 0.2 + Math.random() * 0.2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: i * 0.02,
                  ease: "easeInOut"
               }}
             />
          ))}
       </div>
       
       {/* Transcription Box */}
       <div className="w-full max-w-md">
          <div className="flex items-center justify-between text-xs uppercase tracking-widest text-red-500 mb-2 font-bold opacity-80">
             <span>Live Transcription</span>
             <span className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> REC</span>
          </div>
          
          <div className="p-6 bg-white/[0.03] border-l-2 border-red-500 rounded-r-lg">
             <p className="text-lg text-gray-300 font-light leading-relaxed">
                "...sabko <span className="text-red-400 font-medium bg-red-500/10 px-1 rounded">********</span> kar do jaldi se..."
             </p>
             <div className="mt-4 flex items-center gap-4 text-xs">
                <div className="px-2 py-1 bg-red-500/20 text-red-400 rounded">TOXICITY: 98%</div>
                <div className="px-2 py-1 bg-white/5 text-gray-400 rounded">EMOTION: ANGER</div>
                <div className="text-gray-600 ml-auto">00:04:12</div>
             </div>
          </div>
       </div>
    </motion.div>
  );
}
