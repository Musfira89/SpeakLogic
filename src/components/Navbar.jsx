import React, { useState, useEffect } from "react";
import { FaSearch, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/Artboard 1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqDropdownOpen, setFaqDropdownOpen] = useState(false);
  const [softwareDropdownOpen, setSoftwareDropdownOpen] = useState(false);
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
      className={`font-sora py-3 sm:py-5 px-4 md:px-12 rounded-full max-w-[95%] md:max-w-[1200px] mx-auto fixed top-4 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ${
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

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-[13px] font-medium text-gray-700 items-center">
        <Link to="/" className="text-[#41aa09] hover:text-green-700 transition">
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

        {/* Faqs Dropdown */}
        <div className="relative">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => {
              setFaqDropdownOpen(!faqDropdownOpen);
              setSoftwareDropdownOpen(false);
            }}
          >
            <span className="hover:text-[#41aa09] transition text-sm">
              Faqs
            </span>
            <FaChevronDown
              className={`text-[10px] mt-[2px] transition-transform duration-200 ${
                faqDropdownOpen ? "rotate-180 text-[#41aa09]" : "text-gray-600"
              }`}
            />
          </div>
          {faqDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-36 z-50 py-2">
              <Link
                to="/faq"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Faqs
              </Link>
              <Link
                to="/help"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                Help
              </Link>
            </div>
          )}
        </div>

        {/* Softwares Dropdown */}
        <div className="relative">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => {
              setSoftwareDropdownOpen(!softwareDropdownOpen);
              setFaqDropdownOpen(false);
            }}
          >
            <span className="hover:text-[#41aa09] transition text-sm">
              Softwares
            </span>
            <FaChevronDown
              className={`text-[10px] mt-[2px] transition-transform duration-200 ${
                softwareDropdownOpen
                  ? "rotate-180 text-[#41aa09]"
                  : "text-gray-600"
              }`}
            />
          </div>
          {softwareDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-40 z-50 py-2">
             <Link
                  to="/softwares"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Software
                </Link>
              <Link
                to="/store"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                Store
              </Link>
              <Link
                to="/videos"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                Videos
              </Link>
            </div>
          )}
        </div>

        <Link to="/forums" className="hover:text-[#41aa09] transition">
          Forums
        </Link>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center border border-gray-300 rounded-md pl-4 pr-2 py-4 space-x-2 w-80 relative bg-white shadow-sm">
        <div
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-between border-r border-gray-300 pr-3 w-[110px] cursor-pointer text-sm text-gray-600 relative"
        >
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">
            {selectedCategory}
          </span>
          <FaChevronDown className="ml-1 text-[10px]" />
        </div>

        {dropdownOpen && (
          <div className="absolute left-4 top-14 bg-white border border-gray-200 shadow-md rounded-lg w-36 z-50">
            {categories.map((cat) => (
              <div
                key={cat}
                className="px-4 py-2 p-6 hover:bg-gray-100 text-xs cursor-pointer"
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

        <input
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none bg-transparent text-sm placeholder-gray-500 pl-2"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#41aa09] text-white p-[9px] rounded-md hover:bg-green-700 transition">
          <FaSearch size={13} />
        </button>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-4 right-4 bg-white shadow-lg rounded-2xl py-5 px-6 flex flex-col space-y-4 md:hidden z-40">
          <Link to="/" className="text-[#41aa09] font-medium">
            Home
          </Link>
          <Link to="/problem">Problem</Link>
          <Link to="/solution">Solution</Link>
          <Link to="/books">Books</Link>
          <Link to="/forums">Forums</Link>

          {/* Mobile Dropdowns */}
          <div className="relative">
            <div
              onClick={() => setFaqDropdownOpen(!faqDropdownOpen)}
              className="flex items-center justify-between cursor-pointer"
            >
              <span>Faqs</span>
              <FaChevronDown className="text-xs" />
            </div>
            {faqDropdownOpen && (
              <div className="mt-2 bg-white shadow-md rounded-lg w-full">
                <Link
                  to="/faq"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Faqs
                </Link>
                <Link
                  to="/help"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Help
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <div
              onClick={() => setSoftwareDropdownOpen(!softwareDropdownOpen)}
              className="flex items-center justify-between cursor-pointer"
            >
              <span>Softwares</span>
              <FaChevronDown className="text-xs" />
            </div>
            {softwareDropdownOpen && (
              <div className="mt-2 bg-white shadow-md rounded-lg w-full">
                <Link
                  to="/softwares"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Software
                </Link>
                <Link
                  to="/store"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Store
                </Link>
                <Link
                  to="/videos"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Videos
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
