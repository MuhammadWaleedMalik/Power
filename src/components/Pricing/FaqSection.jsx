import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I really start for free?",
    answer:
      "Yes, you can start using the free plan right away without any credit card required. You’ll have access to basic features to explore the platform.",
  },
  {
    question: "Can I switch plans anytime?",
    answer:
      "Absolutely! You can upgrade, downgrade, or cancel your plan anytime from your account settings.",
  },
  {
    question: "Do you offer discounts for education or nonprofits?",
    answer:
      "Yes, we provide special pricing and discounts for educational institutions and registered nonprofits. Contact our support team to learn more.",
  },
  {
    question: "How does team billing work?",
    answer:
      "Each team member has their own account, and billing is handled per team. You can manage members, track usage, and pay from a single dashboard.",
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#fffaf3] py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-sm transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg font-medium text-gray-900"
            >
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-gray-700 text-sm sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
