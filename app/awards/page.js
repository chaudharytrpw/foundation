"use client";

import { useEffect, useRef } from "react";

const empanelmentData = [
  "Organization in Special Consultative Status with the United Nations Economic and Social Council (ECOSOC) since 2012",
  "Member of the United Nations Global Compact",
  "Verified by NGO Source as equivalent to US Public Charity",
  "Smile Foundation was awarded GlobalGiving status",
  "Smile Foundation has been accredited as a Guidestar India Platinum validated charity",
  "An Implementing Agency under CSR Hub of the Indian Institute of Corporate Affairs (IICA) under Ministry of Corporate Affairs, Govt. of India",
  "Smile Foundation has been accredited as a Charities Aid Foundation (CAF) America validated charity since 2016",
  "Listed as a member organisation with United Way Worldwide",
  "Empanelled with National CSR Hub, TISS, under Ministry of Heavy Industries & Public Enterprises",
  "Accreditation with Indian Development Foundation of Overseas Indians",
  "Accredited as Charities Aid Foundation (CAF) India validated charity",
  "Accredited as NGO-registered non-profit organisation",
];

const awardsData = [
  "Best Up-skilling Initiative of India award at India Business Awards 2023",
  "Most Inspiring NGO of the Year at Indian CSR Impact Awards 2023",
  "CSR Health Project of the Year Award at Bharat CSR Summit 2023",
  "7th Indian Chamber of Commerce Social Impact Award 2023",
  "Strategic CSR Project of the Year Award",
  "Best Organisation of the Year in CSR Implementation",
  "Odisha CSR & Sustainability Excellence Award",
  "Most Trusted NGO in Child Development by Brand Empower",
];

const ShieldIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
  >
    <path
      d="M10 2L3 4.5V10c0 3.75 3.1 6.9 7 8 3.9-1.1 7-4.25 7-8V4.5L10 2z"
      stroke="#7A5FA0"
      strokeWidth="1.4"
    />
    <path
      d="M7 10l2.2 2.2L13 7.5"
      stroke="#7A5FA0"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 flex-shrink-0 mt-0.5"
  >
    <path
      d="M10 2l2.4 6.2H19l-5.4 3.9 2 6.3L10 14.5l-5.6 3.9 2-6.3L1 8.2h6.6L10 2z"
      stroke="#B7A2C9"
      strokeWidth="1.3"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
);

const EmpanelmentCard = ({ text, index }) => (
  <div
    className="group flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 transition-all duration-200 hover:border-purple-200 hover:shadow-sm"
    style={{ animationDelay: `${index * 40}ms` }}
  >
    <div className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center">
      <ShieldIcon />
    </div>
    <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
  </div>
);

const AwardCard = ({ text, index }) => (
  <div
    className="group flex items-start gap-3 bg-white border border-gray-100 rounded-r-xl p-4 transition-all duration-200 hover:border-purple-200 hover:shadow-sm"
    style={{
      borderLeft: "2.5px solid #B7A2C9",
      animationDelay: `${index * 40}ms`,
    }}
  >
    <StarIcon />
    <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
  </div>
);

const SectionDivider = ({ label }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="flex-1 h-px bg-gray-200" />
    <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-gray-400 whitespace-nowrap">
      {label}
    </span>
    <div className="flex-1 h-px bg-gray-200" />
  </div>
);

const CountPill = ({ count, label, color }) => (
  <span
    className="inline-block text-[11px] font-medium px-3 py-1 rounded-full tracking-wide"
    style={{ background: color.bg, color: color.text }}
  >
    {count} {label}
  </span>
);

export default function Page() {
  return (
    <div className="w-full font-sans">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
        .card-enter {
          opacity: 0;
          transform: translateY(8px);
          animation: fadeUp 0.4s ease forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* HERO HEADER */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-6 font-body">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <div
            className="w-1 h-10 rounded-full flex-shrink-0"
            style={{ background: "#B7A2C9" }}
          />
          <div>
            <h1 className="font-display text-xl text-gray-800 leading-tight">
              Awards & Empanelment
            </h1>
            <p className="text-[11px] text-gray-400 tracking-widest uppercase mt-0.5">
              Home / Pages / Awards & Empanelment
            </p>
          </div>
        </div>
      </div>

      {/* EMPANELMENT SECTION */}
      <section className="py-12 px-6 font-body">
        <div className="max-w-5xl mx-auto">
          <SectionDivider label="Empanelment & Accreditation" />

          <div className="mb-5">
            <CountPill
              count={empanelmentData.length}
              label="accreditations"
              color={{ bg: "#EDE8F4", text: "#7A5FA0" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {empanelmentData.map((item, i) => (
              <EmpanelmentCard key={i} text={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section className="py-12 px-6 bg-gray-50 border-t border-gray-200 font-body">
        <div className="max-w-5xl mx-auto">
          <SectionDivider label="Awards & Recognition" />

          <div className="mb-5">
            <CountPill
              count={awardsData.length}
              label="awards"
              color={{ bg: "#F4EDE8", text: "#A0705F" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {awardsData.map((item, i) => (
              <AwardCard key={i} text={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}