"use client";
import { useState } from "react";

const images = [
  "/img/foundation/Image_2.jpeg",
  "/img/foundation/Image_3.jpeg",
  "/img/foundation/Image_4.jpeg",
  "/img/foundation/Image_12.jpeg",
  "/img/foundation/Image_13.jpeg",
  "/img/Image_45.jpeg",
  "/img/Image_44.jpeg",
  "/img/Image_42.jpeg",
  "/img/Image_41.jpeg"
];

export default function SmallCardSlider() {
  const [current, setCurrent] = useState(0);

  const visibleCards = 3; // kitne cards ek time pe dikhane hain

  const next = () => {
    if (current < images.length - visibleCards) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Button */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10
        bg-black/40 text-white p-2 rounded-full"
      >
        ❮
      </button>

      {/* Slider Track */}
      <div
        className="flex gap-4 transition-transform duration-500"
        style={{
          transform: `translateX(-${current * 200}px)`,
        }}
      >
        {images.map((src, i) => (
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