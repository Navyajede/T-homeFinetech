import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { Menu, X } from "lucide-react";
import GetStartedMethod from "./GetStartedMethod";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGetStarted, setOpenGetStarted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  /* ===== SCROLL EFFECT ===== */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== CONTACT ===== */
  const handleContactClick = () => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "contact" } });
    }
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Financial Tools", path: "/financial-tools" },
    { label: "About", path: "/about" },
  ];

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-200/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="T-Home Logo"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full"
            />
            <span
              className={`font-semibold text-lg ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              T-HOME
            </span>
          </Link>

          {/* ===== DESKTOP MENU ===== */}
          <ul
            className={`hidden md:flex items-center gap-8 text-sm ${
              scrolled ? "text-gray-700" : "text-gray-300"
            }`}
          >
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`transition ${
                    scrolled ? "hover:text-black" : "hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <button
                onClick={handleContactClick}
                className="hover:opacity-80 transition"
              >
                Contact
              </button>
            </li>

            <li>
              <button
                onClick={() => setOpenGetStarted(true)}
                className="px-7 py-3 rounded-full bg-blue-600 text-white
                  font-semibold hover:bg-blue-700 transition shadow-md"
              >
                Get Started
              </button>
            </li>
          </ul>

          {/* ===== MOBILE TOGGLE ===== */}
          <button
            className={`md:hidden ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* ===== MOBILE MENU ===== */}
        {menuOpen && (
          <div className="md:hidden bg-[#020617] border-t border-white/10 px-6 py-6">
            <ul className="flex flex-col gap-6 text-gray-300 text-base">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li>
                <button
                  onClick={handleContactClick}
                  className="text-left hover:text-white transition"
                >
                  Contact
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setOpenGetStarted(true);
                  }}
                  className="w-full mt-2 px-6 py-4 rounded-full
                    bg-blue-600 text-white font-semibold
                    hover:bg-blue-700 transition"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* ===== GET STARTED MODAL ===== */}
      <GetStartedMethod
        open={openGetStarted}
        onClose={() => setOpenGetStarted(false)}
      />
    </>
  );
}
