import React from "react";
import { FaBook, FaAppStore, FaLaptop, FaBox } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const LearningSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="rounded-[30px] px-8 py-16 bg-white shadow-sm transition-all duration-500 hover:shadow-90 mt-22">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={ref}>
        
        {/* Section 1: Books */}
        <div className="flex flex-col items-start text-left space-y-2 hover:scale-105 transform transition-all duration-300">
          <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-16 h-14 rounded-full bg-[#e8f7d4] text-[#41aa09] hover:bg-[#41aa09] hover:text-white shadow-lg transition-all duration-300">
              <FaBook size={22} />
            </div>
            <div>
              <p className="font-semibold text-xl text-[#41aa09]">Free Books</p>
              <p className="text-sm text-gray-600">Logic-based Learning</p>
              <p className="text-xs text-gray-400 mt">To help with the learning of the principle</p>
            </div>
          </div>
        </div>

        {/* Section 2: Apps */}
        <div className="flex flex-col items-start text-left space-y-2 hover:scale-105 transform transition-all duration-300">
          <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-16 h-14 rounded-full bg-[#e8f7d4] text-[#41aa09] hover:bg-[#41aa09] hover:text-white shadow-lg transition-all duration-300">
              <FaAppStore size={22} />
            </div>
            <div>
              <p className="font-semibold text-xl text-[#41aa09]">Free Apps</p>
              <p className="text-sm text-gray-600">For Problem Solving</p>
              <p className="text-xs text-gray-400">To help with the application of the principle</p>
            </div>
          </div>
        </div>

        {/* Section 3: Softwares */}
        <div className="flex flex-col items-start text-left space-y-2 hover:scale-105 transform transition-all duration-300">
          <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-16 h-14 rounded-full bg-[#e8f7d4] text-[#41aa09] hover:bg-[#41aa09] hover:text-white shadow-lg transition-all duration-300">
              <FaLaptop size={22} />
            </div>
            <div>
              <p className="font-semibold text-xl text-[#41aa09]">Free Softwares</p>
              <p className="text-sm text-gray-600">Learning & Application</p>
              <p className="text-xs text-gray-400">To help with the application of the principle</p>
            </div>
          </div>
        </div>

        {/* Section 4: Learning Kits */}
        <div className="flex flex-col items-start text-left space-y-2 hover:scale-105 transform transition-all duration-300">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-16 h-14 rounded-full bg-[#e8f7d4] text-[#41aa09] hover:bg-[#41aa09] hover:text-white shadow-lg transition-all duration-300">
              <FaBox size={22} />
            </div>
            <div>
              <p className="font-semibold text-xl text-[#41aa09]">Free Learning Kits</p>
              <p className="text-sm text-gray-600">Learning kits for All</p>
              <p className="text-xs text-gray-400">To help with the teaching of the principle</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LearningSection;
