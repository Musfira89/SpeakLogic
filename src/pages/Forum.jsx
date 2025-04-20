import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiMessageSquare, FiBookOpen, FiPlus } from "react-icons/fi";
import Footer from "../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const dummyPosts = [
  {
    id: 1,
    title: "How can we improve logical communication in schools?",
    author: "Sarah M.",
    date: "Apr 18, 2025",
  },
  {
    id: 2,
    title: "What are examples of daily communication errors?",
    author: "James K.",
    date: "Apr 17, 2025",
  },
  {
    id: 3,
    title: "How do media statements influence perception?",
    author: "Lina R.",
    date: "Apr 16, 2025",
  },
];

const Forum = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState("forum");

  return (
    <div className="min-h-screen flex flex-col font-sora text-gray-800 bg-gradient-to-b from-white to-[#f5f3f0]">
      {/* Header */}
      <section className="relative h-[45vh] bg-gradient-to-r from-[#47be07] via-[#3e9e0a] to-[#47be07] flex items-center justify-center text-white text-center px-4">
        <motion.div
          className="z-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-3 drop-shadow">
            FORUM
          </h1>
          <nav className="text-sm font-medium flex justify-center space-x-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>&gt;</span>
            <span>Forum</span>
          </nav>
        </motion.div>
      </section>

      {/* Sections */}
      <main className="flex-1 px-4 sm:px-8 lg:px-20 py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {[
            {
              key: "forum",
              icon: (
                <FiMessageSquare className="text-[#47be07] text-2xl mt-1" />
              ),
              title: "Community Forum",
              text: "Join discussions, ask meaningful questions, and connect with other members here.",
            },
            {
              key: "log",
              icon: <FiBookOpen className="text-[#47be07] text-2xl mt-1" />,
              title: "Miscommunication Log",
              text: "Document and reflect on real-world communication errors and improve together.",
            },
          ].map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-[1.02] duration-300"
            >
              <div className="flex items-start gap-4">
                {info.icon}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-slate-800 mb-2">
                    {info.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {info.text}
                  </p>
                  <button
                    onClick={() => setActiveSection(info.key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium shadow transition-all duration-300 ${
                      activeSection === info.key
                        ? "bg-[#3e9e0a] text-white"
                        : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    {activeSection === info.key ? "Active" : "Open Section"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Forum Section */}
        {activeSection === "forum" && (
          <motion.section
            className="rounded-3xl bg-white p-4 sm:p-6 md:p-10 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
              <h3 className="text-base sm:text-xl md:text-2xl font-bold text-slate-800">
                Recent Discussions
              </h3>
              <button
                onClick={() => setShowModal(true)}
                className="self-start flex items-center gap-1 sm:gap-2 bg-[#3e9e0a] text-white px-4 py-2 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm hover:bg-[#47be07] transition shadow"
              >
                <FiPlus className="text-xs sm:text-base" />
                New Topic
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dummyPosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-2xl bg-slate-50 p-5 shadow hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border border-slate-200"
                >
                  <h4 className="text-sm font-semibold text-slate-800 mb-2">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {post.author} • {post.date}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Error Log Section */}
        {activeSection === "log" && (
          <motion.section
            className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Miscommunication Log
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              This is your space to reflect on unclear or misleading
              communication you encounter in daily life — news, ads, or
              conversations. Share it here and let’s untangle it together.
            </p>
          </motion.section>
        )}
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-slate-800">
              Start a New Topic
            </h3>
            <input
              type="text"
              placeholder="Topic Title"
              className="w-full border border-slate-300 p-2 rounded mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#b9ef9f]"
            />
            <textarea
              placeholder="Write your message here..."
              rows={4}
              className="w-full border border-slate-300 p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#b9ef9f]"
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="text-sm text-gray-500 hover:underline"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#3e9e0a] text-white text-sm px-4 py-2 rounded hover:bg-[#47be07]"
              >
                Post
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Forum;
