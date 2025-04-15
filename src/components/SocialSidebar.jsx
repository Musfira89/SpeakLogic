import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FixedSocialIcons = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowTopBtn(window.pageYOffset > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const baseStyle = "p-3 rounded-full shadow-md transition-all duration-300";
  const iconWrap = `bg-white text-[#379f00] hover:bg-[#379f00] hover:text-white hover:scale-110 ${baseStyle}`;
  const scrollTopStyle = `bg-[#379f00] text-white hover:scale-110 ${baseStyle}`;

  return (
    <>
      {/* Social Icons - Hidden on small screens */}
      <div className="hidden sm:flex fixed right-4 bottom-32 z-50 flex-col items-center space-y-4">
        <a href="#contact" className={iconWrap}>
          <FaEnvelope size={18} />
        </a>

        {[FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter].map((Icon, i) => (
          <a key={i} href="#" className={iconWrap}>
            <Icon size={18} />
          </a>
        ))}
      </div>

      {/* Scroll to Top Button - Always visible when scrolled */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-5 z-50 sm:right-4 sm:bottom-5"
        >
          <div className={scrollTopStyle}>
            <FaArrowUp size={12} />
          </div>
        </button>
      )}
    </>
  );
};

export default FixedSocialIcons;
