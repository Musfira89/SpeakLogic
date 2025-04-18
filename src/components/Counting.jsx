import React from "react";
import { FaBook, FaAppStore, FaLaptop, FaBox } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const items = [
  {
    icon: <FaBook size={22} />,
    title: "Free Books",
    description: "To help with the learning of the principle",
  },
  {
    icon: <FaAppStore size={22} />,
    title: "Free Apps",
    description: "To help with the application of the principle",
  },
  {
    icon: <FaLaptop size={22} />,
    title: "Free Software",
    description: "To help with the application of the principle",
  },
  {
    icon: <FaBox size={22} />,
    title: "Free Learning Kits",
    description: "To help with the teaching of the principle",
  },
];

const LearningSection = () => {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className=" px-2 sm:px-4 md:px-2 py-10 sm:py-16  transition-all duration-500 mt-22">
      <div
        ref={ref}
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left space-y-2 hover:scale-[1.03] transform transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#e8f7d4] text-[#41aa09] hover:bg-[#41aa09] hover:text-white shadow-lg transition-all duration-300 shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-lg sm:text-xl text-[#41aa09]">
                  {item.title}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningSection;
