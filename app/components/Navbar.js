"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-[#d4f3d2] text-[#12e72e] ">
      <div className=" max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Image
              src="/logos.png"
              alt="SA Foundation Logo"
              width={90}
              height={35}
              className="object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-white transition">
              Home
            </a>
            <a href="/about" className="hover:text-white transition">
              About
            </a>
            
            <a href="/contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-md">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="/" className="block hover:text-white transition">
              Home
            </a>
            <a href="/about" className="block hover:text-white transition">
              About
            </a>
            
            <a href="/contact" className="block hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
