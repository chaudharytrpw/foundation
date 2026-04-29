"use client";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Designer",
    image: "https://i.pravatar.cc/100?img=1",
    text: "The team was incredibly responsive and helped bring our vision to life beautifully.",
  },
  {
    id: 2,
    name: "David Kim",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/100?img=2",
    text: "Amazing experience! The product quality exceeded expectations.",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Marketing Lead",
    image: "https://i.pravatar.cc/100?img=3",
    text: "Professional, fast, and very detail-oriented team.",
  },
  {
    id: 4,
    name: "James Carter",
    role: "Engineer",
    image: "https://i.pravatar.cc/100?img=4",
    text: "Great communication and solid execution from start to finish.",
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-16  px-4  text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl text-green-500 font-semibold mb-2">
        Spreading Smiles, Changing Lives
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm md:text-base">
        Hear what our happy clients have to say about us
      </p>

      {/* Avatar Row */}
      <div className="flex justify-center items-center gap-3 md:gap-4 mb-10 flex-wrap">
        {testimonials.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActive(index)}
            className={`w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 transition-all duration-300 ${
              active === index
                ? "border-green-500 scale-110"
                : "border-gray-300 opacity-60"
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Testimonial Card */}
      <div className="max-w-5xl mx-auto bg-gray-50 p-6 md:p-10 rounded-xl shadow-sm relative">
        <p className="text-gray-600 italic mb-6 text-sm md:text-lg transition-all duration-300">
          “{testimonials[active].text}”
        </p>

        <div className="flex flex-col items-center">
          <span className="font-semibold text-gray-800">
            {testimonials[active].name}
          </span>
          <span className="text-sm text-gray-500">
            {testimonials[active].role}
          </span>
        </div>
      </div>
    </section>
  );
}