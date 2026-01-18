"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";
import { Eye, Brain, Sparkles, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Computer Vision",
      subtitle: "The Eyes",
      icon: Eye,
      services: [
        "2D/3D Bounding Boxes",
        "Semantic Segmentation",
        "LiDAR Annotation",
      ],
      target: "Autonomous vehicles, Drones, Retail AI",
    },
    {
      title: "Natural Language Processing",
      subtitle: "The Brain",
      icon: Brain,
      services: [
        "RLHF (Reinforcement Learning from Human Feedback)",
        "Sentiment Analysis",
        "Entity Extraction (NER)",
      ],
      target: "LLMs, Chatbots, Legal Tech",
    },
    {
      title: "Generative AI Evaluation",
      subtitle: "The Guardian",
      icon: Sparkles,
      services: [
        "Fact-checking model outputs",
        "Red-teaming (Safety testing)",
        "Quality Assurance",
      ],
      target: "AI Safety, Enterprise AI",
    },
  ];

  return (
    <section className="section-padding bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-display text-white mb-6 -tracking-[1%]">
            Comprehensive <span className="text-gradient-blue">Data Infrastructure</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans font-light">
            End-to-end solutions covering the entire AI development lifecycle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlowCard key={index} className="flex flex-col h-full p-8" glowColor="rgba(59, 130, 246, 0.3)">
              <div className="text-blue-500 mb-6 bg-blue-500/10 p-4 rounded-lg w-fit">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-light font-display text-white mb-2 -tracking-[1%]">
                {service.title}
              </h3>
              
              <p className="text-blue-400 text-sm font-medium font-mono mb-6 flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-500 rounded-full" /> {service.subtitle}
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {service.services.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">
                      <Check size={16} />
                    </span>
                    <span className="text-gray-300 text-sm font-sans font-light">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-mono">Target Industries</p>
                <p className="text-sm text-gray-300 font-sans font-light">
                  {service.target}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

