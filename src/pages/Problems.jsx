import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaBookOpen, FaLightbulb } from "react-icons/fa";
import problem from "../assets/problem-banner.jpg";
import problem1 from "../assets/problem-banner-1.jpg";
import Footer from "../components/Footer";

const Problems = () => {
  return (
    <>
      <div className="min-h-screen bg-[#F9FAFB] text-gray-800 font-sans">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-[#47be07] via-[#3e9e0a] to-[#47be07] py-32 px-6 md:px-16 text-white text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-10 z-0" />
          <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-5 tracking-tight">
              Problem
            </h1>
            <nav className="text-sm sm:text-base font-medium text-white flex justify-center space-x-3">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span>&gt;</span>
              <span className="text-gray-100">Problem</span>
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-[#F9FAFB] rounded-t-3xl" />
        </div>

        {/* Intro Section with Visual */}
        <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Why Communication is a{" "}
              <span className="text-[#47be07]">Real Problem ?</span>
            </h2>
            <p className="text-gray-700 text-md leading-relaxed">
              It’s impossible to master communication without understanding its{" "}
              <strong>principles</strong>. Sadly, most people have never been
              taught logical frameworks for effective dialogue.
            </p>
            <p className="text-gray-700 text-md">
              <strong className="text-[#47be07]">SpeakLogic.org</strong>{" "}
              believes that communication is more than speaking — it’s about
              clarity, logic, and purpose.
            </p>
          </div>
          <div className="relative group">
            <img
              src={problem}
              alt="Communication Problem Visual"
              className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500"
            />
          </div>
        </section>

        {/* Challenges Section */}
        <section className="bg-white py-24 border-t border-gray-200 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-5">
              The Real Challenges We Face
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-sm">
              Explore the core barriers preventing logical, effective
              communication in modern society.
            </p>

            <div className="grid md:grid-cols-3 gap-10 text-left">
              {/* Problem 1 */}
              <div className="bg-[#F9FAFB] border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition group">
                <FaExclamationTriangle className="text-red-500 text-4xl mb-6" />
                <h4 className="text-xl font-semibold mb-3">
                  Lack of Awareness
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Most people aren’t exposed to the{" "}
                  <strong>logical foundations</strong> of communication,
                  resulting in habitual misunderstandings.
                </p>
              </div>

              {/* Problem 2 */}
              <div className="bg-[#F9FAFB] border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition group">
                <FaBookOpen className="text-blue-500 text-4xl mb-6" />
                <h4 className="text-xl font-semibold mb-3">
                  No Standardized Learning
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Unlike math or science, there’s no{" "}
                  <strong>structured, logical curriculum</strong> for mastering
                  communication.
                </p>
              </div>

              {/* Problem 3 */}
              <div className="bg-[#F9FAFB] border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition group">
                <FaLightbulb className="text-yellow-500 text-4xl mb-6" />
                <h4 className="text-xl font-semibold mb-3">
                  Emotion Over Logic
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Conversations are often driven by{" "}
                  <strong>emotion, not reason</strong>, causing reactions over
                  reflection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Storytelling */}
        <section className="py-24 px-6 bg-[#F9FAFB]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-22">
            <div className="relative flex-1">
              <img
                src={problem1}
                alt="Problem Illustration"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                Communication Gaps Are Everywhere
              </h3>
              <p className="text-gray-700 text-md leading-relaxed">
                From education systems to corporate meetings, logical,
                structured conversation is rare. The result? Misunderstandings,
                conflicts, and missed opportunities.
              </p>
              <Link
                to="/solutions"
                className="inline-block bg-gradient-to-r from-black to-gray-800 text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition duration-300"
              >
                Discover Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#47be07] text-white py-24 text-center px-6">
          <h3 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Lead with Logic?
          </h3>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Join our mission to redefine communication through logic-first
            thinking, books, software, and practical experiences.
          </p>
          <Link
            to="/solutions"
            className="inline-block bg-white text-[#47be07] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Explore Solutions
          </Link>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Problems;
