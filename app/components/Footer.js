"use client";

import Link from "next/link";
import { FaGlobe, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 px-4 sm:px-6 py-10">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
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
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-white transition">
                Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Head Office */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            Head Office (HQ)
          </h3>
          <p className="text-sm">Palin, Kra Daadi District</p>
          <p className="text-sm">Arunachal Pradesh, India</p>

          <p className="text-sm mt-2">
            Email:{" "}
            <a
              href="mailto:sangchaajin@gmail.com"
              className="hover:text-white transition"
            >
              sangchaajin@gmail.com
            </a>
          </p>

          <p className="text-sm">
            Phone:{" "}
            <a
              href="tel:+913603566397"
              className="hover:text-white transition"
            >
              +91 3603566397
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGlobe />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Branch Office */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            Branch Office
          </h3>
          <p className="text-sm">C-Sector, Itanagar, Papum Pare District</p>
          <p className="text-sm">Arunachal Pradesh, 791111, India</p>

          <p className="text-sm mt-2">
            Email:{" "}
            <a
              href="mailto:sangchaajin@gmail.com"
              className="hover:text-white transition"
            >
              sangchaajin@gmail.com
            </a>
          </p>

          <p className="text-sm">
            Phone:{" "}
            <a
              href="tel:+913603566397"
              className="hover:text-white transition"
            >
              +91 3603566397
            </a>
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-xs sm:text-sm text-gray-400">
        © 2017 Sangcha Ajin Foundation. All rights reserved.
      </div>

    </footer>
  );
}