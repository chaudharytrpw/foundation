"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EventSection() {
  const router = useRouter();

  return (
    <section className="w-full flex mt-4 justify-center">
      <div className="relative w-full max-w-[1150px] aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1]">
        <Image
          src="/events/event_1.png"
          alt="Event Banner"
          fill
          priority
          className="object-cover object-center rounded-xl"
        />
      </div>
    </section>
  );
}