import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";

const VideoCardComponent = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-all cursor-pointer group"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative w-full h-52">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay and Icon */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center ">
            <FaPlayCircle className="text-white text-5xl drop-shadow-lg" />
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-sm font-semibold text-gray-700 mb-1">{item.title}</h2>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-black rounded-2xl overflow-hidden w-full max-w-3xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={item.src}
                controls
                autoPlay
                className="w-full h-auto rounded-t-2xl"
              />
            
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoCardComponent;
