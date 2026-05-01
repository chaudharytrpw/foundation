"use client"
import { useRouter } from "next/navigation";

export default function Hero() {
  const router=useRouter()
  const getRout=(()=>{
    router.push("/donate")
  })
  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Sangcha Ajin Foundation
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Established in Palin, Kra Daadi District, Arunachal Pradesh, Sangcha Ajin Foundation is a registered society dedicated to fostering social welfare and community development. Since its inception on June 5, 2017, the foundation has been actively supporting underprivileged communities through education, healthcare, and skill development initiatives.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button onClick={()=>getRout()} className="bg-[#28ef43] cursor-pointer text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition flex items-center gap-2 mx-auto">
            Donate
            <span className="text-lg">↗</span>
          </button>
        </div>

      </div>
    </section>
  );
}