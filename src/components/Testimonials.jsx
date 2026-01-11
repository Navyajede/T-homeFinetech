import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const testimonials = [
  {
    text: `Dear Mr. Ravinder, This is regarding my home loan for the flat purchased at SVC Indraprastha.
    The entire loan process was handled smoothly and professionally.`,
    name: "Client – Bangalore",
    img: "/client1.jpeg",
  },
  {
    text: `Your assistance in applying, processing, and disbursing my housing loan was amazing.
    Everything was clearly explained and handled efficiently.`,
    name: "Client – Hyderabad",
    img: "/client2.jpeg",
  },
  {
    text: `I had a wonderful and seamless experience. Documentation and bank coordination
    was handled without any hassle.`,
    name: "Client – Chennai",
    img: "/client3.jpeg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // ✅ calculate once
  const isMobile = useMemo(() => window.innerWidth < 640, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 sm:py-28 md:py-36 bg-[#050b1e] overflow-hidden">

      {/* 🌌 STATIC BACKGROUND GLOW (NO animation) */}
      <div className="absolute -left-40 top-1/3 w-[420px] sm:w-[500px] h-[420px] sm:h-[500px]
        bg-blue-500/20 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="absolute -right-40 bottom-0 w-[480px] sm:w-[600px] h-[480px] sm:h-[600px]
        bg-cyan-500/20 blur-[160px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">

        {/* Heading */}
        <p className="text-cyan-400 tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">
          TESTIMONIALS
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Trusted by Happy Clients
        </h2>

        {/* Cards */}
        <div className="relative mt-16 sm:mt-20 md:mt-24
          flex flex-col sm:flex-row justify-center items-center
          gap-10 sm:gap-8"
        >
          {testimonials.map((item, index) => {
            const isActive = index === active;

            return (
              <motion.div
                key={index}
                animate={{
                  scale: isActive ? (isMobile ? 1 : 1.12) : 0.92,
                  opacity: isActive ? 1 : 0.45,
                  y: isActive ? -16 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ willChange: "transform, opacity" }}
                className={`relative w-full max-w-[320px] sm:max-w-[340px] md:max-w-[380px]
                  bg-white/5 backdrop-blur-lg border border-white/10
                  rounded-3xl p-6 sm:p-7 md:p-8 text-left
                  ${isActive ? "z-20" : "z-10"}`}
              >

                {/* Active Glow (lighter blur) */}
                {isActive && (
                  <div className="absolute inset-0 rounded-3xl
                    bg-gradient-to-br from-cyan-500/25 to-blue-500/25
                    blur-xl pointer-events-none"
                  />
                )}

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mb-5 sm:mb-6
                    rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30
                    flex items-center justify-center border border-cyan-400/30"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="text-cyan-300"
                    >
                      <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                      <path d="M9 11l2 2 4-4" />
                    </svg>
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {item.text}
                  </p>

                  {/* Client */}
                  <div className="flex items-center gap-4 mt-6 sm:mt-8">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      className="w-11 h-11 sm:w-12 sm:h-12
                        rounded-full border border-cyan-400/40 object-cover"
                    />
                    <p className="font-semibold text-sm">
                      {item.name}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
