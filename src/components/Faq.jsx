import { useState } from "react";
import arrow from "../assets/faq.png";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is The Speak Logic Project?",
    answer:
      "The Speak Logic Project was started to promote better communication. The Speak Logic Project is a non profit organization that promotes better communication. To learn more about The Speak Logic Project and how The Speak Logic Project promotes better communication, you can click in this link.",
  },
  {
    question: "Why does The Speak Logic Project exist?",
    answer:
      "The importance of communication cannot be disregarded in life. Since everything that we do is driven by communication, when we commit error in communication, there is a chance that the error leads us to make mistakes in what we do. With that, we can see there is a need for better communication. The Speak Logic Project exists to promote better communication by helping people communicate without error",
  },
  {
    question: "What is communication?",
    answer:
      "Rather than answering this question as it is asked, it is better to substitute it to another question. For instance, what is the importance of communication? Is communication important? Since communication is the driving force of everything that we do, we can see that communication is very important within what we do. We can also say that communication is very important in life.s",
  },
  {
    question: "Why promote better communication?",
    answer:
      "To understand the importance of communication it is worthwhile to look at the relationship of communication related to what we do. With that, we can look at the relationship of errors that we make in our communications related to problems that we develop in life. To answer this question, see chapter 2 and chapter 3 of Understanding The Principle of Communication for more information.",
  },
  {
    question: "What can I do to get started?",
    answer: `In order to get started, you can do the following. Download the books , Do the exercises, Participate in the forum ,Perform analysis of communications that need to be analyzed, Refer others to the website or help others to be aware of The Speak Logic Project`,
  },

  {
    question: "Why proper communication is important?",
    answer:
      "Since a function that we execute is related to our communication, the execution of that function is simply driven by our communication. In this case, if we commit error in the communication that drives the function, the function will also execute with error. If we can identify error in the communication that drives the function and get it corrected, then the function can be executed without error. Since communication drives our functions and proper communications enable us to execute our functions without error, thus proper communication is very important to us.",
  },
];

// Animation variants
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row px-6 md:px-32 py-16 items-start gap-12 font-sora leading-relaxed mb-28">
      {/* Left Section */}
      <div className="w-full lg:w-[40%]">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Have a question? Check out the FAQ
        </h2>
        <p className="text-gray-600 mb-10">
          Here are some compiled questions and answers. If you have more
          questions, feel free to contact us.
        </p>
        <img
          src={arrow}
          alt="Arrow"
          className="w-[320px] h-[250px] hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Section (FAQ List) */}
      <div className="w-full lg:w-[55%] flex flex-col gap-16">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={faqItemVariants}
              className="transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full flex justify-between items-center text-left text-base text-gray-800 hover:text-[#379f00] transition-colors"
              >
                <span className={`${isOpen ? "text-[#379f00]" : ""}`}>
                  {faq.question}
                </span>
                {isOpen ? (
                  <FaChevronDown className="text-[#379f00]" />
                ) : (
                  <FaChevronRight className="text-gray-500" />
                )}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="mt-2 pl-1 text-gray-700 text-sm overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
