import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  { q: "What services does T-home offer?", a: "Home, business & regulatory services." },
  { q: "How do I apply for a loan online?", a: "Fill our form & our team contacts you." },
  { q: "Are the services safe?", a: "Yes, fully compliant & transparent." },
  { q: "Do you offer business services?", a: "Yes, GST, ITR, registrations & more." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative py-20 md:py-28 bg-[#050b1e] overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Got Questions? <br />
            <span className="text-gray-300">We’ve Got Answers</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
            Common questions about our services and process.
          </p>

          <div className="mt-10 max-w-xs sm:max-w-sm mx-auto lg:mx-0">
            <img src="/FAQ.png" alt="FAQ" className="w-full" />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((item, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="bg-white/5 border border-white/10 rounded-xl p-5 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h4 className="text-white text-sm sm:text-base">
                  {item.q}
                </h4>
                <span className="text-xl text-white">
                  {open === i ? "−" : "+"}
                </span>
              </div>

              {open === i && (
                <p className="text-gray-400 mt-3 text-sm">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
