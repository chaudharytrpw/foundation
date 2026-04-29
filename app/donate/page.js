export default function Page() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Make a Difference Today
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Your small contribution can create a big impact. Help us provide
            education, care, and opportunities to children who deserve a brighter future.
          </p>
        </div>

        {/* Content + Form */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">

          {/* Left Content */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">
              Why Your Donation Matters
            </h2>

            <p className="mt-4 text-gray-600">
              At SA Foundation, we are committed to transforming lives by
              supporting underprivileged children with education, nutrition,
              and healthcare. Every donation helps us bring hope to those who
              need it the most.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Provide school supplies and education</li>
              <li>✔ Ensure proper nutrition and meals</li>
              <li>✔ Support healthcare and well-being</li>
              <li>✔ Create opportunities for a better future</li>
            </ul>

            <p className="mt-6 text-gray-600">
              Together, we can build a world where no child is left behind.
              Join us in this mission and be the reason someone smiles today.
            </p>
          </div>

          {/* Donation Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">
              Donate Now
            </h2>

            <form className="mt-6 space-y-4">

              {/* Name */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              {/* Amount */}
              <input
                type="number"
                placeholder="Donation Amount (₹)"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              {/* Message */}
              <textarea
                placeholder="Message (Optional)"
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#28ef43] text-black py-3 rounded-lg font-medium hover:scale-105 transition"
              >
                Proceed to Donate →
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              100% secure payments. Your data is safe with us.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}