"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[89vh]">

      {/* Background Image */}
      <img
        src="/img/foundation/MIA01106.JPG"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      

    </section>
  );
}