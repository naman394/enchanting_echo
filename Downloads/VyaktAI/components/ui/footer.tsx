"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10">
      {/* Final CTA Section */}
      <div className="section-padding relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-display text-white mb-8 -tracking-[1%]">
              Start Building with <span className="text-blue-500">Better Data</span> Today
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-sans font-light">
              Join forward-thinking AI companies using VyaktAI to power their models with high-quality regional language training data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-10 py-5 bg-white text-black font-bold font-display rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Free Pilot
              </motion.button>
              <button className="px-10 py-5 glass text-white font-medium rounded-full text-xl border border-white/10 hover:bg-white/5 transition-all">
                Schedule a 15-min Call
              </button>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center mt-8 text-sm text-gray-400 font-sans font-light">
               <span className="flex items-center gap-2">✓ No credit card required</span>
               <span className="flex items-center gap-2">✓ Free pilot: 1,000 annotations</span>
               <span className="flex items-center gap-2">✓ 95% accuracy guarantee</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="border-t border-white/10 py-16 bg-[#020202]">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-12 text-left">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-2xl font-light font-display text-white mb-4 -tracking-[1%]">Vyakt<span className="text-blue-500">AI</span></h3>
              <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
                Making AI Clear for India. <br />
                Backed by NST Incubator.
              </p>
            </div>

            {/* Platform */}
            <div>
              <h4 className="text-white font-semibold font-display mb-6 tracking-wide">Platform</h4>
              <ul className="space-y-3 text-gray-500 text-sm font-sans font-light">
                <li className="hover:text-white cursor-pointer transition-colors">Data Labeling</li>
                <li className="hover:text-white cursor-pointer transition-colors">RLHF</li>
                <li className="hover:text-white cursor-pointer transition-colors">Generative AI</li>
                <li className="hover:text-white cursor-pointer transition-colors">Enterprise Security</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold font-display mb-6 tracking-wide">Company</h4>
              <ul className="space-y-3 text-gray-500 text-sm font-sans font-light">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold font-display mb-6 tracking-wide">Contact</h4>
              <a
                href="mailto:hello@vyaktai.com"
                className="text-blue-500 hover:text-blue-400 transition-colors text-sm font-medium font-sans"
              >
                hello@vyaktai.com
              </a>
              <p className="text-gray-600 text-xs mt-4 font-sans">
                Bengaluru, India
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs">
              © 2026 VyaktAI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-gray-600 text-xs hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="text-gray-600 text-xs hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
