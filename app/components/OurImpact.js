"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 20, suffix: "+", title: "LAC", desc: "children and their families are impacted every year" },
  { number: 2000, suffix: "+", title: "VILLAGES", desc: "and slums are reached out to across the country" },
  { number: 400, suffix: "+", title: "PROJECTS", desc: "focused on education, healthcare, and women empowerment" },
  { number: 27, suffix: "+", title: "STATES", desc: "are reached including the remotest areas" },
];

function Counter({ target, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 1500; // animation time
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function OurImpact() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  // 👁️ Trigger when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-100 py-12 px-4">
      
      <h2 className="text-center text-black text-2xl md:text-3xl font-bold mb-10">
        OUR IMPACT
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            
            {/* Animated Number */}
            <h3 className="text-5xl md:text-6xl font-extrabold text-green-500">
              <Counter
                target={item.number}
                suffix={item.suffix}
                start={startCount}
              />
            </h3>

            {/* Title */}
            <p className="text-green-500 font-semibold text-lg mt-2">
              {item.title}
            </p>

            {/* Description */}
            <p className="text-gray-700 text-sm mt-2 max-w-[220px]">
              {item.desc}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}