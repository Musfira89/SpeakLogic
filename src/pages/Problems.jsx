import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaBookOpen, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import problem from "../assets/problem-banner.jpg";
import problem1 from "../assets/problem-banner-1.jpg";
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
  const images = [problem, problem1];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
      <div className="min-h-screen bg-[#F9FAFB] text-gray-800 font-sans">
        {/* Header Section */}
        <section
          className="relative h-[45vh] sm:h-[50vh] bg-gradient-to-r from-[#47be07] to-[#2e7c0e] flex flex-col items-center justify-center text-white text-center px-4 bg-fixed"
          style={{
            backgroundSize: "cover",
          }}
        >
          <motion.div
            className="relative z-10"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-3 text-shadow-lg">
              PROBLEMS
            </h1>
            {/* Breadcrumbs inside Header */}
            <nav className="text-sm sm:text-base font-medium flex justify-center space-x-2 text-white mt-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span>&gt;</span>
              <span className="text-white">Problems</span>
            </nav>
          </motion.div>
        </section>

        {/* Carousel Section */}
        <motion.div
          className="w-full max-w-4xl mx-auto mt-16"
          initial="hidden"
          animate="visible"
          variants={popUpImage}
        >
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
            <motion.div
              className="flex transition-all"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`carousel-img-${i}`}
                  className="w-full flex-shrink-0 object-cover max-h-[400px]"
                />
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-8">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-8 h-1 rounded-md ${
                  index === currentIndex ? "bg-[#47be07]" : "bg-[#cceac1]"
                } transition-all`}
              />
            ))}
          </div>
        </motion.div>
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

        {/* Visual Storytelling */}
        <section className="py-20 lg:py-24 px-6 lg:px-12 bg-[#F9FAFB]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <img
                src={problem1}
                alt="Problem Illustration"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 space-y-5"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                Solving Communication Problems Starts With Awareness
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Without identifying and correcting errors in the way we express
                and think about information, flawless execution is impossible.
                Logical dialogue isn't just helpful — it's essential.
              </p>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                At the core of solvin g communication issues is recognizing both
                the inner and outer components of dialogue. Every thought and
                spoken word must align.
              </p>
              <Link
                to="/solutions"
                className="inline-block bg-gradient-to-r  from-black to-gray-800 text-white text-xs font-medium px-6 py-3 rounded-md "
              >
                Discover Solutions
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-[#3c9b09] text-white py-20 lg:py-24 text-center px-6 lg:px-12 overflow-hidden"
        >
          {/* Floating Blobs */}
          <svg
            className="absolute top-12 left-[-50px] w-40 opacity-20 z-0"
            style={{ animation: "float 8s ease-in-out infinite" }}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M44.8,-65.4C58.2,-56.3,69.5,-43.6,74.3,-29.4C79.1,-15.3,77.5,-0.1,70.6,12.9C63.6,25.9,51.3,36.7,38.3,46.1C25.3,55.5,12.6,63.4,-0.3,63.8C-13.1,64.2,-26.1,57.2,-38.6,48C-51.1,38.9,-63.2,27.7,-67.5,13.8C-71.8,-0.2,-68.2,-16.9,-59.5,-30.3C-50.8,-43.8,-36.9,-53.9,-22.2,-61.3C-7.4,-68.7,8.2,-73.5,22.7,-70.3C37.3,-67.1,52.6,-55.5,44.8,-65.4Z"
              transform="translate(100 100)"
            />
          </svg>

          <svg
            className="absolute bottom-12 right-[-60px] w-52 opacity-20 z-0"
            style={{ animation: "float 6s ease-in-out infinite" }}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M44.8,-65.4C58.2,-56.3,69.5,-43.6,74.3,-29.4C79.1,-15.3,77.5,-0.1,70.6,12.9C63.6,25.9,51.3,36.7,38.3,46.1C25.3,55.5,12.6,63.4,-0.3,63.8C-13.1,64.2,-26.1,57.2,-38.6,48C-51.1,38.9,-63.2,27.7,-67.5,13.8C-71.8,-0.2,-68.2,-16.9,-59.5,-30.3C-50.8,-43.8,-36.9,-53.9,-22.2,-61.3C-7.4,-68.7,8.2,-73.5,22.7,-70.3C37.3,-67.1,52.6,-55.5,44.8,-65.4Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Lead with Logic?
            </h3>
            <p className="text-base sm:text-md mb-10 max-w-[35rem] mx-auto">
              Join our mission to redefine communication through logic-first
              thinking, books, software, and practical experiences.
            </p>
            <Link
              to="/solutions"
              className="inline-block bg-white text-[#47be07] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Float animation */}
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
            }
          `}</style>
        </motion.section>
      </div>

      <Footer />
    </>
  );
};

export default Problems;
