import { X } from "lucide-react";
import { useState } from "react";

export default function GetStartedMethod({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Request submitted successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center px-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold text-center">
          Get Started with T-Home
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Tell us what you need, and our experts will guide you.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg"
            />
            <input
              name="phone"
              required
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg"
            />
          </div>

          <input
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className="border px-4 py-3 rounded-lg w-full"
          />

          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="border px-4 py-3 rounded-lg w-full"
          >
            <option value="">Select a service</option>
            <option>Financial Consulting</option>
            <option>Investment Planning</option>
            <option>Tax Advisory</option>
          </select>

          <textarea
            name="message"
            rows="4"
            placeholder="Any specific requirements?"
            value={formData.message}
            onChange={handleChange}
            className="border px-4 py-3 rounded-lg w-full"
          />

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
 