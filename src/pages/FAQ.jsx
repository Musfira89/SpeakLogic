import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Importing + and - icons
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { faq } from "../data/faq";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null); // State to manage expanded/collapsed FAQ

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index); // Toggle FAQ expansion
  };

  const [visibleFAQs, setVisibleFAQs] = useState(3); // Initially display 3 FAQs

  const loadMoreFAQs = () => {
    setVisibleFAQs(visibleFAQs + 3); // Load more FAQs by increasing the count
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <section className="relative h-[45vh] sm:h-[50vh] bg-gradient-to-r from-[#47be07] to-[#2e7c0e] flex flex-col items-center justify-center text-white text-center px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-3 text-shadow-lg mt-16">
            FAQs
          </h1>
          <nav className="text-sm sm:text-base font-medium flex justify-center space-x-2 text-white mt-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>&gt;</span>
            <span>FAQs</span>
          </nav>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-3 text-left">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-gray-600 mb-12 leading-relaxed max-w-2xl">
          Quick answers to questions you may have. Can’t find what you’re
          looking for? Check out our full documentation.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {faq.slice(0, visibleFAQs).map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition"
            >
              <div
                className="text-[#3d960d] text-[10px]  cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {expandedFAQ === index ? <FaMinus /> : <FaPlus />}{" "}
                {/* Toggle + and - */}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h3>
                {expandedFAQ === index && (
                  <p className="text-gray-600 text-sm">{faq.answer}</p> // Show answer if expanded
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        <div className="flex justify-center mt-10">
          <button
            className="bg-[#3d960d] text-white px-8 py-3 text-sm rounded-md font-semibold hover:bg-[#3eaa06] transition shadow-lg hover:scale-105"
            onClick={loadMoreFAQs}
          >
            Load more
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
