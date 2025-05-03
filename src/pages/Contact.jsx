import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaUser, FaEnvelope, FaRegCommentDots, FaPen } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* Header Section */}
      <div className="min-h-screen bg-gradient-to-b from-[#e8fade] via-[#f0fdf4] to-white px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="text-center text-white bg-gradient-to-r from-[#47be07] via-[#3e9e0a] to-[#47be07] py-16 sm:py-24 rounded-2xl shadow-xl mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Contact Us
          </h1>
          <nav className="text-sm sm:text-base font-medium flex justify-center space-x-2">
            <Link to="/" className="hover:underline cursor-pointer text-white">
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-gray-100">Contact</span>
          </nav>
        </div>

        {/* Main Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto bg-white shadow-2xl ring-1 ring-gray-200 rounded-3xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[auto] sm:min-h-[auto] md:min-h-[600px]"
        >
          {/* Left: Google Map */}
          <div className="w-full h-full min-h-[300px] sm:min-h-[450px] rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3063883969975!2d-73.69833618459213!3d40.82565067932059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2887cc3a743fd%3A0x6cc38fd81c2ef933!2sPort%20Washington%2C%20NY!5e0!3m2!1sen!2sus!4v1689459211511!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right: Form */}
          <div className="p-2 md:pl-6">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                We'd love to hear from you
              </h2>
              <p className="text-gray-500 text-sm max-w-[23rem] mb-6 leading-5">
                Have a question or just want to say hi? Fill out the form below
                and we’ll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-5">
              <div className="relative">
                <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#47be07]" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#47be07] placeholder:text-sm"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#47be07]" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#47be07] placeholder:text-sm"
                />
              </div>
              <div className="relative">
                <FaPen className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#47be07]" />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#47be07] placeholder:text-sm"
                />
              </div>
              <div className="relative">
                <FaRegCommentDots className="absolute top-4 left-4 text-[#47be07]" />
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#47be07] placeholder:text-sm"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#47be07] hover:bg-[#3e9e0a] text-white px-8 py-3 rounded-full font-semibold shadow-md transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
