"use client";

import { useState, useEffect, useRef } from "react";

const images = [
  "/img/Image_1.jpeg",
  "/img/Image_7.jpeg",
  "/img/Image_8.jpeg",
  "/img/Image_9.jpeg",
  "/img/Image_10.jpeg",
  "/img/Image_11.jpeg",
  "/img/Image_12.jpeg",
  "/img/Image_2.jpeg",
  "/img/Image_3.jpeg",
  "/img/Image_4.jpeg",
  "/img/Image_5.jpeg",
  "/img/Image_6.jpeg",
];

// Duplicate for infinite effect
const loopImages = [...images, ...images];

export default function SmallCardSlider() {
  const [current, setCurrent] = useState(0);

  const intervalRef = useRef(null);

  const cardWidth = 196;

  // NEXT
  const next = () => {
    setCurrent((prev) => prev + 1);
  };

  // PREV
  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // AUTO SLIDE
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // RESET FOR INFINITE LOOP
  useEffect(() => {
    if (current >= images.length) {
      setTimeout(() => {
        setCurrent(0);
      }, 500);
    }
  }, [current]);

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      next();
    }, 3000);
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Left Button */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10
        bg-black/40 text-white p-2 rounded-full"
      >
        ❮
      </button>

      {/* Slider */}
      <div
        className="flex gap-4 transition-transform duration-500"
        style={{
          transform: `translateX(-${current * cardWidth}px)`,
        }}
      >
        {loopImages.map((src, i) => (
          <div
            key={i}
            className="min-w-[180px] h-[120px] rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={src}
              alt="card"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10
        bg-black/40 text-white p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
}