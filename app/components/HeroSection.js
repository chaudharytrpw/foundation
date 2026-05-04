"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[89vh]">

      {/* Background Image */}
      <img
        src="/img/foundation/Image_35.jpeg"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <h1 className="text-white font-bold tracking-wide
          text-2xl sm:text-4xl lg:text-6xl">
          REAL WORK. REAL CHANGE
        </h1>
      </div>

    </section>
  );
}