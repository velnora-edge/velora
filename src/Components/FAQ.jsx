
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Orders are usually delivered within 3–7 business days. Delivery times may vary depending on your location and selected shipping method.",
  },
  {
    question: "Can I return my order?",
    answer:
      "Yes. Eligible items can be returned within 14 days of delivery as long as they are unused and in their original condition.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been shipped, you will receive tracking information so you can follow your package from dispatch to delivery.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, Velora offers international shipping to selected locations. Shipping availability and delivery times are shown during checkout.",
  },
  {
    question: "How can I contact Velora support?",
    answer:
      "You can contact our support team through the Contact page. We will be happy to help with orders, products, returns and other questions.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF7F2] px-5 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#B4527A]">
            Need To Know
          </p>

          <h2
            className="text-4xl font-medium text-[#2A1226] md:text-5xl"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            Frequently Asked{" "}
            <span className="text-[#B4527A]">Questions</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
            Find quick answers to some of the most common questions
            about shopping with Velora.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-[22px] border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#B4527A]/30 shadow-md"
                    : "border-[#eadfd5] shadow-sm"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-7"
                >
                  <span className="text-base font-semibold text-[#2A1226] md:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#2A1226] text-white"
                        : "bg-[#F3EDE7] text-[#2A1226]"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-7 text-gray-600 md:px-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
