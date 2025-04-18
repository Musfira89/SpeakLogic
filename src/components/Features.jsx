import { useState } from "react";
import {
  FaDownload,
  FaPrint,
  FaInfoCircle,
  FaChevronDown,
} from "react-icons/fa";
import Modal from "./Modal";
import { sections, appSections } from "../data/book";

const Features = () => {
  const [activeTab, setActiveTab] = useState("Download Books");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [modal, setModal] = useState({
    open: false,
    type: "",
    sectionIndex: null,
  });

  const toggleShowMore = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const openModal = (type, index) => {
    setModal({ open: true, type, sectionIndex: index });
  };

  const closeModal = () => {
    setModal({ open: false, type: "", sectionIndex: null });
  };

  const renderCard = (section, index) => (
    <div
      key={index}
      className="relative group flex md:flex-row flex-col overflow-hidden rounded-2xl shadow-xl border border-gray-300 bg-white transition-all duration-500 md:h-[260px]"
    >
      <div className="relative md:w-[40%] w-full cursor-pointer group/image z-10">
        <img
          src={section.image}
          alt="Visual"
          className="w-full h-full object-cover rounded-l-2xl"
        />
        <span className="absolute top-4 left-4 bg-[#47be07] text-white text-xs px-3 py-1 rounded-full font-semibold shadow z-20">
          #{section.number}
        </span>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-100%] w-full h-full bg-[#47be07] opacity-20 group-hover/image:left-0 transition-all duration-700 ease-in-out" />
        </div>
        {/* Centered Icons */}
        <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex gap-2">
          <IconButton
            icon={<FaDownload />}
            onClick={() => openModal("download", index)}
          />
          <IconButton
            icon={<FaPrint />}
            onClick={() => openModal("print", index)}
          />
          <IconButton
            icon={<FaInfoCircle />}
            onClick={() => openModal("info", index)}
          />
          <IconButton
            icon={<FaChevronDown />}
            onClick={() => openModal("type", index)}
          />
        </div>
      </div>

      <div className="md:w-[60%] w-full px-6 py-5 flex flex-col justify-center z-10 transition-all duration-500 group-hover/image:backdrop-blur-sm">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-[1.2rem] xl:text-[1.3rem] font-sora font-bold text-[#1f2937] mb-3 leading-snug tracking-normal">
          {section.heading}
        </h3>

        <p className="text-[0.7rem] sm:text-sm md:text-base lg:text-[0.80rem] xl:text-[0.9rem] font-sora text-[#4B5563] leading-relaxed mb-2 tracking-normal">
          {expandedIndex === index
            ? section.description
            : section.description.slice(0, 100) + "... "}
          {expandedIndex !== index && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleShowMore(index);
              }}
              className="text-[#47be07] underline font-sora font-medium text-xs sm:text-sm lg:text-xs ml-1"
            >
              Show More
            </button>
          )}
        </p>

        {expandedIndex === index && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleShowMore(index);
            }}
            className="text-[#47be07] underline font-sora font-medium text-xs sm:text-sm lg:text-xs self-start mt-1"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );

  // Filter sections to show only the first 4 books
  const limitedSections = sections.slice(0, 4);

  return (
    <div className="px-4 sm:px-6 md:px-12 xl:px-24 py-16 bg-[#F9FAFB] min-h-screen">
      <div className="flex flex-col sm:flex-row justify-center mb-12">
        <div className="flex gap-8 bg-white shadow-lg rounded-lg px-8 py-4 w-full sm:w-auto">
          {["Download Books", "Download App"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full sm:w-[200px] lg:w-[240px] text-center px-6 py-3 font-semibold rounded-md transition-all text-xs sm:text-sm md:text-md ${
                activeTab === tab
                  ? "bg-[#47be07] text-white shadow-md"
                  : "text-[#47be07] hover:bg-[#ecfce1]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {(activeTab === "Download App" ? appSections : limitedSections).map(
          (section, index) => renderCard(section, index)
        )}
      </div>

      <Modal modal={modal} closeModal={closeModal} />
    </div>
  );
};

const IconButton = ({ icon, onClick }) => (
  <button
  onClick={onClick}
  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#47be07] text-white flex items-center justify-center hover:bg-[#3aa506] transition-all shadow-md"
>
  {icon}
</button>
);

export default Features;
