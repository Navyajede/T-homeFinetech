import { Calculator, BarChart3, TrendingUp } from "lucide-react";

const tools = [
  {
    title: "EMI Calculator",
    desc: "Calculate your monthly EMI for Home, Personal, or Car loans with our easy-to-use tool.",
    icon: <Calculator size={28} />,
  },
  {
    title: "CIBIL Score Checker",
    desc: "Check your credit score instantly and get insights on how to improve it.",
    icon: <BarChart3 size={28} />,
  },
  {
    title: "Investment Planner",
    desc: "Plan your investments with our SIP and Lumpsum calculators.",
    icon: <TrendingUp size={28} />,
  },
];

export default function FinancialTools() {
  return (
    <main className="pt-32 bg-[#020617] min-h-screen">
      {/* ===== PAGE CONTENT ===== */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Financial <span className="text-blue-500">Tools</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Smart calculators and tools to help you make informed financial
              decisions.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#0f172a] to-[#020617]
                border border-white/10 rounded-2xl p-8
                hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10
                transition duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-600/20
                  flex items-center justify-center text-blue-500 mb-6">
                  {tool.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tool.desc}
                </p>

                {/* Learn more */}
                <div className="mt-6 text-blue-500 text-sm flex items-center gap-2
                  group-hover:gap-3 transition-all">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
