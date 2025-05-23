import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: "How do I apply to be a tutor?",
    answer: "You can apply by clicking the 'Start Tutoring' button and filling out the application form."
  },
  {
    question: "What are the requirements to teach?",
    answer: "You must be fluent in English, have a reliable internet connection, and be passionate about education."
  },
  {
    question: "How is payment handled?",
    answer: "We pay tutors biweekly via direct deposit or PayPal."
  }
];

export default function FAQ() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 text-black dark:text-white">
      <h2 className="text-4xl font-light text-center mb-12">FAQ</h2>

      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-10">
        {/* Questions List */}
        <div className="w-full md:w-1/2 space-y-4">
          {faqData.map((faq, idx) => {
            const isActive = selected === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelected(idx)}
                className={`cursor-pointer bg-[#18ece4]/20 flex items-center justify-between px-4 py-3 rounded transition-colors duration-300 ${
                  isActive
                    ? 'bg-[#18ece4]/90 dark:bg-cyan-800'
                    : 'bg-white dark:bg-gray-800 '
                }`}
              >
                <p className="font-medium">{faq.question}</p>
                
                {/* Icon Transition */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isActive ? 'minus' : 'plus'}
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-cyan-600 dark:text-cyan-300"
                  >
                    {isActive ? <FaMinus /> : <FaPlus />}
                  </motion.span>
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Animated Answer Section */}
        <div className="w-full md:w-1/2 min-h-[150px] px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded shadow-inner">
          <AnimatePresence mode="wait">
            <motion.p
              key={selected}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-lg font-light"
            >
              {faqData[selected].answer}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
