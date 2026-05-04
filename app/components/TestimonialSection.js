"use client";

import Image from "next/image";

export default function TestimonialSection() {
  const testimonial = {
    name: "Byabang Hapo Dui",
    role: "Chairman",
    image: "/chairman.jpeg",
    text: "Sangcha Ajin Foundation is committed to empowering communities and creating opportunities for growth and development across Arunachal Pradesh.",
  };

  return (
    <section className="w-full py-8 px-4">

      {/* Card */}
      <div className="max-w-5xl mx-auto bg-gray-50 p-6 md:p-10 rounded-xl shadow-sm">

        {/* Flex Container */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

          {/* Left Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-green-500 flex-shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={300}
              height={300}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="text-center md:text-left">
            <div>
              <span className="block font-semibold text-gray-800 text-lg">
                {testimonial.name}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {testimonial.role}
              </span>
            </div>
            <p className="text-gray-600 italic  text-sm md:text-lg">
              “{testimonial.text}”
            </p>

            
          </div>

        </div>
      </div>

    </section>
  );
}