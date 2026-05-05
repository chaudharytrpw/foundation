export default function MissionVision() {
  return (
    <section className="w-full  py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Empowering Children, Creating Futures
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            We believe that every child deserves access to education, care, and opportunity.
          </p>
        </div>

        {/* Top Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          
          {/* Left Image */}
          <div className="bg-[#c3f7ca] rounded-2xl overflow-hidden">
            <img
              src="/img/Image_9.jpeg"
              alt="children"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Mission</h3>
              <a href="#" className="text-sm text-gray-500">Learn more →</a>
            </div>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>✔ Provide access to quality education</li>
              <li>✔ Support underprivileged communities</li>
              <li>✔ Encourage personal growth and development</li>
              <li>✔ Create safe and inclusive environments</li>
              <li>✔ Build a brighter future for every child</li>
            </ul>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Vision</h3>
              <a href="#" className="text-sm text-gray-500">Learn more →</a>
            </div>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>✔ A world where every child has equal opportunity</li>
              <li>✔ Access to education and essential resources</li>
              <li>✔ Strong, empowered communities</li>
              <li>✔ A future driven by knowledge and compassion</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="bg-[#c3f7ca] rounded-2xl overflow-hidden">
            <img
              src="/img/Image_23.jpeg"
              alt="children"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}