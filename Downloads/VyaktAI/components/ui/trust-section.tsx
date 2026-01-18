"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Zap } from "lucide-react";

export default function TrustSection() {
  const features = [
    {
      icon: Lock, // Using existing icons for now, mapped best effort
      title: "India-First Approach",
      description: "Deep understanding of regional languages and cultural context. Our annotators are native speakers trained in content nuances.",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      icon: Shield,
      title: "Quality + Speed",
      description: "95%+ accuracy with 10x faster turnaround than traditional vendors. Proven through rigorous testing.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Zap,
      title: "Cost-Effective",
      description: "60% less expensive than global alternatives while maintaining enterprise-grade quality. Transparent pricing.",
      gradient: "from-white to-gray-400",
    },
    {
      icon: Shield, // Reusing Shield for Domain for now
      title: "Domain Expertise",
      description: "Specialized annotators with subject-matter knowledge in healthcare, finance, social media, and more.",
      gradient: "from-indigo-400 to-purple-500",
    },
  ];

  return (
    <section className="section-padding bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-display text-white mb-6 -tracking-[1%]">
            Why Indian AI Companies <br />
            <span className="text-blue-500">Choose VyaktAI</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans font-light">
            Trust built on cultural context, accuracy, and performance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-dark rounded-2xl p-8 h-full transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] bg-white/5 border border-white/10">
                {/* Icon with gradient background */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon size={32} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-light font-display text-white mb-4 -tracking-[1%]">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed font-sans font-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional trust badges */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-6 px-10 py-5 border border-white/10 bg-white/5 rounded-full backdrop-blur-md">
            <span className="text-gray-400 font-medium">Trusted by AI Teams at</span>
            <div className="flex gap-6 items-center opacity-70 grayscale">
              {/* Placeholder text for logos since we don't have SVGs yet */}
              <span className="text-xl font-bold text-white">StartupAI</span>
              <span className="text-xl font-bold text-white">DataCorp</span>
              <span className="text-xl font-bold text-white">TechFlow</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
