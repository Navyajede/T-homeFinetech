import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050b1e] text-gray-300">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-20 pb-16
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ================= BRAND ================= */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/logo.png"
              alt="T-Home Logo"
              className="w-12 h-12 object-contain"
            />
            <h3 className="text-xl font-semibold text-white">
              T-HOME
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            T-HOME provides reliable financial solutions including Home Loans,
            Business Loans, and Regulatory Services with complete transparency.
          </p>

          <div className="flex gap-5 mt-6">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <Icon
                key={i}
                className="w-5 h-5 text-gray-400 hover:text-white transition cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h4 className="text-white font-semibold mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              "Home",
              "About Us",
              "Services",
              "Financial Tools",
              "Contact Us",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h4 className="text-white font-semibold mb-5">
            Contact Info
          </h4>

          <div className="space-y-5 text-sm">
            <InfoItem icon={Phone} title="Phone" value="+91 7032183836" />
            <InfoItem icon={Mail} title="Email" value="info@thome.co.in" />
            <InfoItem
              icon={MapPin}
              title="Address"
              value="Quthbullapur Village, Hyderabad – 500055"
            />
          </div>
        </div>

        {/* ================= SUBSCRIBE ================= */}
        <div>
          <h4 className="text-white font-semibold mb-5">
            Subscribe
          </h4>

          <p className="text-sm text-gray-400 mb-4">
            Get updates and offers directly to your inbox.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-white/5 border border-white/10 rounded-lg
              px-4 py-3 text-sm text-white placeholder-gray-400
              focus:outline-none focus:border-blue-500"
          />

          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700
            transition text-white font-medium py-3 rounded-lg">
            Subscribe Now
          </button>

          <p className="text-xs text-gray-500 mt-3">
            * We never share your email
          </p>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-6
          flex flex-col sm:flex-row items-center
          justify-between gap-4 text-sm text-gray-500 text-center sm:text-left">

          <p>
            © {new Date().getFullYear()} T-Home. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}

/* ================= SMALL COMPONENT ================= */
function InfoItem({ icon: Icon, title, value }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="p-2 rounded-lg bg-white/5 shrink-0">
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <div>
        <p className="text-white font-medium">{title}</p>
        <p className="text-gray-400 leading-relaxed">{value}</p>
      </div>
    </div>
  );
}
