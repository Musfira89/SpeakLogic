"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiUsers,
  FiDownload,
  FiMessageCircle,
  FiLink,
  FiArrowRight,
} from "react-icons/fi";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Help = () => {
  const actions = [
    {
      icon: <FiUsers size={22} />,
      title: "Tell Friends",
      desc: "Spread awareness and share the project.",
    },
    {
      icon: <FiDownload size={22} />,
      title: "Download Tools",
      desc: "Access guides and resources.",
    },
    {
      icon: <FiMessageCircle size={22} />,
      title: "Join Forum",
      desc: "Discuss, share, and learn together.",
    },
    {
      icon: <FiLink size={22} />,
      title: "Share Links",
      desc: "Add us to your site or social profiles.",
    },
  ];

  return (
    <div className="font-poppins text-gray-700">
      {/* Header Section */}
      <section className="relative h-[40vh] bg-gradient-to-r from-[#47be07] to-[#2e7c0e] flex flex-col items-center justify-center text-white text-center px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">HELP</h1>
          <nav className="text-xs sm:text-sm font-medium flex justify-center space-x-1 mt-1">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>&gt;</span>
            <span>Help</span>
          </nav>
        </motion.div>
      </section>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto py-8 px-4 text-left"
      >
        <h2 className="text-2xl font-bold mb-2 mt-9">
          Your Help to The Speak Logic Project
        </h2>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed max-w-[30rem]">
          To improve communication and solve problems effectively, proper
          communication is essential. Help spread the word and be part of the
          solution.
        </p>
      </motion.div>

      {/* Actions */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 pb-10">
        {actions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm p-4 flex items-start space-x-3 hover:shadow-md transition"
          >
            <div className="text-[#47be07] bg-green-50 p-2 rounded-full">
              {item.icon}
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center py-8 px-4"
      >
        <h3 className="text-md font-medium mb-3">
          Let’s promote better communication together!
        </h3>
        <Link
          to="/contact"
          className="inline-flex items-center bg-[#47be07] hover:[#47be07] text-white text-xs px-8 py-3 rounded-md transition"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
};

export default Help;
