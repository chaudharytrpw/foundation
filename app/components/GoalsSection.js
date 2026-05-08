// app/components/GoalsSection.jsx
import Image from "next/image";

export default function GoalsSection() {
  return (
    <section className=" py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Top Banner */}
        <div className="relative bg-green-300 rounded-lg overflow-hidden h-40 md:h-52 flex items-center justify-center">
          <Image
            src="/img/foundation/MIA01825.JPG" // replace with your image
            alt="Children"
            fill
            className="object-cover opacity-60"
          />

          {/* Center Card */}
          <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-xl mx-4 text-center">
            <h2 className="text-xl text-black md:text-2xl font-semibold mb-2">
              Goals and Objectives
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              To adopt Scheme for Welfare and Development of the Society in
              General Women and Children in Particular without favour in respect
              of any individual or Section of the Society.
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-5">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-black text-lg mb-2">
              Expand Literacy
            </h3>
          </div>

          <div className="bg-white text-black p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Increase Awareness</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
