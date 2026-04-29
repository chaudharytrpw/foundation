"use client";
import { useEffect, useState } from "react";

const images = [
  "/img/foundation/Image_2.jpeg",
  "/img/foundation/Image_3.jpeg",
  "/img/foundation/Image_4.jpeg",
  "/img/foundation/Image_12.jpeg",
  "/img/foundation/Image_13.jpeg"
];

export default function PremiumSlider() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hovered]);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div
      className="relative w-full h-[320px] md:h-[520px] overflow-hidden rounded-2xl group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Slides */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={src}
            alt="banner"
            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[4000ms]"
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20
        opacity-100 md:opacity-0 md:group-hover:opacity-100 transition
        bg-white/20 backdrop-blur-md text-white 
        p-3 rounded-full hover:bg-white/40"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20
        opacity-100 md:opacity-0 md:group-hover:opacity-100 transition
        bg-white/20 backdrop-blur-md text-white 
        p-3 rounded-full hover:bg-white/40"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              current === i
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}