'use client';

import { FaYoutube } from 'react-icons/fa';

export default function YoutubeButton() {
  return (
    <a
      href="https://www.youtube.com/@sangchaajin"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 z-50
        w-14 h-14
        rounded-full
        bg-red-600 text-white
        shadow-xl
        flex items-center justify-center
        hover:scale-110
        hover:bg-red-700
        transition-all duration-300
      "
    >
      <FaYoutube size={28} />
    </a>
  );
}