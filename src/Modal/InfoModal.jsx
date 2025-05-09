// Modal/InfoModal.jsx
import React from "react";
import { Rating } from "@mui/material";

const InfoModal = ({ book, isOpen, onClose }) => {
  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative font-sans">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl"
        >
          &times;
        </button>

        {/* Content */}
        <div className="flex gap-4 items-center">
          {/* Image on Left */}
          <img
            src={book.image}
            alt={book.title}
            className="w-28 h-40 object-cover rounded-md shadow-md"
          />

          {/* Text Content on Right */}
          <div className="flex flex-col justify-end text-sm text-left text-gray-700 space-y-3 leading-snug h-full flex-1">
            <h2 className="text-lg font-semibold mb-3 text-[#3d960d] tracking-tight">
              {book.title}
            </h2>
            <p>
              <span className="font-medium text-gray-700">Description:</span>{" "}
              {book.description}
            </p>
            <p>
              <span className="font-medium text-gray-700">Author:</span>{" "}
              {book.author}
            </p>
            <div className="flex justify-start items-center gap-2">
              <span className="font-medium text-gray-700">Rating:</span>
              <Rating
                value={book.rating}
                precision={0.1}
                readOnly
                size="small"
              />
              <span className="text-xs text-gray-600">({book.rating})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
