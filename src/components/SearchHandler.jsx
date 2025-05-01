import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const SearchHandler = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // Reference to the dropdown menu
  const inputRef = useRef(null); // Reference to the search input field

  const categories = [
    { name: "Books", path: "/category/books" },
    { name: "Software", path: "/category/software" },
    { name: "Apps", path: "/category/apps" },
    { name: "Math Books", path: "/category/math-books" },
    { name: "Non Math Books", path: "/category/non-math-books" },
  ];

  // Filter categories based on the search term
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.name);
    setSearchTerm(""); // Clear search term on selection
    setDropdownOpen(false);
    navigate(category.path); // Navigate to the selected category page
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setDropdownOpen(true); // Open the dropdown when the user types
  };

  // Close dropdown if clicked outside (excluding input field and dropdown)
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if click is outside the dropdown or the search input field
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        setDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
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
          ref={inputRef} // Attach the ref to the input field
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-1 outline-none bg-transparent text-sm placeholder-gray-500 px-2"
        />
        <FaSearch
          className="absolute right-3 text-[#41aa09] cursor-pointer"
          size={14}
        />
      </div>

      {dropdownOpen && (
        <div
          ref={dropdownRef} // Attach the ref to the dropdown container
          className="absolute left-0 top-14 bg-white border border-gray-200 shadow-md rounded-lg w-36 z-50"
        >
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <div
                key={cat.name}
                className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCategorySelect(cat)}
              >
                {cat.name}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-xs text-gray-500">
              No categories found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchHandler;
