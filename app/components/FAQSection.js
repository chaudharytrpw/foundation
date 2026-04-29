"use client";
import { useState } from "react";

const faqs = [
  {
    id: "01",
    question: "What is your pricing?",
    answer:
      "Our pricing depends on the project scope and requirements. Contact us for a custom quote tailored to your needs.",
  },
  {
    id: "02",
    question: "Do you offer free support?",
    answer:
      "Yes, we provide limited free support after delivery. Extended support plans are also available.",
  },
  {
    id: "03",
    question: "How long does delivery take?",
    answer:
      "Typical delivery takes 1–3 weeks depending on complexity and feedback cycles.",
  },
  {
    id: "04",
    question: "Can I request revisions?",
    answer:
      "Absolutely! We include multiple revision rounds to ensure you're satisfied.",
  },
  {
    id: "05",
    question: "Do you provide refunds?",
    answer:
      "Refunds are handled case-by-case depending on project progress and agreement terms.",
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