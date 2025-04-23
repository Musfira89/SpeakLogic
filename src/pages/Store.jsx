"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import image from "../assets/download.png";
import Footer from "../components/Footer";

const Store = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const books = [
    {
      title: "The Great Gatsby",
      description: "A novel by F. Scott Fitzgerald.",
    },
    { title: "To Kill a Mockingbird", description: "A novel by Harper Lee." },
    { title: "1984", description: "A novel by George Orwell." },
    {
      title: "The Catcher in the Rye",
      description: "A novel by J.D. Salinger.",
    },
    { title: "Moby Dick", description: "A novel by Herman Melville." },
    { title: "Pride and Prejudice", description: "A novel by Jane Austen." },
    { title: "War and Peace", description: "A novel by Leo Tolstoy." },
    { title: "The Odyssey", description: "An epic poem by Homer." },
    { title: "The Hobbit", description: "A novel by J.R.R. Tolkien." },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Background gradient */}
      <div className="min-h-screen from-[#47be07] via-[#3e9e0a] to-[#47be07] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0ffe6] via-transparent to-[#eaffd9] opacity-40 pointer-events-none z-0" />

        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-[#47be07] via-[#3e9e0a] to-[#47be07] py-24 px-4 sm:px-6 md:px-16 text-white text-center overflow-hidden z-10 mb-11">
          <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-3 text-shadow-lg mt-16">
              STORE
            </h1>
            <nav className="text-sm sm:text-base font-medium text-white flex justify-center space-x-2">
              <Link to="/" className="hover:underline cursor-pointer">
                Home
              </Link>
              <span>&gt;</span>
              <span className="text-gray-100">Store</span>
            </nav>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative z-10 px-4 sm:px-6 md:px-12 xl:px-24 py-8 mb-5">
          <div className="max-w-xl mx-auto flex items-center bg-white rounded-md shadow-lg ring-1 ring-gray-300 hover:ring-[#47be07] transition-all duration-300">
            <input
              type="text"
              placeholder="Search for books..."
              className="w-full px-6 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47be07] text-sm text-gray-700 placeholder-gray-400 bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="bg-[#47be07] p-4 rounded-r-md cursor-pointer transition-all ">
              <FiSearch className="text-white text-xl" />
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-10 md:px-16 xl:px-32 py-16">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl p-4 shadow-2xl ring-1 ring-gray-200 hover:ring-[#47be07] transform transition-all hover:scale-[1.04] hover:-translate-y-2 hover:shadow-[#3e9e0a]/40 flex flex-col items-center"
                whileHover={{ rotateY: 5, rotateX: 5, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Book Image */}
                <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4 flex items-center justify-center bg-[#f8fff3]">
                  <img
                    src={image}
                    alt={book.title}
                    className="h-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Book Details */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {book.description}
                  </p>
                  <a
                    href="#"
                    className="bg-[#47be07] text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-[#3e9e0a] transition inline-block shadow-md hover:shadow-lg"
                  >
                    Buy Now
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-lg text-gray-600">
              No books found.
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Store;
