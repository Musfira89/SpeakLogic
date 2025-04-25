import React, { useState } from "react";
import { motion } from "framer-motion";
import GoogleIcon from "../assets/google.png";
import { Rating, Avatar } from "@mui/material";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    name: "Sarah Williams",
    date: "a year ago",
    role: "Author, 'Communication Unlocked'",
    rating: 5,
    text: "The Speak Logic Project has completely transformed how we think about communication. The resources provided helped refine my understanding of effective communication, which I have implemented in my writing and lectures. It's truly invaluable for anyone looking to improve their communication skills.",
  },
  {
    id: 2,
    name: "David Johnson",
    date: "8 months ago",
    role: "Editor, 'Better Dialogues'",
    rating: 4,
    text: "I've been in the publishing industry for years, and I’ve seen countless communication initiatives. But The Speak Logic Project stands out. It provides structured, practical methods to address common communication barriers that authors, editors, and professionals face daily.",
  },
  {
    id: 3,
    name: "Emma Brown",
    date: "5 months ago",
    role: "Speaker & Workshop Leader",
    rating: 5,
    text: "After attending a workshop by The Speak Logic Project, I realized how much of an impact small changes in communication techniques can have. It's truly a game-changer, and I’ve applied these techniques in my personal and professional life to amazing results.",
  },
];

const Testimonial = () => {
  const [expanded, setExpanded] = useState([]);
  const [hovered, setHovered] = useState(1); // Default center card is active (index 1)

  const toggleReadMore = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div className="bg-gray-50 py-16">
      {/* Heading */}
      <div className="text-center mb-10 px-4 sm:mb-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Testimonials
        </h1>
        <div className="w-16 h-1 bg-[#53c018] mx-auto mt-2 mb-3 rounded" />
        <p className="text-sm text-gray-600 mb-12 leading-relaxed max-w-xl mx-auto">
          See how The Speak Logic Project is transforming the way people
          communicate.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4 mx-auto">
        {testimonials.map((testimonial, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true, // Trigger animation once when the card is in view
            threshold: 0.3, // 30% of the card must be visible before triggering
          });

          return (
            <motion.div
              ref={ref}
              key={testimonial.id}
              className={`bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#48ac12] transition-all duration-300 ${
                hovered === index
                  ? "hover:shadow-xl hover:scale-[1.02]" // Apply hover effect on active card
                  : "hover:scale-[1]" // Regular hover effect for other cards
              }`}
              initial={{ opacity: 0, y: 50 }} // Cards start from the bottom (y: 50)
              animate={{
                opacity: inView ? 1 : 0, // Fade in when in view
                y: inView ? 0 : 50, // Move to original position when in view
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.3, // Staggered entry effect
              }}
              onMouseEnter={() => setHovered(index)} // Set hovered card
              onMouseLeave={() => setHovered(1)} // Reset to center card
            >
              {/* Profile Info */}
              <div className="flex items-start gap-4 mb-4">
                <Avatar
                  src={GoogleIcon}
                  sx={{ width: 50, height: 50 }}
                  alt="Google"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-800 text-md">
                      {testimonial.name}
                    </h3>
                    <span className="text-gray-400 text-xs">
                      • {testimonial.date}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1.5">
                    {testimonial.role}
                  </p>
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    size="small"
                    sx={{
                      mt: 1,
                      "& .MuiRating-iconFilled": {
                        background: "linear-gradient(45deg, #f43f5e, #facc15)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      },
                    }}
                  />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm italic">
                {expanded[index]
                  ? `"${testimonial.text}"`
                  : `"${testimonial.text.slice(0, 150)}..."`}
              </p>

              {/* Read More */}
              {testimonial.text.length > 150 && (
                <button
                  className="text-[#3d960d] text-sm font-medium mt-2 underline hover:text-[#2b7c09]"
                  onClick={() => toggleReadMore(index)}
                >
                  {expanded[index] ? "Read Less" : "Read More"}
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
