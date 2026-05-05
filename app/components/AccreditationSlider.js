"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const data = [
  {
    title: "Guidestar India Platinum",
    desc: "Awarded the highest level of transparency accreditation for consistently sharing detailed financial, programmatic, and governance information with the public.",
    img: "/certificates/FOUNDATION001.png",
  },
  {
    title: "CAF International",
    desc: "Successfully passed rigorous due diligence processes, ensuring compliance with global standards for accountability, governance, and impact.",
    img: "/certificates/FOUNDATION002.png",
  },
  {
    title: "UN ECOSOC",
    desc: "Recognized with Special Consultative Status, enabling active participation in United Nations discussions and contributing to global policy development.",
    img: "/certificates/FOUNDATION003.png",
  },
  {
    title: "UN ECOSOC",
    desc: "Represents additional achievements and initiatives focused on community development, innovation, and sustainable impact across various sectors.",
    img: "/certificates/FOUNDATION005.png",
  },
 
];

export default function AccreditationSlider() {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const intervalRef = useRef(null);

  // ✅ Responsive
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = data.length - itemsPerView;

  // ✅ Auto Slide
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [maxIndex]);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
  };

  const stopAutoSlide = () => clearInterval(intervalRef.current);

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl text-green-500 font-bold text-center mb-8">
        Empanelment & Accreditations
      </h2>

      <div
        className="relative overflow-hidden"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * (100 / itemsPerView)}%)`,
          }}
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="px-3"
              style={{ minWidth: `${100 / itemsPerView}%` }}
            >
              <div className="rounded-2xl p-5 h-full flex flex-col items-center  hover:shadow-xl transition">
                
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-36 object-contain mb-2"
                />

                {/* Title */}
                <h3 className="font-semibold text-green-500 text-lg mb-1 text-center">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm text-center">
                  {item.desc}
                </p>

                {/* Link */}
                <Link
                  href="/awards"
                  className="mt-2 text-green-600 text-sm underline hover:text-green-800 transition"
                >
                  More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons (optional) */}
        {/* 
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full"
        >
          ▶
        </button> 
        */}
      </div>
    </div>
  );
}