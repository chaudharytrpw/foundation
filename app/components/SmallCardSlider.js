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
  "/img/image_54.jpeg",
  "/img/image_53.jpeg",
  "/img/image_52.jpeg",
  "/img/image_51.jpeg",
];

// Split into 2 rows
const middle = Math.ceil(images.length / 2);

const firstRow = images.slice(0, middle);
const secondRow = images.slice(middle);

// Duplicate for infinite loop
const loopRow1 = [...firstRow, ...firstRow];
const loopRow2 = [...secondRow, ...secondRow];

export default function SmallCardSlider() {
  const [current, setCurrent] = useState(0);

  const intervalRef = useRef(null);

  const cardWidth = 196;

  // NEXT
  const next = () => {
    setCurrent((prev) => prev + 1);
  };

  // AUTO START
  const startAutoSlide = () => {
    stopAutoSlide();

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 2500);
  };

  // STOP
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // START ON LOAD
  useEffect(() => {
    startAutoSlide();

    return () => stopAutoSlide();
  }, []);

  // INFINITE LOOP RESET
  useEffect(() => {
    if (current >= firstRow.length) {
      setTimeout(() => {
        setCurrent(0);
      }, 500);
    }
  }, [current]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className="flex flex-col gap-4">

        {/* ROW 1 */}
        <div
          className="flex gap-4 transition-transform duration-500"
          style={{
            transform: `translateX(-${current * cardWidth}px)`,
          }}
        >
          {loopRow1.map((src, i) => (
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

        {/* ROW 2 */}
        <div
          className="flex gap-4 transition-transform duration-500"
          style={{
            transform: `translateX(-${current * cardWidth}px)`,
          }}
        >
          {loopRow2.map((src, i) => (
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
      </div>
    </div>
  );
}