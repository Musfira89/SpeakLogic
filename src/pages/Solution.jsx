import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import solution from "../assets/solution-banner.jpg";
import solution1 from "../assets/solution-banner-1.jpg";
import Footer from "../components/Footer";

import img1 from "../assets/Problem/1.jpg";
import img2 from "../assets/Problem/2.jpg";
import img3 from "../assets/Problem/3.jpg";
import img4 from "../assets/Problem/4.jpg";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const popUpImage = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const Solutions = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <>
      <div className="bg-[#f3f4f6] text-gray-800 font-sans">
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
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-3 text-shadow-lg mt-16">
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





        {/* Visual Logic Flow Section */}
        <section className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-8 lg:px-14 py-20 md:py-24">
          <motion.div
            className="rounded-3xl overflow-hidden shadow-xl border border-white bg-white bg-opacity-60 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={solution}
              alt="Solution Flow"
              className="w-full h-full object-cover transform transition duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div
            className="text-left"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#2e7c0e]">
              The Solution Process
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              The functions we execute rely on our communication. To perform
              these functions effectively, we must identify and correct
              communication errors by learning the principle of communication.
              This principle is not learned automatically — it requires
              conscious understanding, enabling structured, error-free execution
              of our actions.
            </p>
            <Link
              to="/downloads"
              className="inline-block bg-[#2e7c0e] text-white text-xs font-medium px-6 py-3 rounded-md transform transition duration-300 hover:bg-[#256a0b] hover:scale-110"
            >
              Learn More
            </Link>
          </motion.div>
        </section>

        {/* Interactive Tools Section */}
        <section className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-6 lg:px-14 py-20 md:py-24">
          <motion.div
            className="text-left order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#2e7c0e]">
              Learning the Principle
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Learning the principle of communication is essential for
              identifying and correcting errors. With tools, books, and software
              available, Speak Logic makes learning accessible. Whether you
              prefer instructor-led learning or self-study through books like{" "}
              <em>Fundamental of Communication</em>, you can dive deep into the
              concept through real-world examples and exercises (e.g., Exercises
              294, 295, 370).
            </p>
            <Link
              to="/downloads"
              className="inline-block bg-[#2e7c0e] text-white text-xs font-medium px-6 py-3 rounded-md transform transition duration-300 hover:bg-[#256a0b] hover:scale-110"
            >
              Download Resources
            </Link>
          </motion.div>

          <motion.div
            className="rounded-3xl overflow-hidden shadow-xl border border-white bg-white bg-opacity-60 backdrop-blur-md order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={solution1}
              alt="Interactive Tools"
              className="w-full h-full object-cover transform transition duration-700 hover:scale-105"
            />
          </motion.div>
        </section>

        {/* Tools & Guidelines Section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-14 py-16 md:py-20 text-gray-700">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2e7c0e] text-center">
              Software & Guidelines
            </h3>
            <p className="text-sm mb-6 leading-relaxed text-center max-w-3xl mx-auto">
              Speak Logic also provides analysis software to help you identify
              errors in your communication and correct them effectively. The
              analysis guideline combines all listed resources and should be
              used once you've developed a good foundational understanding.
            </p>
            <div className="text-center">
              <Link
                to="/downloads"
                className="inline-block bg-[#2e7c0e] text-white text-xs font-medium px-6 py-3 rounded-md transform transition duration-300 hover:bg-[#256a0b] hover:scale-110"
              >
                Get the Software
              </Link>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#2e7c0e] text-white py-16 sm:py-20 px-6 text-center relative overflow-hidden">
          <motion.h4
            className="md:text-3xl sm:text-4xl font-bold mb-4 text-shadow-lg"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            Transform how you communicate.
          </motion.h4>
          <motion.p
            className="text-md max-w-[35rem] mx-auto mb-8 text-shadow-md"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            Logical communication creates better leaders, teachers, and
            collaborators. Let Speak Logic help you reshape the way you connect.
          </motion.p>
          <Link
            to="/downloads"
            className="inline-block bg-white text-sm text-[#2e7c0e] font-semibold px-6 py-3 rounded-md transform transition duration-300 hover:bg-gray-100 hover:scale-110"
          >
            Download Now
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Solutions;
