export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 px-4 sm:px-6 py-10">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
            Sangcha Ajin Foundation
          </h2>
          <p className="text-sm leading-relaxed">
            A registered social welfare organization based in Arunachal Pradesh,
            dedicated to empowering communities through education, healthcare,
            and skill development initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            
            <li className="hover:text-white cursor-pointer">Events</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            Contact
          </h3>
          <p className="text-sm">Palin, Kra Daadi District</p>
          <p className="text-sm">Arunachal Pradesh, India</p>
          <p className="text-sm mt-2">Email: info@safoundation.org</p>
          <p className="text-sm">Phone: +91 98765 43210</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <span className="hover:text-white cursor-pointer">🌐</span>
            <span className="hover:text-white cursor-pointer">📘</span>
            <span className="hover:text-white cursor-pointer">📸</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} Sangcha Ajin Foundation. All rights reserved.
      </div>

    </footer>
  );
}