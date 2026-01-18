"use client";

import { motion } from "framer-motion";

  export default function ProblemSection() {
  const problems = [
    {
      stat: "80%",
      title: "Time Wasted",
      text: "AI teams spend most of their time on data preparation, not model innovation.",
      color: "text-blue-400",
    },
    {
      stat: "Gap",
      title: "Regional Language Gap",
      text: "Quality labeled data in Hindi, Tamil, Telugu remains scarce and expensive.",
      color: "text-blue-200",
    },
    {
      stat: "Risk",
      title: "Quality Compromise",
      text: "Existing vendors lack cultural context and domain expertise for Indian data.",
      color: "text-white",
    },
  ];

  return (
    <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 -tracking-[1%] font-display">
            Indian AI Companies Face a <br className="hidden md:block" />
            <span className="text-gradient-blue glow-text">Data Bottleneck</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans font-light">
            Every AI model is only as good as its training data. But companies building AI for Bharat 
            struggle to find reliable, high-quality labeled datasets in regional languages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="text-center p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.04]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-6">
                <span className={`text-5xl md:text-5xl font-display font-medium ${problem.color} drop-shadow-2xl tracking-tight block mb-2`}>
                  {problem.stat}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">{problem.title}</h3>
              </div>
              <p className="text-lg text-gray-300 font-sans font-light leading-relaxed">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]">
            <div className="bg-[#050505] p-12 rounded-[22px]">
              <h3 className="text-3xl md:text-4xl font-display font-light text-white mb-6 -tracking-[1%]">
                The Vyakt Promise
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed font-sans font-light">
                We don't just label data; we validate reality. We turn raw, chaotic 
                information into <span className="font-medium text-blue-400">Vyakt</span>{" "}
                (Distinct & Clear) datasets.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
