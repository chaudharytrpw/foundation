"use client";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Byabang Hapo Dui",
    role: "State Director",
    image: "https://i.pravatar.cc/100?img=5",
    text: "Sangcha Ajin Foundation is committed to empowering communities and creating opportunities for growth and development across Arunachal Pradesh.",
  },
  {
    id: 2,
    name: "Thupten Lhamu",
    role: "Miss Universe Arunachal Pradesh 2024",
    image: "https://i.pravatar.cc/100?img=6",
    text: "Winning this title has been a life-changing experience. I am proud to represent my state and be part of such a meaningful initiative.",
  },
  {
    id: 3,
    name: "Community Member",
    role: "Beneficiary",
    image: "https://i.pravatar.cc/100?img=7",
    text: "The foundation has helped improve education and opportunities in our area. Their work truly makes a difference.",
  },
  {
    id: 4,
    name: "Volunteer",
    role: "Supporter",
    image: "https://i.pravatar.cc/100?img=8",
    text: "Being part of Sangcha Ajin Foundation has been inspiring. The dedication towards social change is remarkable.",
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-16 px-4 text-center">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl text-green-500 font-semibold mb-2">
        Voices of Impact
      </h2>

      <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm md:text-base">
        Voices from our community and supporters
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
      <div className="max-w-5xl mx-auto bg-gray-50 p-6 md:p-10 rounded-xl shadow-sm">
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