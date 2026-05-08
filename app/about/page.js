import HeroSection from "../components/HeroSection";

export default function Page() {
  return (
    <>  
    <HeroSection/>
    <section className="w-full px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            About Us
          </h1>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Learn more about our mission, vision, and the impact we are creating
          </p>
        </div>

        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          
          {/* Text */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Sangcha Ajin Foundation
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Established in Palin, Kra Daadi District, Arunachal Pradesh, Sangcha Ajin Foundation is a registered society dedicated to fostering social welfare and community development. Registered under the Societies Registration Act, 1860, the foundation has been actively working to uplift communities and promote positive social change.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/img/foundation/MIA01106.JPG"
              alt="community"
              className="rounded-xl w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm">
              To empower underprivileged communities through education, healthcare, and skill development initiatives while creating sustainable opportunities for growth.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm">
              To build a better and inclusive society where every individual has access to opportunities, resources, and the ability to achieve their full potential.
            </p>
          </div>

        </div>

        {/* Work / Impact Section */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-6">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            
            <div className="bg-white border p-5 rounded-lg text-center shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
              <p className="text-sm text-gray-600">
                Supporting education initiatives for underprivileged children.
              </p>
            </div>

            <div className="bg-white border p-5 rounded-lg text-center shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">Healthcare</h4>
              <p className="text-sm text-gray-600">
                Providing access to basic healthcare and awareness programs.
              </p>
            </div>

            <div className="bg-white border p-5 rounded-lg text-center shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">Skill Development</h4>
              <p className="text-sm text-gray-600">
                Helping individuals gain skills for employment and growth.
              </p>
            </div>

          </div>
        </div>

        {/* Highlight Section */}
        <div className="bg-green-50 p-6 sm:p-8 rounded-xl text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
            A Step Towards Empowerment
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            In 2024, the foundation successfully organized the first Miss Universe Arunachal Pradesh pageant, promoting talent, culture, and empowerment across the state.
          </p>
        </div>

      </div>
    </section>

    </>
  );
}