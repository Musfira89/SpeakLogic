import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../../public/Artboard 1.png";
import FixedSocialIcons from "./SocialSidebar";

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-gray-800 pt-12 pb-8 px-6 md:px-16 lg:px-24 font-sora border-t border-gray-200 text-sm sm:text-base lg:text-sm xl:text-base">
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-12">
          {/* 1st Column - Logo & Social */}
          <div className="w-full md:w-[30%] leading-normal sm:leading-relaxed">
            <img
              src={logo}
              alt="SpeakLogic"
              className="h-10 sm:h-12 md:h-14 lg:h-16 mb-6 sm:mb-8"
            />

            <div className="flex space-x-3 mt-2">
              {[FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="p-2 sm:p-3 rounded-full border border-gray-300 hover:border-[#379f00] transition duration-300 cursor-pointer group"
                  >
                    <Icon className="text-gray-700 group-hover:text-[#379f00] text-base sm:text-lg transition duration-300" />
                  </div>
                )
              )}
            </div>
          </div>

          {/* 2nd Column - Useful Links */}
          <div className="w-full md:w-[15%]">
            <h4 className="font-medium text-gray-700 mb-2 sm:mb-4 text-base sm:text-lg lg:text-base">
              Useful Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-500 font-normal">
              {["Home", "Problem", "Solution", "Forums", "Books"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-[#379f00] transition duration-200"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 3rd Column - Resources */}
          <div className="w-full md:w-[10%]">
            <h4 className="font-medium text-gray-700 mb-2 sm:mb-4 text-base sm:text-lg lg:text-base">
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-500 font-normal">
              {["Softwares", "Videos", "FAQs"].map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-[#379f00] transition duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 4th Column - Contact Info */}
          <div className="w-full flex-1">
            <h4 className="font-medium text-gray-700 mb-2 sm:mb-4 text-base sm:text-lg lg:text-base">
              Get Connected
            </h4>

            <div className="space-y-4">
              <div className="group cursor-pointer transition duration-300">
                <p className="font-semibold text-gray-600">Address:</p>
                <p className="text-gray-500 group-hover:text-[#47be07] transition duration-300">
                  A108 Adam Street, New York, NY 535022
                </p>
              </div>

              <div className="group cursor-pointer transition duration-300">
                <p className="font-semibold text-gray-600">Phone:</p>
                <p className="text-gray-500 group-hover:text-[#47be07] transition duration-300">
                  +1 5589 55488 55
                </p>
              </div>

              <div className="group cursor-pointer transition duration-300">
                <p className="font-semibold text-gray-600">Email:</p>
                <p className="text-gray-500 group-hover:text-[#47be07] transition duration-300">
                  info@example.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs sm:text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-black">SpeakLogic</span>. All
          rights reserved.
        </div>

        <FixedSocialIcons />
      </footer>
    </>
  );
};

export default Footer;
