import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import CardComponent from "../components/CardComponent";
import VideoCardComponent from "./VideoCardComponent"; // ✅ New Import
import BooksData from "../data/Books";
import SoftwareData from "../data/Software";
import { MathBooksData, NonMathBooksData } from "../data/Math";
import VideosData from "../data/video";
import AppsData from "../data/Apps";
import Footer from "../components/Footer";

const categoryMap = {
  books: { name: "Books", data: BooksData },
  videos: { name: "Videos", data: VideosData },
  software: { name: "Software", data: SoftwareData },
  apps: { name: "Apps", data: AppsData },
  "math-books": { name: "Math Books", data: MathBooksData },
  "non-math-books": { name: "Non Math Books", data: NonMathBooksData },
};

const CategoryPage = () => {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);

  const booksPerPage = 6;
  const [visibleCount, setVisibleCount] = useState(booksPerPage);

  const categoryInfo = categoryMap[category];
  const allTitles = categoryInfo?.data.map((item) => item.title) || [];

  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) setRecentSearches(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  if (!categoryInfo) {
    return <div className="p-6 text-red-500">Category not found.</div>;
  }

  const filteredData = categoryInfo.data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectSuggestion = (value) => {
    setSearchQuery(value);
    inputRef.current.blur();
    updateRecentSearches(value);
  };

  const updateRecentSearches = (value) => {
    setRecentSearches((prev) => {
      const updated = [value, ...prev.filter((v) => v !== value)].slice(0, 5);
      return updated;
    });
  };

  const suggestions =
    searchQuery.trim() === ""
      ? [...new Set([...recentSearches, ...allTitles.slice(0, 3)])]
      : allTitles.filter((title) =>
          title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <>
      <div className="bg-white min-h-screen mb-32">
        <div className="bg-gradient-to-r from-[#47be07] to-[#3da204] text-white py-16 px-6 sm:px-16 relative">
          <button
            onClick={() => window.history.back()}
            className="absolute top-5 left-5 sm:top-6 sm:left-6 text-white flex items-center text-sm sm:text-base font-medium hover:underline z-20"
          >
            ← Back
          </button>

          <motion.h1
            className="text-3xl sm:text-5xl font-extrabold tracking-wide text-center mb-8 mt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categoryInfo.name}
          </motion.h1>

          <motion.div
            className="max-w-lg mx-auto relative z-10 mb-3.5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className={`flex items-center bg-white border ${
                isFocused ? "ring-2 ring-[#47be07]" : "border-gray-300"
              } rounded-md px-4 py-3 shadow-md transition-all duration-300 ease-in-out`}
            >
              <motion.div
                animate={{ rotate: isFocused ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiSearch className="text-[#47be07] w-5 h-5" />
              </motion.div>
              <input
                ref={inputRef}
                type="text"
                placeholder={`Search ${categoryInfo.name}...`}
                className="ml-3 w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                value={searchQuery}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 150)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(booksPerPage);
                }}
              />
            </div>

            <AnimatePresence>
              {isFocused && suggestions.length > 0 && (
                <motion.ul
                  className="absolute w-full mt-1 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 z-20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {suggestions.map((title, idx) => (
                    <li
                      key={idx}
                      onMouseDown={() => handleSelectSuggestion(title)}
                      className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {title}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 sm:mx-16 mt-12"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {filteredData.length > 0 ? (
            filteredData.slice(0, visibleCount).map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                {category === "videos" ? (
                  <VideoCardComponent item={item} />
                ) : (
                  <CardComponent item={item} />
                )}
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-sm col-span-full">
              No results found.
            </p>
          )}
        </motion.div>

        {filteredData.length > booksPerPage && (
          <div className="flex justify-center mt-8 mb-10 gap-4 text-sm">
            {visibleCount < filteredData.length && (
              <button
                onClick={() => setVisibleCount((prev) => prev + booksPerPage)}
                className="px-8 py-3 bg-[#47be07] hover:bg-[#3da204] text-white rounded-md shadow transition duration-300"
              >
                Load More
              </button>
            )}
            {visibleCount > booksPerPage && (
              <button
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.max(prev - booksPerPage, booksPerPage)
                  )
                }
                className="px-8 py-3 bg-[#47be07] hover:bg-[#3da204] text-white rounded-md shadow transition duration-300"
              >
                Load Less
              </button>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
