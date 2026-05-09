"use client";

import { useState } from "react";

function fmtSize(bytes) {
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / 1024 / 1024).toFixed(2) + " MB";
}

function PdfIcon() {
  return (
    <svg
      className="w-9 h-11 flex-shrink-0"
      viewBox="0 0 36 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="36" height="44" rx="4" fill="#FCEBEB" />
      <rect x="0" y="30" width="36" height="14" fill="#E24B4A" />

      <path
        d="M6 20v-8h4a2 2 0 010 4H6"
        stroke="#E24B4A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M14 12v8h2a3 3 0 000-6h-2"
        stroke="#E24B4A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M22 12v8M22 16h3"
        stroke="#E24B4A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <text
        x="18"
        y="40"
        textAnchor="middle"
        fontSize="7"
        fontWeight="600"
        fill="white"
        fontFamily="sans-serif"
      >
        PDF
      </text>
    </svg>
  );
}

function SleepingCat({ noFilter }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 select-none">
      <svg
        width="140"
        height="130"
        viewBox="0 0 140 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="70" cy="95" rx="38" ry="28" fill="#f3f4f6" />
        <ellipse cx="70" cy="58" rx="30" ry="28" fill="#f3f4f6" />

        <polygon points="44,36 38,14 56,30" fill="#f3f4f6" />
        <polygon points="96,36 102,14 84,30" fill="#f3f4f6" />

        <polygon points="46,34 41,18 55,30" fill="#fbc4c4" />
        <polygon points="94,34 99,18 85,30" fill="#fbc4c4" />

        <path
          d="M57 57 Q61 53 65 57"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M75 57 Q79 53 83 57"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        <ellipse cx="70" cy="64" rx="3" ry="2" fill="#fbc4c4" />

        <path
          d="M67 66 Q70 70 73 66"
          stroke="#9ca3af"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        <line
          x1="44"
          y1="62"
          x2="62"
          y2="65"
          stroke="#d1d5db"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        <line
          x1="42"
          y1="67"
          x2="62"
          y2="67"
          stroke="#d1d5db"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        <line
          x1="96"
          y1="62"
          x2="78"
          y2="65"
          stroke="#d1d5db"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        <line
          x1="98"
          y1="67"
          x2="78"
          y2="67"
          stroke="#d1d5db"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        <path
          d="M108 105 Q130 85 120 65 Q112 50 118 38"
          stroke="#e5e7eb"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />

        <ellipse cx="52" cy="118" rx="12" ry="7" fill="#e5e7eb" />
        <ellipse cx="88" cy="118" rx="12" ry="7" fill="#e5e7eb" />

        <text
          x="105"
          y="52"
          fontSize="11"
          fill="#d1d5db"
          fontWeight="700"
          fontFamily="sans-serif"
        >
          z
        </text>

        <text
          x="114"
          y="40"
          fontSize="14"
          fill="#d1d5db"
          fontWeight="700"
          fontFamily="sans-serif"
        >
          z
        </text>

        <text
          x="125"
          y="26"
          fontSize="17"
          fill="#e5e7eb"
          fontWeight="700"
          fontFamily="sans-serif"
        >
          z
        </text>
      </svg>

      <p className="mt-3 text-sm text-gray-400 font-medium">
        {noFilter
          ? "No documents available"
          : "No files found"}
      </p>
    </div>
  );
}

function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 shadow-md">
      {message}
    </div>
  );
}

export default function MonthlyPdfManager() {
  const [files] = useState([
    {
      id: 1,
      name: "Invoice_January_2026.pdf",
      size: 245000,
      month: "January",
      year: 2026,
      date: "12/01/2026",
      isNew: true,
      url: "/pdfs/pdf-sample_0.pdf",
    },
    {
      id: 2,
      name: "Report_February_2025.pdf",
      size: 540000,
      month: "February",
      year: 2025,
      date: "18/02/2025",
      isNew: false,
      url: "/pdfs/dummy-pdf_2.pdf",
    },
    {
      id: 3,
      name: "Statement_March_2024.pdf",
      size: 1200000,
      month: "March",
      year: 2024,
      date: "09/03/2024",
      isNew: false,
      url: "/pdfs/dummy-pdf_2.pdf",
    },
  ]);

  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");

  function showToast(msg) {
    setToast(msg);

    setTimeout(() => {
      setToast("");
    }, 2000);
  }

  function openPdf(file) {
    window.open(file.url, "_blank");
    showToast(`${file.name} opened`);
  }

  const filtered = files.filter((f) => {
    return (
      !search ||
      f.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen  font-sans">
      <main className="max-w-5xl mx-auto px-4 py-6">
       

        {/* Search */}
        <div className="flex flex-wrap gap-3 text-black mb-6 items-center">
          <div className="flex-1 min-w-[180px] relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />

              <path
                strokeLinecap="round"
                d="M21 21l-4.35-4.35"
              />
            </svg>

            <input
              type="text"
              placeholder="Search files..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>

        {/* File Grid */}
        {filtered.length === 0 ? (
          <SleepingCat noFilter={files.length === 0} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((f) => (
              <div
                key={f.id}
                onClick={() => openPdf(f)}
                className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <PdfIcon />

                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-medium text-gray-900 truncate"
                      title={f.name}
                    >
                      {f.name}
                    </p>

                    <p className="text-xs text-gray-400 mt-0.5">
                      {fmtSize(f.size)}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-xs px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 font-medium">
                        {f.month}
                      </span>

                      <span className="text-xs px-2 py-0.5 rounded-md bg-green-50 text-green-800 font-medium">
                        {f.year}
                      </span>

                      {f.isNew && (
                        <span className="text-xs px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-medium">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="text-xs text-gray-400">
                    {f.date}
                  </span>

                  <button className="text-xs font-medium text-red-500 hover:text-red-600">
                    Open PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Toast message={toast} />
    </div>
  );
}