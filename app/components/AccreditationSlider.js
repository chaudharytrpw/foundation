"use client";
import { useState, useEffect, useRef } from "react";

const data = [
  {
    title: "Societies Registration Certificate",
    desc: "Certificate of Registration issued under the Societies Registration Act, 1860 by the Registrar of Societies, Government of Arunachal Pradesh, certifying Sangcha Ajin Foundation as a registered charitable society.",
    img: "/certificates/FOUNDATION006.jpg",
  },
  {
    title: "Income Tax Registration Certificate",
    desc: "12AA registration certificate issued by the Commissioner of Income Tax (Exemptions), Kolkata, recognizing Sangcha Ajin Foundation as a registered charitable organization under the Income Tax Act, 1961.",
    img: "/certificates/FOUNDATION004.png",
  },
  {
    title: "Income Tax Department",
    desc: "80G(5)(vi) approval certificate issued by the Commissioner of Income Tax (Exemptions), Kolkata, certifying that donations made to Sangcha Ajin Foundation are eligible for income tax exemption under the Income Tax Act, 1961.",
    img: "/certificates/FOUNDATION005.png",
  },
  {
    title: "Societies Registration Certificate",
    desc: "Certificate of Registration issued under the Societies Registration Act, 1860 by the Registrar of Societies, Government of Arunachal Pradesh, certifying Sangcha Ajin Foundation as a registered charitable society.",
    img: "/certificates/FOUNDATION006.jpg",
  },
  {
    title: "Income Tax Registration Certificate",
    desc: "12AA registration certificate issued by the Commissioner of Income Tax (Exemptions), Kolkata, recognizing Sangcha Ajin Foundation as a registered charitable organization under the Income Tax Act, 1961.",
    img: "/certificates/FOUNDATION004.png",
  },
  {
    title: "Income Tax Department",
    desc: "80G(5)(vi) approval certificate issued by the Commissioner of Income Tax (Exemptions), Kolkata, certifying that donations made to Sangcha Ajin Foundation are eligible for income tax exemption under the Income Tax Act, 1961.",
    img: "/certificates/FOUNDATION005.png",
  },
];

export default function AccreditationSlider() {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [lightbox, setLightbox] = useState(null); // { img, title, desc }
  const intervalRef = useRef(null);

  // Responsive
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

  // Auto Slide
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [maxIndex]);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
  };

  const stopAutoSlide = () => clearInterval(intervalRef.current);

  return (
    <>
      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backdropFilter: "blur(8px)", backgroundColor: "rgba(0,0,0,0.65)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-[92%] sm:w-[80%] max-w-2xl mx-auto overflow-hidden"
            style={{
              animation: "lightboxPop 0.3s cubic-bezier(0.34,1.56,0.64,1) both",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 bg-green-500 hover:bg-green-600 text-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image */}
            <div className="bg-gray-50 flex items-center justify-center p-4 sm:p-6 border-b border-gray-100">
              <img
                src={lightbox.img}
                alt={lightbox.title}
                className="max-h-[55vh] sm:max-h-[420px] w-auto object-contain rounded-lg sm:rounded-xl shadow-md"
                style={{ maxWidth: "100%" }}
              />
            </div>

            {/* Info */}
            <div className="px-6 py-4">
              <h3 className="text-lg font-bold text-green-600 text-center">
                {lightbox.title}
              </h3>
              <p className="text-center mt-2 text-xs text-gray-400 italic">
                Press <kbd className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-500 font-mono">Esc</kbd> or click outside to close
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Slider */}
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
                <div className="rounded-2xl p-5 h-full flex flex-col items-center transition">
                  {/* Image with double-click */}
                  <div className="relative group w-full">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-46 object-contain mb-2 cursor-zoom-in rounded-lg transition-transform duration-200 group-hover:scale-[1.02]"
                      onDoubleClick={() => setLightbox(item)}
                      title="Double click to view full size"
                    />
                    {/* Hint badge on hover */}
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none select-none">
                      Double click to enlarge
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-green-500 text-lg mb-1 text-center">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm text-center">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes lightboxPop {
          0% { opacity: 0; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}