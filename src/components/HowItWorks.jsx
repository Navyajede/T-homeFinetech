import { motion } from "framer-motion";
import {
  UserPlus,
  Sliders,
  Cpu,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    desc: "Quick onboarding with secure verification.",
  },
  {
    icon: Sliders,
    title: "Choose Service",
    desc: "Select smart financial tools tailored for you.",
  },
  {
    icon: Cpu,
    title: "Smart Processing",
    desc: "AI-driven and compliant processing engine.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Results",
    desc: "Accurate, certified & instant outcomes.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#020617] text-white py-20 sm:py-28 md:py-36 overflow-hidden">
      
      {/* ===== HEADING ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          How It <span className="text-cyan-400">Works</span>
        </h2>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-400 max-w-xl sm:max-w-2xl mx-auto">
          A seamless, transparent journey designed for modern finance.
        </p>
      </motion.div>

      {/* ===== FLOW ===== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 md:mt-28">

        {/* Static line (NO animation → no reflow) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px]
          bg-gradient-to-r from-cyan-400/40 to-blue-500/40"
        />

        {/* Cards wrapper (single observer) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-16"
        >
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full
                  bg-white/5 backdrop-blur-xl border border-white/10
                  flex items-center justify-center"
                >
                  {/* Glow (static, NOT animated) */}
                  <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl opacity-60" />

                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-cyan-300
                    drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                  />
                </div>

                {/* Card */}
                <div className="mt-6 sm:mt-8 bg-white/5 backdrop-blur-xl
                  border border-white/10 rounded-2xl
                  p-5 sm:p-6 w-full max-w-xs sm:max-w-none"
                >
                  <h3 className="text-base sm:text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
