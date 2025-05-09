import React from "react";

const InquireFormModal = ({ bookTitle, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md relative px-5 py-6 sm:px-6 sm:py-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold mb-6">
          Inquire about "<span className="italic">{bookTitle}</span>"
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="text-sm w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47be07]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="text-sm w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47be07]"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="text-sm w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47be07]"
          ></textarea>
          <button
            type="submit"
            className="text-sm w-full bg-[#47be07] text-white py-2 px-6 rounded-md hover:bg-[#3e9e0a] transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquireFormModal;
