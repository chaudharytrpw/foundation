"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop Links
  const linkClass = (path) =>
    `relative transition-all duration-300 ${
      pathname === path
        ? "text-black font-semibold border-b-2 border-black pb-1"
        : "text-green-700 hover:text-black"
    }`;

  // Mobile Links
  const mobileLinkClass = (path) =>
    `block py-2 text-lg transition ${
      pathname === path
        ? "text-green-400 font-semibold"
        : "text-white hover:text-green-400"
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "top-0 bg-white shadow-md"
          : "top-0 bg-[#d4f3d2]/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Container */}
        <div className="relative flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center z-20">
            <Image
              src="/logo.png"
              alt="SA Foundation Logo"
              width={100}
              height={40}
              priority
              className="object-contain w-[75px] sm:w-[90px] md:w-[100px] h-auto"
            />
          </Link>

          {/* Center Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>

            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>

            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>

            <Link href="/management" className={linkClass("/management")}>
              Overview
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black z-20"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-md px-6 py-5 space-y-4">
          <Link
            href="/"
            className={mobileLinkClass("/")}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={mobileLinkClass("/about")}
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={mobileLinkClass("/contact")}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/management"
            className={mobileLinkClass("/management")}
            onClick={() => setOpen(false)}
          >
            Overview
          </Link>
        </div>
      </div>
    </nav>
  );
}