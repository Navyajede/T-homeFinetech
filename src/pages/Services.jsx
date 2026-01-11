import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    title: "Home Loans",
    desc: "Get the best interest rates for your dream home with our hassle-free home loan processing.",
    img: "/services/home-loan.jpg",
  },
  {
    title: "Personal Loans",
    desc: "Quick approvals and flexible repayment options for your personal financial needs.",
    img: "/services/personal-loan.jpg",
  },
  {
    title: "Loan Against Property",
    desc: "Unlock the value of your property to fund your business or personal needs with competitive rates.",
    img: "/services/property-loan.jpg",
  },
  {
    title: "Mortgage Loan",
    desc: "Flexible mortgage solutions tailored to your unique financial requirements.",
    img: "/services/mortgage-loan.jpg",
  },
  {
    title: "Balance Transfer",
    desc: "Reduce your EMI burden by transferring your existing high-interest loans to us.",
    img: "/services/balance-transfer.jpg",
  },
  {
    title: "ITR Filing",
    desc: "Expert assistance for accurate and timely Income Tax Return filing for individuals and businesses.",
    img: "/services/itr.jpg",
  },
  {
    title: "Company Registration",
    desc: "End-to-end support for registering your new company, from documentation to certification.",
    img: "/services/company.jpg",
  },
  {
    title: "GST Registration and Filing",
    desc: "Reliable and efficient GST registration and filing services to ensure your business remains compliant.",
    img: "/services/gst.jpg",
  },
  {
    title: "UDYAM / MSME Registration",
    desc: "Gain official recognition and access benefits like subsidies and exemptions for your business.",
    img: "/services/msme.jpg",
  },
  {
    title: "Food License Registration",
    desc: "Mandatory FSSAI license registration simplified so you can focus on serving your customers.",
    img: "/services/fssai.jpg",
  },
  {
    title: "PAN & Aadhar Card Linking",
    desc: "Quick and mandatory linking of your PAN with Aadhaar to avoid penalties and ensure compliance.",
    img: "/services/pan-aadhar.jpg",
  },
];

export default function Services() {
  return (
    <div className="bg-[#020617] min-h-screen text-white">
      <Navbar />

      {/* ===== HEADER ===== */}
      <section className="pt-32 pb-16 text-center px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Our <span className="text-blue-500">Services</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Comprehensive financial solutions tailored for your personal and business growth needs.
        </p>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ===== SERVICE CARD ===== */
function ServiceCard({ title, desc, img }) {
  return (
    <div
      className="group bg-[#0b1220] rounded-2xl overflow-hidden
      border border-white/10 hover:border-blue-500/40
      transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover
          transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-[220px]">
        <h3 className="text-lg font-semibold mb-2 text-white">
          {title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed flex-grow">
          {desc}
        </p>

        <button className="mt-4 text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2">
          Learn More <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
}
