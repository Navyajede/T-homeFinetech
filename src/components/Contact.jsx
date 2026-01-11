import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 md:py-32 bg-[#050b1e] overflow-hidden"
    >
      {/* ===== Background Glow (STATIC → NO ANIMATION LAG) ===== */}
      <div className="absolute -left-40 top-1/3 w-[420px] sm:w-[500px] h-[420px] sm:h-[500px] bg-blue-500/20 blur-[160px] rounded-full" />
      <div className="absolute -right-40 bottom-0 w-[480px] sm:w-[600px] h-[480px] sm:h-[600px] bg-cyan-500/20 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-16 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white"
        >
          <p className="text-cyan-400 tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">
            CONTACT US
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Your Dream Home is <br />
            <span className="text-gray-300">Just a Loan Away!</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-lg mt-5 sm:mt-6">
            Turn your dream of owning a home into reality with our hassle-free
            home loan solutions. Get quick approval, flexible repayment options,
            and the best interest rates.
          </p>

          {/* ===== Image (LAZY LOADED) ===== */}
          <div className="mt-8 sm:mt-12 max-w-sm sm:max-w-md">
            <img
              src="/contact.jpeg"
              alt="Customer Support"
              loading="lazy"
              className="w-full rounded-2xl shadow-lg transition-transform hover:scale-[1.03]"
            />
          </div>
        </motion.div>

        {/* ================= RIGHT FORM ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10"
        >
          <form className="space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label className="text-xs text-gray-400 tracking-widest">
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="mt-2 w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 tracking-widest">
                  PHONE NUMBER
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="mt-2 w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-400 tracking-widest">
                YOUR EMAIL
              </label>
              <input
                type="email"
                placeholder="Email@example.com"
                className="mt-2 w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 tracking-widest">
                SELECT YOUR SERVICE
              </label>
              <select className="mt-2 w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400">
                <option className="bg-[#050b1e]">Home Loans</option>
                <option className="bg-[#050b1e]">Balance Transfer</option>
                <option className="bg-[#050b1e]">
                  Loan Against Property
                </option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-400 tracking-widest">
                MESSAGE
              </label>
              <textarea
                rows="4"
                placeholder="Message"
                className="mt-2 w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition text-white py-3.5 rounded-full font-semibold"
            >
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
