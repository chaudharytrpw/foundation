"use client";

import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { user, logout, loading } = useAuth();
  const pathname = usePathname(); // ✅ current route

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return null;

  // ✅ active class helper
  const linkClass = (path) =>
    `transition ${
      pathname === path
        ? "text-black font-semibold border-b-2 border-black"
        : "hover:text-black"
    }`;

  const mobileLinkClass = (path) =>
    `block ${
      pathname === path ? "text-green-400 font-semibold" : "hover:text-white"
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "top-0 bg-white text-green-500 shadow"
          : "top-[5px] bg-[#d4f3d2] text-[#12e72e]"
      }`}
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="SA Foundation Logo"
              width={90}
              height={35}
              style={{ width: "auto", height: "auto" }}
              className="object-contain cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
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

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Profile */}
            {user && (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  <User size={18} />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden text-sm">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Button */}
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)}>
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-md">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link href="/" className={mobileLinkClass("/")}>
              Home
            </Link>
            <Link href="/about" className={mobileLinkClass("/about")}>
              About
            </Link>
            <Link href="/contact" className={mobileLinkClass("/contact")}>
              Contact
            </Link>
            <Link href="/management" className={linkClass("/management")}>
              Overview
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
