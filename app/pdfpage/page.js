"use client";

import { useState, useRef, useCallback } from "react";

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const YEARS = ["2026", "2025", "2024", "2023"];

function fmtSize(bytes) {
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / 1024 / 1024).toFixed(2) + " MB";
}

function PdfIcon() {
  return (
    <svg className="w-9 h-11 flex-shrink-0" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="44" rx="4" fill="#FCEBEB"/>
      <rect x="0" y="30" width="36" height="14" fill="#E24B4A"/>
      <path d="M6 20v-8h4a2 2 0 010 4H6" stroke="#E24B4A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 12v8h2a3 3 0 000-6h-2" stroke="#E24B4A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 12v8M22 16h3" stroke="#E24B4A" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="18" y="40" textAnchor="middle" fontSize="7" fontWeight="600" fill="white" fontFamily="sans-serif">PDF</text>
    </svg>
  );
}

function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="fixed bottom-5 right-5 z-50 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 shadow-md animate-fade-in">
      {message}
    </div>
  );
}

export default function MonthlyPdfManager() {
  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [dragging, setDragging] = useState(false);
  const [toast, setToast] = useState("");
  const fileInputRef = useRef(null);
  const toastTimer = useRef(null);

  function showToast(msg) {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2200);
  }

  function addFiles(fileList) {
    const now = new Date();
    const newFiles = [];
    Array.from(fileList).forEach((f) => {
      if (!f.name.toLowerCase().endsWith(".pdf")) {
        showToast("Sirf PDF files allowed hain");
        return;
      }
      newFiles.push({
        id: Date.now() + Math.random(),
        name: f.name,
        size: f.size,
        month: MONTHS[now.getMonth()],
        year: now.getFullYear(),
        date: now.toLocaleDateString("en-IN"),
        isNew: true,
      });
    });
    if (newFiles.length) {
      setFiles((prev) => [...prev, ...newFiles]);
      showToast(`${newFiles.length} file(s) upload ho gayi!`);
    }
  }

  function deleteFile(id) {
    setFiles((prev) => prev.filter((f) => f.id !== id));
    showToast("File delete ho gayi");
  }

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  }, []);

  const filtered = files.filter((f) => {
    return (
      (!search || f.name.toLowerCase().includes(search.toLowerCase())) &&
      (!monthFilter || f.month === monthFilter) &&
      (!yearFilter || String(f.year) === yearFilter)
    );
  });

  const curMonth = MONTHS[new Date().getMonth()];
  const curYear = new Date().getFullYear();
  const thisMonthCount = files.filter(
    (f) => f.month === curMonth && f.year === curYear
  ).length;
  const totalSize = files.reduce((a, f) => a + f.size, 0);

  return (
    <div className="min-h-screen  font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-medium text-gray-900">Monthly PDF Manager</h1>
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 text-sm px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
            </svg>
            <span className="hidden cursor-pointer sm:inline">PDF Upload</span>
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* Stats */}
        {/* <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Total Files", value: files.length },
            { label: "Total Size", value: fmtSize(totalSize) },
            { label: "Is Mahine", value: thisMonthCount },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-xl p-4">
              <div className="text-2xl font-medium text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div> */}


        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          multiple
          className="hidden"
          onChange={(e) => { addFiles(e.target.files); e.target.value = ""; }}
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-3 text-black mb-4 items-center">
          <div className="flex-1 min-w-[180px] relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="File search... "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
          <select
            value={monthFilter}
            onChange={(e) => setMonthFilter(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none"
          >
            <option value="">Select Month</option>
            {MONTHS.map((m) => <option key={m}>{m}</option>)}
          </select>
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none"
          >
            <option value="">Select Year</option>
            {YEARS.map((y) => <option key={y}>{y}</option>)}
          </select>
        </div>

        {/* File Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-sm text-gray-400">
            {files.length === 0
              ? "Koi file nahi hai. Pehle PDF upload karein."
              : "Is filter ke liye koi file nahi mili."}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((f) => (
              <div key={f.id} className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col gap-3 hover:shadow-sm transition-shadow">
                {/* Card Top */}
                <div className="flex items-start gap-3">
                  <PdfIcon />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate" title={f.name}>{f.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{fmtSize(f.size)}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-xs px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 font-medium">{f.month}</span>
                      <span className="text-xs px-2 py-0.5 rounded-md bg-green-50 text-green-800 font-medium">{f.year}</span>
                      {f.isNew && (
                        <span className="text-xs px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-medium">New</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="text-xs text-gray-400">{f.date}</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => showToast("Download ready!")}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                      title="Download"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => deleteFile(f.id)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      title="Delete"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <polyline points="3 6 5 6 21 6"/><path strokeLinecap="round" d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6M9 6V4h6v2"/>
                      </svg>
                    </button>
                  </div>
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