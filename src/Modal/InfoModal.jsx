import React from "react"; 
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: "-50%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
  exit: { y: "-50%", opacity: 0 },
};

const InfoModal = ({ isOpen, onClose, book }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className="bg-white rounded-lg p-6 w-full max-w-md mx-4"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-lg"
            >
              ✕
            </button>
          </div>
          <p className="text-gray-600">{book.description}</p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default InfoModal;
