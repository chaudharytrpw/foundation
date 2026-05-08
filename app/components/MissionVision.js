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
            We believe that every child deserves access to education, care, and
            opportunity.
          </p>
        </div>

        {/* Top Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
         
          <div className="bg-[#c3f7ca] rounded-2xl overflow-hidden">
            <img
              src="/img/23.jpg"
              alt="children"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#c3f7ca] rounded-2xl overflow-hidden">
            <img
              src="/img/13.jpg"
              alt="children"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-[#c3f7ca] rounded-2xl overflow-hidden">
            <img
              src="/img/12.jpg"
              alt="children"
              className="w-full h-full object-cover"
            />
          </div>
         
          <div className="bg-[#c3f7ca] rounded-2xl overflow-hidden">
            <img
              src="/img/22.jpg"
              alt="children"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
