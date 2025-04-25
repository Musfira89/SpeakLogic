import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../../public/Artboard 1.png";

const Footer = () => {
  const quickLinks1 = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/about-us" },
    { label: "Solution", path: "/solution" },
    { label: "Software", path: "/softwares" },
    { label: "Books", path: "/books" },
  ];

  const quickLinks2 = [
    { label: "Problems", path: "/problem" },
    { label: "Videos", path: "/videos" },
    { label: "Questions", path: "/faq" },
  ];

  const quickLinks3 = [
    { label: "My Account", path: "/login" },
    { label: "Help", path: "/help" },
    { label: "SiteMap", path: "/sitemap" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <footer className="bg-white text-gray-800 pt-12 pb-8 px-6 md:px-16 lg:px-24 font-sora border-t border-gray-200 text-sm sm:text-base lg:text-sm xl:text-base">
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-12 px-6 md:px-16 lg:px-24">
          {/* 1st Column - Logo & Social */}
          <div className="w-full md:w-[30%] leading-normal sm:leading-relaxed">
            <img
              src={logo}
              alt="SpeakLogic"
              className="h-10 sm:h-12 md:h-14 lg:h-16 mb-6 sm:mb-8"
            />
          </div>

          {/* 2nd Column - Quick Links */}
          <div className="w-full md:w-[15%]">
            <h4 className="font-medium text-gray-700 mb-2 sm:mb-4 text-base sm:text-lg lg:text-base">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-500 font-normal">
              {quickLinks1.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-[#379f00] transition duration-200"
                >
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3rd Column - Resources */}
          <div className="w-full md:w-[15%]">
            <h4 className="font-medium text-gray-700 mb-2 sm:mb-4 text-base sm:text-lg lg:text-base">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-500 font-normal">
              {quickLinks2.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-[#379f00] transition duration-200"
                >
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4th Column - Contact Info */}
          <div className="w-full md:w-[15%]">
            <h4 className="font-medium text-gray-700 mb-2 sm:mb-4 text-base sm:text-lg lg:text-base">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-500 font-normal">
              {quickLinks3.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-[#379f00] transition duration-200"
                >
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs sm:text-xs text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-black">SpeakLogic</span>. All
          rights reserved.
        </div>

        {/* Horizontal Social Media Icons */}
        <div className="flex justify-center space-x-3 mt-4">
          {[
            { Icon: FaXTwitter, url: "https://twitter.com" },
            { Icon: FaInstagram, url: "https://instagram.com" },
            { Icon: FaFacebookF, url: "https://facebook.com" },
            { Icon: FaLinkedinIn, url: "https://linkedin.com" },
          ].map(({ Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-white to-gray-100 text-[#379f00] hover:bg-[#379f00] hover:text-[#379f00] hover:scale-110 p-2 sm:p-2 rounded-full shadow-lg transition-all duration-300 ease-in-out ring-1 ring-[#a2ff70] hover:ring-[#379f00]"
            >
              <Icon className="text-inherit text-[12px] sm:text-xs transition duration-300" />
            </a>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
