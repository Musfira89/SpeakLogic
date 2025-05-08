import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import image from "../assets/download.png";
import Footer from "../components/Footer";
import InquireFormModal from "../Modal/InquireFormModal";

const Store = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

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

  const IconButton = ({ icon, onClick, label }) => (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className="w-10 h-10 rounded-full bg-[#47be07] text-white flex items-center justify-center hover:bg-[#3aa506] shadow focus:outline-none focus:ring-2 focus:ring-[#47be07] cursor-pointer"
    >
      {icon}
    </button>
  );

  return (
    <>
      <div className="min-h-screen from-[#47be07] via-[#3e9e0a] to-[#47be07] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0ffe6] via-transparent to-[#eaffd9] opacity-40 pointer-events-none z-0" />

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

        <div className="relative z-10 px-4 sm:px-6 md:px-12 xl:px-24 py-8 mb-5">
          <div className="max-w-xl mx-auto relative">
            <div className="flex items-center bg-white rounded-md shadow-lg ring-1 ring-gray-300 hover:ring-[#47be07] transition-all duration-300">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for books..."
                className="w-full px-6 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47be07] text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDropdownOpen(true);
                }}
              />
              <div className="bg-[#47be07] p-4 rounded-r-md cursor-pointer transition-all">
                <FiSearch className="text-white text-xl" />
              </div>
            </div>

            {dropdownOpen && searchQuery && filteredBooks.length > 0 && (
              <div
                ref={dropdownRef}
                className="absolute top-full mt-1 left-0 right-0 bg-white shadow-lg rounded-md border border-gray-200 z-50 max-h-60 overflow-auto"
              >
                {filteredBooks.map((book, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchQuery(book.title);
                      setDropdownOpen(false);
                    }}
                  >
                    {book.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-10 md:px-16 xl:px-32 py-16">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl p-4 shadow-2xl ring-1 ring-gray-200 hover:ring-[#47be07] transform transition-all hover:scale-[1.04] hover:-translate-y-2 hover:shadow-[#3e9e0a]/40 flex flex-col items-center"
                whileHover={{ rotateY: 5, rotateX: 5, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute top-2 left-2 z-10">
                  <IconButton
                    icon={<FaInfoCircle size={14} />}
                    onClick={(e) => {
                      e.preventDefault();
                      // Removed info modal logic
                    }}
                    label="Details"
                  />
                </div>
                <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4 flex items-center justify-center bg-[#f8fff3]">
                  <img
                    src={image}
                    alt={book.title}
                    className="h-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {book.description}
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="#"
                      className="bg-[#47be07] text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-[#3e9e0a] transition shadow-md hover:shadow-lg"
                    >
                      Buy Now
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedBook(book);
                        setShowModal(true);
                      }}
                      className="bg-white text-[#47be07] border border-[#47be07] text-sm font-semibold py-2 px-6 rounded-full hover:bg-[#f0fff0] transition shadow-md hover:shadow-lg"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-sm col-span-full">
              No results found
            </p>
          )}
        </div>

        {showModal && selectedBook && (
          <InquireFormModal
            bookTitle={selectedBook.title}
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>

      <Footer />
    </>
  );
};

export default Store;
