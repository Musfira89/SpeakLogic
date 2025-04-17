import React, { useState, useEffect } from "react";
import { FaSearch, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/Artboard 1.png";
import { Link } from "react-router-dom"; // Import Link for routing

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

  // Handle scroll event to add/remove the "scrolled" class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`font-sora py-3 sm:py-5 px-4 md:px-12 rounded-full max-w-[95%] sm:max-w-[90%] md:max-w-[1250px] mx-auto fixed top-4 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300  ${
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
          className="h-12 sm:h-[60px] md:h-[62px] w-auto object-contain transition-all duration-300"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-[15px] font-medium text-gray-700">
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
        <Link to="/apps" className="hover:text-[#41aa09] transition">
          Apps
        </Link>
        <Link to="/softwares" className="hover:text-[#41aa09] transition">
          Softwares
        </Link>
        <Link to="/store" className="hover:text-[#41aa09] transition">
          Store
        </Link>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center border border-gray-300 rounded-md pl-4 pr-2 py-4 space-x-2 w-80 relative bg-white shadow-sm">
        {/* Category Dropdown Trigger */}
        <div
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-between border-r border-gray-300 pr-3 w-[110px] cursor-pointer text-sm text-gray-600 relative"
        >
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">
            {selectedCategory}
          </span>
          <span className="ml-1 text-xs">▼</span> {/* Unicode down arrow */}
        </div>

        {/* Dropdown List */}
        {dropdownOpen && (
          <div className="absolute left-4 top-14 bg-white border border-gray-200 shadow-md rounded-lg w-36 z-50">
            {categories.map((cat) => (
              <div
                key={cat}
                className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
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

        {/* Input */}
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none bg-transparent text-sm placeholder-gray-500 pl-2"
        />

        {/* Search Button */}
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#41aa09] text-white p-[9px] rounded-md hover:bg-green-700 transition">
          <FaSearch size={13} />
        </button>
      </div>

      {/* Mobile Menu Toggle */}
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
          <Link to="/apps">Apps</Link>
          <Link to="/softwares">Softwares</Link>
          <Link to="/store">Store</Link>

          {/* Mobile Search */}
          <div className="flex items-center border border-gray-300 rounded-md pl-4 pr-2 py-2 space-x-2 relative bg-white shadow-sm">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between border-r border-gray-300 pr-3 w-[110px] cursor-pointer text-sm text-gray-600 relative"
            >
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                {selectedCategory}
              </span>
              <span className="ml-1 text-xs">▼</span> {/* Unicode down arrow */}
            </div>

            {dropdownOpen && (
              <div className="absolute left-4 top-14 bg-white border border-gray-200 shadow-md rounded-lg w-36 z-50">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
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
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#41aa09] text-white p-[9px] rounded-full hover:bg-green-700 transition">
              <FaSearch size={13} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
