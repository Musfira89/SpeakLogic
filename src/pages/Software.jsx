import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import softwareData from "../data/softwareData"; // Importing the software data

const Software = () => {
  return (
    <div>
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
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-3 text-shadow-lg">
            SOFTWARE
          </h1>
          {/* Breadcrumbs inside Header */}
          <nav className="text-sm sm:text-base font-medium flex justify-center space-x-2 text-white mt-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-white">Software</span>
          </nav>
        </motion.div>
      </section>

      {/* Instructions Section */}
      <section className="px-6 sm:px-10 md:px-16 xl:px-32 py-16 bg-[#F9FAFB] text-gray-800">
        <div className="max-w-4xl mx-auto text-sm space-y-12">
          {/* Heading */}
          <h2 className="text-3xl font-extrabold text-center text-[#3d960d] mb-10">
            Installation Instructions
          </h2>

          <div className="space-y-8">
            {/* Download Software */}
            <div className="space-y-4">
              <p className="leading-relaxed text-sm text-justify">
                <span className="font-semibold text-[#3e9e0a] text-md">
                  Download Software:
                </span>{" "}
                Understand the relationship between information and
                communication. The data you see about an entity depends on that
                entity, which you can explore in detail through the Principle of
                Communication exercise number 126.
              </p>
            </div>

            {/* Speak Logic Information Analysis */}
            <div className="space-y-4">
              <p className="leading-relaxed text-sm text-justify">
                <span className="font-semibold text-[#3e9e0a]">
                  Speak Logic Information Analysis:
                </span>{" "}
                This tool allows us to manage the information presented to us.
                The tool for Internet Explorer enhances our experience by
                allowing better management of web-based information. Learn more
                about the key features of this tool{" "}
                <a
                  href="#speak-logic"
                  className="text-[#3d960d] underline hover:text-[#3e9e0a] transition"
                >
                  here
                </a>
                .
              </p>
            </div>

            {/* New Features */}
            <div className="space-y-4">
              <p className="leading-relaxed text-sm text-justify">
                <span className="font-semibold text-[#3e9e0a]">
                  New Features:
                </span>{" "}
                Version 2012 includes additional features such as identifying
                principles in selection and interpreting those principles. You
                can learn about these updates in detail in the release notes.
              </p>
            </div>

            {/* Installation Instructions */}
            <div className="space-y-4">
              <p className="leading-relaxed text-sm text-justify">
                <span className="font-semibold text-[#3e9e0a]">
                  Installation Instructions:
                </span>{" "}
                After downloading, if the application doesn't open, unzip the
                file in your installation directory. Below are the download
                links based on your operating system:
              </p>
            </div>

            {/* Download Links */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <a
                href="#download-windows-xp"
                className="px-5 py-3 bg-[#3d960d] text-white rounded-lg shadow-lg hover:bg-[#3e9e0a] transition duration-300 transform hover:scale-105"
              >
                Download for Windows XP
              </a>
              <a
                href="#download-windows-vista"
                className="px-5 py-3 bg-[#3d960d] text-white rounded-lg shadow-lg hover:bg-[#3e9e0a] transition duration-300 transform hover:scale-105"
              >
                Download for Windows Vista/7
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Software Cards Section */}
      <section className="px-6 sm:px-10 md:px-16 xl:px-32 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Mapping through the softwareData array to display software cards dynamically */}
          {softwareData.map((software) => (
            <div
              key={software.id}
              className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-gray-200 hover:ring-[#47be07] transition-transform hover:scale-[1.05]"
            >
              <div className="h-48 w-full flex justify-center items-center overflow-hidden rounded-xl mb-4">
                <img
                  src={software.imgSrc}
                  alt={`Software ${software.id}`}
                  className="object-contain max-h-full max-w-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="text-center">
                <a
                  href={software.downloadLink}
                  className="bg-[#47be07] text-white text-sm font-semibold py-2 px-6 rounded-md hover:bg-[#3e9e0a] transition inline-block shadow-md hover:shadow-lg mb-2 w-full"
                >
                  Download Software
                </a>
                <br />
                <a
                  href={software.videoLink}
                  className="bg-[#47be07] text-white text-sm font-semibold py-2 px-6 rounded-md hover:bg-[#3e9e0a] transition inline-block shadow-md hover:shadow-lg w-full"
                >
                  Watch Video
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Software;
