"use client";
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import Image from "next/image";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { user, logout, loading } = useAuth(); // ✅ use context

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

  // ✅ prevent hydration flicker
  if (loading) return null;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
      ${scrolled ? "top-0 bg-white text-green-500" : "top-[5px] bg-[#d4f3d2] text-[#12e72e]"}`}
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Image
            src="/logos.png"
            alt="SA Foundation Logo"
            width={90}
            height={35}
            className="object-contain"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">

            {/* ✅ Profile only if logged in */}
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
                    <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</a>
                    <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
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
            <a href="/" className="block hover:text-white transition">Home</a>
            <a href="/about" className="block hover:text-white transition">About</a>
            <a href="/contact" className="block hover:text-white transition">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}