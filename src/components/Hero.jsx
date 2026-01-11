import { motion } from "framer-motion";
import { lazy, Suspense, useState } from "react";
import GetStartedMethod from "./GetStartedMethod";

const StarsBackground = lazy(() => import("./StarsBackground"));

export default function Hero() {
  const [openGetStarted, setOpenGetStarted] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-[#020617] text-white overflow-hidden">
        
        {/* ⭐ Stars */}
        <Suspense fallback={null}>
          <StarsBackground />
        </Suspense>

        {/* ===== GLOW BLOBS ===== */}
        <div className="absolute -top-40 -left-40 w-[360px] sm:w-[420px] md:w-[520px]
          h-[360px] sm:h-[420px] md:h-[520px]
          rounded-full bg-blue-600/20 blur-3xl animate-pulse-slow z-0"
        />

        <div className="absolute top-1/3 -right-40 w-[420px] sm:w-[520px] md:w-[650px]
          h-[420px] sm:h-[520px] md:h-[650px]
          rounded-full bg-cyan-500/20 blur-3xl animate-pulse-slower z-0"
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-28 sm:pt-32">

          {/* HEADINGS */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light"
          >
            The Future
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mt-2"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              of Finance.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl
              max-w-xl md:max-w-2xl mt-6 sm:mt-8"
          >
            Your way for the digital world with T-HOME.
          </motion.p>

          {/* ===== BUTTONS ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6
              mt-10 sm:mt-14 w-full sm:w-auto"
          >
            {/* GET STARTED */}
            <button
              onClick={() => setOpenGetStarted(true)}
              className="px-10 py-4 rounded-full
                bg-blue-600 text-white font-semibold text-lg
                hover:bg-blue-700 transition"
            >
              Get Started
            </button>

            <button
              className="px-8 py-4 rounded-full
                border border-gray-600 text-gray-300
                hover:border-white hover:text-white transition"
            >
              Learn More
            </button>
          </motion.div>

          {/* ===== STATS ===== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-20 sm:mt-28 md:mt-32 w-full max-w-5xl
              bg-white/5 backdrop-blur-xl border border-white/10
              rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14
              grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12"
          >
            {[
              { value: "5k+", label: "Satisfied Clients" },
              { value: "95%", label: "Success Rate" },
              { value: "10+", label: "Years Experience" },
              { value: "100%", label: "Certified Experts" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  {item.value}
                </h3>
                <p className="text-sm sm:text-base tracking-widest
                  text-gray-400 mt-3 uppercase"
                >
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* TRUST TEXT */}
          <p className="mt-20 sm:mt-28 text-gray-500
            tracking-widest text-xs sm:text-sm"
          >
            OFFICIALLY RECOGNIZED. NATIONALLY TRUSTED.
          </p>

          {/* DPIIT IMAGE */}
          <div className="mt-10 sm:mt-14 flex justify-center">
            <img
              src="/dpiit.jpeg"
              alt="DPIIT Certified"
              loading="lazy"
              decoding="async"
              className="h-20 sm:h-24 md:h-36 opacity-90"
            />
          </div>
        </div>
      </section>

      {/* ===== GET STARTED MODAL (OUTSIDE SECTION) ===== */}
      <GetStartedMethod
        open={openGetStarted}
        onClose={() => setOpenGetStarted(false)}
      />
    </>
  );
}
