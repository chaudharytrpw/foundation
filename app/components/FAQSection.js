"use client";
import { useState } from "react";

const faqs = [
  {
    id: "01",
    question: "What is Sangcha Ajin Foundation?",

    answer: `Sangcha Ajin Foundation is a registered charitable organization under the Societies Registration Act, 1860 (as extended to Arunachal Pradesh). The foundation is also registered on the NGO Darpan portal (NITI Aayog), reflecting its transparency and credibility in the non-profit sector.

In addition, the organization is registered under Section 12AA and approved under Section 80G of the Income Tax Act, 1961, enabling donors to avail tax benefits.`,
  },
  {
    id: "02",
    question: "When was the foundation established?",
    answer:
      "The foundation was established on October 6, 2006, and has since been actively involved in various charitable initiatives.",
  },
  {
    id: "03",
    question: "What kind of work does the foundation do?",
    answer:
    " Established with a vision to serve society, the foundation works towards promoting education, supporting rural communities, and improving the quality of life for underprivileged sections of society."
  },
  {
    id: "04",
    question: "Is the foundation officially registered?",
    answer:
      "Yes, Sangcha Ajin Foundation is officially registered under the Societies Registration Act, 1860 and recognized by the Government of Arunachal Pradesh.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full  py-8 px-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl text-green-400 md:text-3xl font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Find answers to common questions about our services
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-semibold w-8">
                    {faq.id}
                  </span>
                  <span className="text-gray-800 font-medium text-sm md:text-base">
                    {faq.question}
                  </span>
                </div>

                {/* Icon */}
                <span
                  className={`text-green-500 text-xl transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-4 md:px-5 transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-600 text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
