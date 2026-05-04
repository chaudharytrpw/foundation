"use client";
import { useState } from "react";

export default function TestimonialSection() {
  const testimonial = {
    name: "Byabang Hapo Dui",
    role: "Chairman",
    image: "/chairman.jpeg", // slightly higher size
    text: "Sangcha Ajin Foundation is committed to empowering communities and creating opportunities for growth and development across Arunachal Pradesh.",
  };

  return (
    <section className="w-full py-16 px-4 text-center">
      
      

      {/* Single Avatar (Bigger) */}
      <div className="flex justify-center mb-10">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-green-500">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-5xl mx-auto bg-gray-50 p-6 md:p-10 rounded-xl shadow-sm">
        <p className="text-gray-600 italic mb-6 text-sm md:text-lg">
          “{testimonial.text}”
        </p>

        <div className="flex flex-col items-center">
          <span className="font-semibold text-gray-800">
            {testimonial.name}
          </span>
          <span className="text-sm text-bold text-gray-500">
            {testimonial.role}
          </span>
        </div>
      </div>

    </section>
  );
}