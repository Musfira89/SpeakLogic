import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import solution from "../assets/solution-banner.jpg";
import solution1 from "../assets/solution-banner-1.jpg";
import Footer from "../components/Footer"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Solutions = () => {
  return (
    <>
    <div className="bg-[#f3f4f6] text-gray-800 font-sans">
      {/* Header Section */}
      <section
        className="relative h-[45vh] sm:h-[45vh] bg-gradient-to-r from-[#47be07] to-[#2e7c0e] flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 85%)",
        }}
      >
        <motion.div
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-3">
            SOLUTIONS
          </h1>

          {/* Breadcrumbs inside Header */}
          <nav className="text-sm sm:text-base font-medium flex justify-center space-x-2 text-white mt-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-white">Solutions</span>
          </nav>
        </motion.div>
      </section>

      {/* Modern Split Image + Text Section */}
      <section className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-6 py-20 md:py-24">
        <motion.div
          className="rounded-3xl overflow-hidden shadow-xl border border-white bg-white bg-opacity-60 backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={solution}
            alt="Solution Flow 1"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="text-left"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#2e7c0e]">
            Visual Logic Flow
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            This process visually guides learners and professionals through
            logical reasoning, enabling structured conversation patterns that
            improve clarity, learning, and engagement.
          </p>
          <Link
            to="/downloads"
            className="inline-block bg-[#2e7c0e] text-white font-medium px-6 py-3 rounded-full hover:bg-[#256a0b] transition"
          >
            Explore Resources
          </Link>
        </motion.div>
      </section>

      {/* Reverse Section */}
      <section className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-6 py-20 md:py-24">
        <motion.div
          className="text-left order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#3e9e0a]">
            Interactive Training Tools
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            From classroom to corporate — SpeakLogic tools use digital
            interfaces, assessments, and real-time feedback to help users apply
            logic frameworks to everyday interactions.
          </p>
          <Link
            to="/downloads"
            className="inline-block bg-[#3e9e0a] text-white font-medium px-6 py-3 rounded-full hover:bg-[#2c7d08] transition"
          >
            Try Tools
          </Link>
        </motion.div>

        <motion.div
          className="rounded-3xl overflow-hidden shadow-xl border border-white bg-white bg-opacity-60 backdrop-blur-md order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={solution1}
            alt="Solution Flow 2"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-[#2e7c0e] text-white py-16 sm:py-20 px-6 text-center relative overflow-hidden">
        <motion.h3
          className="text-3xl sm:text-4xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          Transform how you communicate.
        </motion.h3>
        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          Logical communication creates better leaders, teachers, and
          collaborators. Let SpeakLogic help you reshape the way you connect.
        </motion.p>
        <Link
          to="/downloads"
          className="inline-block bg-white text-[#2e7c0e] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Download Now
        </Link>
      </section>
    </div>
      <Footer/>
      </>
  );
};

export default Solutions;
