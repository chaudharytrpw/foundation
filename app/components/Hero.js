"use client";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/donate");
  };

  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Sangcha Ajin Foundation
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Sangcha Ajin Foundation is a registered non-profit organization based in Palin, Kra Daadi District, Arunachal Pradesh. Established to promote charitable programmes and community development initiatives, the foundation is registered under the Societies Registration Act, 1860 (as amended for Arunachal Pradesh).
          <br /><br />
          The organization is also recognized under Section 12AA and approved under Section 80G of the Income Tax Act, 1961. This enables it to carry out impactful work in education, social welfare, and rural development while offering tax benefits to donors.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button
            onClick={handleRoute}
            className="bg-[#28ef43] cursor-pointer text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition flex items-center gap-2 mx-auto"
          >
            Donate
            <span className="text-lg">↗</span>
          </button>
        </div>

      </div>
    </section>
  );
}