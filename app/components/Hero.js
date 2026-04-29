export default function Hero() {
  return (
    <section className="w-full  py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Transforming Lives Through <br className="hidden sm:block" />
          Hope and Education
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Welcome to ForHelp, where we believe in the boundless potential of every child.
          Our mission is to create a world where underprivileged children are given the
          wings to soar high and achieve their dreams.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-[#28ef43] cursor-pointer text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition flex items-center gap-2 mx-auto">
            Donate Now
            <span className="text-lg">↗</span>
          </button>
        </div>

      </div>
    </section>
  );
}