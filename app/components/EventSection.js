"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EventSection() {
  const router = useRouter();

  return (
    <section className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]  overflow-hidden">
      <Image
        src="/events/event_8.png"
        fill
        priority
        className="object-contain"
        alt="Event"
      />

      <div className="absolute bottom-3 right-14 sm:bottom-4 sm:right-16 mb-2 z-20">
        <button
          onClick={() => router.push("/events")}
          className="px-3 py-1.5 cursor-pointer sm:px-4 text-green-500 sm:py-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-lg font-semibold text-xs sm:text-sm md:text-base transition duration-300"
        >
          More →
        </button>
      </div>
    </section>
  );
}