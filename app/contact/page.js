"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // yaha API connect kar sakte ho
    alert("Message sent successfully!");
  };

  return (
    <section className="w-full px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            We'd love to hear from you. Get in touch with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-gray-800">
              Get in Touch
            </h2>

            <p className="text-gray-600 text-sm">
              Sangcha Ajin Foundation is always open to collaborations, support,
              and community engagement.
            </p>

            <div className="text-sm text-gray-700 space-y-2">
              <p>📍 C-Sector, Itanagar, Papum Pare District</p>
              <p>Arunachal Pradesh, 791111, India</p>
              <p>📧 sangchaajin@gmail.com</p>
              <p>📞 +91 3603566397</p>
            </div>

            {/* Map (optional) */}
            <div className="mt-4">
              <iframe
                className="w-full h-48 rounded-lg"
                src="https://maps.google.com/maps?q=Arunachal%20Pradesh&t=&z=5&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-6 rounded-xl shadow-sm space-y-4"
          >
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
