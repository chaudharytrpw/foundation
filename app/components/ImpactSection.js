export default function ImpactSection() {
  return (
    <section className="w-full  py-12 px-4">
      <div className="max-w-7xl mx-auto grid gap-6 
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {/* Card 1 - Image */}
        <div className="bg-[#72f684] rounded-2xl overflow-hidden flex items-center justify-center">
          <img
            src="/child.jpg" // replace with your image
            alt="child"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 2 - Stats */}
        <div className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm">
          <p className="text-gray-600 text-sm">
            Children supported
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            62%
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a href="#" className="mt-4 text-sm font-medium text-black flex items-center gap-1">
            Learn more →
          </a>
        </div>

        {/* Card 3 - Support */}
        <div className="bg-[#7afc8b] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-black">Support</h3>
            <p className="text-sm text-gray-700 mt-2">
              Help children get access to education and resources.
            </p>
          </div>
          <a href="#" className="mt-4 text-sm font-medium text-black flex items-center gap-1">
            Learn more →
          </a>
        </div>

        {/* Card 4 - Image + text */}
        <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col">
          <img
            src="/child2.jpg" // replace
            alt="child"
            className="rounded-xl mb-4 object-cover h-40 w-full"
          />
          <p className="text-gray-600 text-sm">
            Empowering children through education and care.
          </p>
          <a href="#" className="mt-3 text-sm font-medium text-black flex items-center gap-1">
            Learn more →
          </a>
        </div>

      </div>
    </section>
  );
}