// components/VideoModal.jsx
import React from "react";

const VideoModal = ({ videoSrc, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full h-[500px] rounded-lg object-contain"
        />
      </div>
    </div>
  );
};

export default VideoModal;
