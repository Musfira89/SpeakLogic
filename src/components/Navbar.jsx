import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/Artboard 1.png";
import { Link } from "react-router-dom";
import SearchHandler from "../components/SearchHandler";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`font-sora py-2 sm:py-4 px-4 md:px-12 rounded-full max-w-[95%] md:max-w-[1200px] mx-auto fixed top-4 left-0 right-0 z-50 flex flex-wrap justify-between items-center gap-4 md:gap-8 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-xl border border-gray-200"
          : "bg-white shadow-md"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="SpeakLogic Logo"
          className="h-8 sm:h-[30px] md:h-[55px] w-auto object-contain transition-all duration-300"
        />
      </div>

      {/* Main Right Section */}
      <div className="hidden md:flex items-center gap-6">
        {/* Desktop Menu */}
        <div className="flex space-x-6 text-[13px] font-medium text-gray-700">
          <Link
            to="/"
            className="text-[#41aa09] hover:text-green-700 transition"
          >
            Home
          </Link>
          <Link to="/problem" className="hover:text-[#41aa09] transition">
            Problem
          </Link>
          <Link to="/solution" className="hover:text-[#41aa09] transition">
            Solution
          </Link>
          <Link to="/books" className="hover:text-[#41aa09] transition">
            Books
          </Link>
          <Link to="/softwares" className="hover:text-[#41aa09] transition">
            Software
          </Link>
          <Link to="/softwares" onClick={() => setMenuOpen(false)}>
            Apps
          </Link>
          <Link to="/store" className="hover:text-[#41aa09] transition">
            Store
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative w-64">
          <SearchHandler />
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3 ml-2">
          <Link
            to="/login"
            className="text-sm text-[#41aa09] font-medium underline underline-offset-2 decoration-[#41aa09]"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-sm text-white bg-[#41aa09] px-4 py-[6px] rounded-full hover:bg-green-700 transition"
          >
            Signup
          </Link>
        </div>
      </div>

      {/* Mobile Toggle */}
      <button
        className="sm:hidden text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] text-xs left-4 right-4 bg-white shadow-lg rounded-2xl py-5 px-6 flex flex-col space-y-4 sm:hidden z-40">
          <Link
            to="/"
            className="text-[#41aa09] font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link to="/problem" onClick={() => setMenuOpen(false)}>
            Problem
          </Link>
          <Link to="/solution" onClick={() => setMenuOpen(false)}>
            Solution
          </Link>
          <Link to="/books" onClick={() => setMenuOpen(false)}>
            Books
          </Link>
          <Link to="/softwares" onClick={() => setMenuOpen(false)}>
            Software
          </Link>
          <Link to="/softwares" onClick={() => setMenuOpen(false)}>
            Apps
          </Link>
          <Link to="/store" onClick={() => setMenuOpen(false)}>
            Store
          </Link>
          <Link to="/videos" onClick={() => setMenuOpen(false)}>
            Videos
          </Link>

          {/* Mobile Search Bar */}
          <div className="relative w-full">
            <SearchHandler />
          </div>

          <div className="flex space-x-2">
            <Link
              to="/login"
              className="text-[#41aa09] border border-[#41aa09] bg-white rounded-md px-11 py-2 text-center font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="text-white bg-[#41aa09] rounded-md px-11 py-2 text-center font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
