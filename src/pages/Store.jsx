import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi"; // Importing search icon
import image from "../assets/download.png"; // Import the image
import Footer from "../components/Footer"
const Store = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Example data (Replace with real data)
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
    { title: "The Divine Comedy", description: "A poem by Dante Alighieri." },
  ];

  // Filter books based on the search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <div className="min-h-screen from-[#47be07] via-[#3e9e0a] to-[#47be07] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#c9f7b8] via-transparent to-[#e9ffe0] opacity-40 pointer-events-none z-0" />

      {/* Header Section */}
      <div
        className="relative bg-gradient-to-r from-[#47be07] via-[#3e9e0a] to-[#47be07] py-24 px-4 sm:px-6 md:px-16 text-white text-center overflow-hidden z-10 mb-11"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 85%)",
        }}
      >
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-wide">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-4 sm:px-6 md:px-12 xl:px-24 py-16">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center transition-all transform  w-full sm:w-[90%] md:w-[80%] lg:w-[340px] pb-4"
            >
              {/* Book Image */}
              {/* Product Image */}
              <div className="relative h-48 sm:h-72 w-full overflow-hidden rounded-md flex justify-center items-center">
                <img
                  src={image}
                  alt={book.title}
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Book Details */}
              <div className="p-4 sm:p-6 text-center w-full flex flex-col items-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{book.description}</p>
                <a
                  href="#"
                  className="bg-[#47be07] text-white px-6 sm:px-8 py-2 rounded-md font-semibold hover:bg-[#3e9e0a] transition duration-300 inline-block"
                >
                  BUY
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-lg text-gray-600">
            No books found.
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Store;
