"use client";

import { motion } from "framer-motion";

export default function MethodologySection() {
  const steps = [
    {
      number: "01",
      title: "Upload",
      subtitle: "The Input",
      description:
        "Share your raw data securely. We support text, images, audio, and video across all Indic languages.",
      color: "from-white to-gray-300",
    },
    {
      number: "02",
      title: "AI + Human Intelligence",
      subtitle: "The Process",
      description:
        "Our AI accelerates annotation. Trained students verify. Domain experts review quality.",
      color: "from-blue-200 to-blue-400",
    },
    {
      number: "03",
      title: "Quality Assurance",
      subtitle: "The Check",
      description:
        "Multi-layer verification with 95%+ accuracy guaranteed. Real-time tracking.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      number: "04",
      title: "Delivery",
      subtitle: "The Output",
      description:
        "Receive clean, labeled datasets in your preferred format. Ready for training immediately.",
      color: "from-indigo-500 to-violet-600",
    },
  ];

  return (
    <section className="section-padding bg-[#050505] relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-display text-white mb-6 -tracking-[1%]">
            How VyaktAI Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans font-light">
            From raw data to AI-ready dataset in <span className="text-blue-500 font-medium">24-48 hours</span>.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative mb-20 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Step Number */}
                <div className="flex-shrink-0 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-2xl opacity-20 rounded-full`} />
                  <div
                    className="w-24 h-24 rounded-full border border-white/10 bg-[#0A0A0A] flex items-center justify-center shadow-xl relative z-10"
                  >
                    <span className="text-3xl font-light font-display text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:border-blue-500/30 transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-3xl font-light font-display text-white mb-2 -tracking-[1%]">
                      {step.title}
                    </h3>
                    <p className="text-blue-400 text-lg font-mono">
                      // {step.subtitle}
                    </p>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed font-sans font-light">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-12 top-24 bottom-[-80px] w-px bg-gradient-to-b from-blue-500/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
