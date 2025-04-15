import React from "react";

const Modal = ({ modal, closeModal }) => {
  const renderModalContent = () => {
    const bookOptions = [
      "Understanding the Principles of Communication",
      "Identification and Correction of Errors in Communication",
    ];

    const downloadTypes = ["EPUB", "PDF"];
    const printTypes = ["Paperback", "Hardcover"];

    if (!modal.open) return null;

    return (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-sm p-10 border border-[#47be07] font-sora">
          <h2 className="text-center text-[#47be07] text-lg font-semibold mb-8">
            {modal.type === "download"
              ? "FORMAT"
              : modal.type === "print"
              ? "PRINT TYPE"
              : "BOOK INFO"}
          </h2>

          {/* Download Options */}
          {modal.type === "download" && (
            <div className="flex flex-col gap-4 text-center text-gray-800 text-base font-medium">
              {downloadTypes.map((type) => (
                <button
                  key={type}
                  className="flex items-center justify-center gap-2 hover:text-[#47be07] transition"
                >
                  <svg
                    className="w-5 h-5"
                    stroke="#47be07"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  {type}
                </button>
              ))}
              <div className="border-t border-gray-300 w-[60%] mx-auto" />
            </div>
          )}

          {/* Print Options */}
          {modal.type === "print" && (
            <div className="flex flex-col gap-4 text-center text-gray-800 text-base font-medium">
              {printTypes.map((type) => (
                <button key={type} className="hover:text-[#47be07] transition">
                  {type}
                </button>
              ))}
              <div className="border-t border-gray-300 w-[60%] mx-auto" />
            </div>
          )}

          {/* Info */}
          {modal.type === "info" && (
            <p className="text-sm text-center text-gray-600 leading-relaxed">
              This book provides a structured and logical approach to improving
              communication. Great for parents and educators.
            </p>
          )}

          {/* Close Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={closeModal}
              className="px-6 py-2 text-[#47be07] border border-[#47be07] rounded-full hover:bg-[#47be07] hover:text-white transition-all font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return renderModalContent();
};

export default Modal;
