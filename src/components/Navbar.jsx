import React, { useState, useEffect } from "react";
import { FaSearch, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/Artboard 1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [scrolled, setScrolled] = useState(false);

  const categories = [
    "All",
    "Books",
    "Non Math Books",
    "Math Books",
    "Softwares",
    "Videos",
    "Anything",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`font-sora py-3 sm:py-5 px-4 md:px-12 rounded-full max-w-[95%] md:max-w-[1200px] mx-auto fixed top-4 left-0 right-0 z-50 flex flex-wrap justify-between items-center gap-4 md:gap-8 transition-all duration-300 ${
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
          className="h-10 sm:h-[50px] md:h-[55px] w-auto object-contain transition-all duration-300"
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
          <Link to="/softwares" className="hover:text-[#41aa09] transition">
            Apps
          </Link>
          <Link to="/store" className="hover:text-[#41aa09] transition">
            Store
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative w-64">
          <div className="flex items-center border border-gray-300 rounded-md bg-white shadow-sm w-full pl-3 pr-10 py-3 relative">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between border-r border-gray-300 pr-3 w-[110px] cursor-pointer text-xs text-gray-600"
            >
              <span className="truncate">{selectedCategory}</span>
              <FaChevronDown className="ml-2 text-[10px]" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none bg-transparent text-sm placeholder-gray-500 px-2"
            />
            <FaSearch
              className="absolute right-3 text-[#41aa09] cursor-pointer"
              size={14}
            />
          </div>

          {dropdownOpen && (
            <div className="absolute left-0 top-14 bg-white border border-gray-200 shadow-md rounded-lg w-36 z-50">
              {categories.map((cat) => (
                <div
                  key={cat}
                  className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setDropdownOpen(false);
                  }}
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
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
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-4 right-4 bg-white shadow-lg rounded-2xl py-5 px-6 flex flex-col space-y-4 sm:hidden z-40">
          <Link to="/" className="text-[#41aa09] font-medium">
            Home
          </Link>
          <Link to="/problem">Problem</Link>
          <Link to="/solution">Solution</Link>
          <Link to="/books">Books</Link>
          <Link to="/softwares">Software</Link>
          <Link to="/store">Store</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/help">Help</Link>
          <Link to="/forums">Forums</Link>
          <Link
            to="/login"
            className="text-[#41aa09] underline underline-offset-2 decoration-[#41aa09] font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white bg-[#41aa09] rounded-md px-4 py-2 text-center"
          >
            Signup
          </Link>

          {/* Mobile Search Bar */}
          <div className="relative w-full">
            <div className="flex items-center border border-gray-300 rounded-md bg-white shadow-sm w-full pl-3 pr-10 py-2 relative">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between border-r border-gray-300 pr-3 w-[110px] cursor-pointer text-sm text-gray-600"
              >
                <span className="truncate">{selectedCategory}</span>
                <FaChevronDown className="ml-1 text-[10px]" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 outline-none bg-transparent text-sm placeholder-gray-500 px-2"
              />
              <FaSearch
                className="absolute right-3 text-gray-400 cursor-pointer"
                size={14}
              />
            </div>

            {dropdownOpen && (
              <div className="absolute left-0 top-14 bg-white border border-gray-200 shadow-md rounded-lg w-36 z-50">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setDropdownOpen(false);
                    }}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
