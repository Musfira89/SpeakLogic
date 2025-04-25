import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaBookOpen, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import problem from "../assets/problem-banner.jpg";
import problem1 from "../assets/problem-banner-1.jpg";

import img1 from "../assets/Problem/1.jpg";
import img2 from "../assets/Problem/2.jpg";
import img3 from "../assets/Problem/3.jpg";
import img4 from "../assets/Problem/4.jpg";

import Footer from "../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const popUpImage = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const Problems = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="min-h-screen bg-[#F9FAFB] text-gray-800 font-sans">
        {/* Carousel */}
        <div className="relative w-full overflow-hidden ">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3d960d]/50 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex transition-transform duration-700 ease-in-out"
            animate={{ x: `-${currentIndex * 100}%` }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`slide-${idx}`}
                className="w-full object-cover max-h-[520px]"
              />
            ))}
          </motion.div>

          {/* Dots */}
          <div className="relative z-20 flex justify-center gap-2 mt-4">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-8 h-1 rounded ${
                  idx === currentIndex ? "bg-[#47be07]" : "bg-[#cceac1]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Problem Heading and Breadcrumb */}
        <div className="text-center mt-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">PROBLEM</h1>
          <nav className="text-sm font-medium text-[#3c970b] mb-6">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span>Problems</span>
          </nav>
        </div>

        {/* Intro Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24 grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Why Communication is a{" "}
              <span className="text-[#47be07]">Real Problem?</span>
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Communication is a key part of life and makes it possible for
              people to work together. Without communication, it would be
              impossible for us to work together or to execute the normal
              functions of life.
            </p>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              To better understand the relationship between our communications
              and the functions that we execute, it is important to treat both
              entities as separate. For instance, if we communicate about buying
              a house, we can treat the communication about buying the house as
              an entity, and the purchase of the house as another entity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <img
              src={problem}
              alt="Communication Problem Visual"
              className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500"
            />
          </motion.div>
        </section>

        <section className="bg-white border-t border-gray-200 py-20 lg:py-24 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
              The Real Challenges We Face
            </h3>
            <p className="text-sm text-gray-600 mb-12 leading-relaxed">
              Explore how flawed communication impacts everything from personal
              decisions to major life outcomes.
            </p>

            <div className="grid md:grid-cols-3 gap-10 text-left">
              {[
                {
                  icon: (
                    <FaExclamationTriangle className="text-red-500 text-4xl sm:text-5xl mb-6" />
                  ),
                  title: "Dependence on Communication",
                  text: "The functions that we execute depend heavily on the quality of communication. Without clarity, even simple tasks fail.",
                },
                {
                  icon: (
                    <FaBookOpen className="text-blue-500 text-4xl sm:text-5xl mb-6" />
                  ),
                  title: "Quality Matters",
                  text: "It’s not just about talking — flawed or low-quality communication leads to flawed results and misunderstandings.",
                },
                {
                  icon: (
                    <FaLightbulb className="text-yellow-500 text-4xl sm:text-5xl mb-6" />
                  ),
                  title: "Internal vs External Views",
                  text: "Communication includes both what is expressed and what is thought. Ignoring either leads to unresolved problems.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-[#F9FAFB] border border-gray-200 rounded-3xl p-8 sm:p-10 group transform transition duration-500 cursor-pointer relative overflow-hidden ${
                    index === 1
                      ? "scale-[1.05] shadow-2xl z-10"
                      : "hover:scale-[1.05] hover:shadow-2xl"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  <div className="transition-transform duration-500">
                    {item.icon}
                    <h4 className="text-base sm:text-xl font-bold mb-3 leading-wide">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-12 leading-relaxed">
                      {item.text}
                    </p>
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-tr from-[#47be07] to-[#3e9e0a] opacity-10 rounded-full blur-2xl rotate-45" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ending CTA */}
        <section className="py-20 px-6 lg:px-12 bg-[#F9FAFB] border-t border-gray-200">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <img
              src={problem1}
              alt="Solution"
              className="w-full md:w-1/2 rounded-3xl shadow-xl"
            />
            <div className="md:w-1/2 space-y-5">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Awareness is the First Step Toward a Solution
              </h3>
              <p className="text-sm text-gray-600">
                Great communication starts with understanding — both of
                ourselves and others. When we listen and express with intention,
                we break the cycle of confusion.
              </p>
              <Link
                to="/solutions"
                className="inline-block bg-black text-white text-sm px-6 py-3 rounded-md"
              >
                Discover Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Problems;
