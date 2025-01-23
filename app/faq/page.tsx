"use client";
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy with a full refund for unused products in their original packaging.',
    },
    {
      question: 'How can I track my order?',
      answer: 'You can track your order by logging into your account and navigating to the "Orders" section.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to over 50 countries worldwide. Shipping charges and delivery times vary by location.',
    },
    {
      question: 'Can I cancel or change my order?',
      answer: 'Yes, you can cancel or modify your order within 24 hours of placing it by contacting customer support.',
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg ${
              activeIndex === index ? 'bg-gray-100' : 'bg-white'
            } transition`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 focus:outline-none"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform ${
                  activeIndex === index ? 'rotate-180' : ''
                } transition-transform`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {activeIndex === index && (
              <div className="p-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FAQ;
