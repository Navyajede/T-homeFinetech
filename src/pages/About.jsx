import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-[#020617] text-white">

      {/* ================= HERO / WHY TRUST US ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 tracking-widest mb-4 uppercase">
            About Us
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Why Thousands Trust Us <br />
            <span className="text-cyan-400">for Their Home Loans?</span>
          </h1>

          <p className="text-gray-400 mb-8 leading-relaxed">
            At T-Home, we are redefining how people find, design,
            and secure their dream homes. With a customer-first
            approach, we bring together real estate expertise,
            modern interiors, and reliable financial services
            under one roof.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li>✔ Personalized Loan Plans</li>
            <li>✔ Lowest Interest Rates</li>
            <li>✔ Minimal Documentation</li>
            <li>✔ Expert Assistance</li>
          </ul>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6"
        >
          <img
            src="illustration.jpeg"
            alt="Home Loan Illustration"
            className="w-full"
          />
        </motion.div>
      </section>

      {/* ================= TRUSTED MINDS ================= */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gray-400 uppercase tracking-widest mb-3">
              Trusted Minds
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Faces Behind Our Success
            </h2>

            <p className="text-gray-400">
              Experienced specialists guiding you with care and expertise.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-12">

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0b0b0b] rounded-3xl p-10 text-center shadow-2xl"
            >
              <div className="flex justify-center mb-6">
                <img
                  src="/ravinder.png"
                  alt="Ravinder Reddy"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-1">
                Ravinder Reddy Attapuram
              </h3>

              <p className="text-blue-500 text-sm font-semibold uppercase mb-6">
                Founder & CEO
              </p>

              <p className="text-gray-400 leading-relaxed">
                Entrepreneur, strategist, and changemaker leading T-Home
                towards a future where finance is transparent, easy,
                and empowering for every individual and business.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#0b0b0b] rounded-3xl p-10 text-center shadow-2xl"
            >
              <div className="flex justify-center mb-6">
                <img
                  src="/pratheek.png"
                  alt="Pratheek Reddy"
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-1">
                K C Pratheek Reddy
              </h3>

              <p className="text-blue-500 text-sm font-semibold uppercase mb-6">
                Co-Founder & CTO
              </p>

              <p className="text-gray-400 leading-relaxed">
                The tech visionary behind T-Home’s digital transformation.
                Leads platform innovation and fintech initiatives to
                deliver seamless customer experiences.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= DPIIT SECTION ================= */}
      <section className="bg-black py-20 text-center">
        <p className="text-gray-400 tracking-widest mb-6">
          OFFICIALLY RECOGNIZED. NATIONALLY TRUSTED.
        </p>

        <img
          src="/dpiit.jpeg"
          alt="DPIIT Certified"
          className="mx-auto max-w-md"
        />
      </section>

    </div>
  );
}
