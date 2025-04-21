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
      className="relative group flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image Section */}
      <div className="relative md:w-2/5 w-full">
        <img
          src={section.image}
          alt={section.heading}
          className="w-full h-full object-cover md:rounded-l-2xl rounded-t-2xl md:rounded-t-none"
        />
        <span className="absolute top-4 left-4 bg-[#47be07] text-white text-xs sm:text-sm px-3 py-1 rounded-full font-semibold shadow-md">
          #{section.number}
        </span>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#47be07] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 z-10 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <IconButton icon={<FaDownload />} onClick={() => openModal("download", index)} label="Download" />
          <IconButton icon={<FaPrint />} onClick={() => openModal("print", index)} label="Print" />
          <IconButton icon={<FaInfoCircle />} onClick={() => openModal("info", index)} label="Details" />
          <IconButton icon={<FaChevronDown />} onClick={() => openModal("type", index)} label="More" />
        </div>
      </div>

      {/* Content Section */}
      <div className="md:w-3/5 w-full px-6 py-5 flex flex-col justify-center bg-white">
        <h3 className="text-xl font-semibold text-gray-800 leading-tight mb-3">
          {section.heading}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {expandedIndex === index
            ? section.description
            : section.description.slice(0, 100) + "... "}
          {expandedIndex !== index && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleShowMore(index);
              }}
              className="text-[#47be07] underline font-medium text-sm ml-1"
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
            className="text-[#47be07] underline font-medium text-sm mt-2 self-start"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );

  const limitedSections = sections.slice(0, 4);

  return (
    <div className="px-4 sm:px-6 md:px-12 xl:px-24 py-16 bg-[#F9FAFB] min-h-screen">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row justify-center mb-12">
        <div className="flex gap-4 sm:gap-8 bg-white shadow-lg rounded-lg px-6 py-4 w-full sm:w-auto">
          {["Download Books", "Download App"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full sm:w-[160px] lg:w-[200px] text-center px-4 py-2 sm:px-6 sm:py-3 font-semibold rounded-md transition-all text-sm sm:text-base ${
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

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {(activeTab === "Download App" ? appSections : limitedSections).map(
          (section, index) => renderCard(section, index)
        )}
      </div>

      {/* Modal */}
      <Modal modal={modal} closeModal={closeModal} />
    </div>
  );
};

const IconButton = ({ icon, onClick, label }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="w-10 h-10 rounded-full bg-[#47be07] text-white flex items-center justify-center hover:bg-[#3aa506] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#47be07]"
    title={label}
  >
    {icon}
  </button>
);

export default Features;
