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
      className="relative group flex flex-col rounded-3xl shadow-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image Section */}
      <div className="relative w-full">
        <img
          src={section.image}
          alt={section.heading}
          className="w-full h-80  object-cover rounded-t-3xl"
        />
        <span
          className="absolute top-0 left-0 bg-[#47be07] text-white text-[17px] px-3 py-2 font-bold shadow-md"
          style={{ borderBottomRightRadius: "20px" }}
        >
          #{section.number}
        </span>

        {/* Top-Right Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <IconButton
            icon={<FaDownload size={16} />}
            onClick={() => openModal("download", index)}
            label="Download"
          />
          <IconButton
            icon={<FaPrint size={16} />}
            onClick={() => openModal("print", index)}
            label="Print"
          />
          <IconButton
            icon={<FaInfoCircle size={16} />}
            onClick={() => openModal("info", index)}
            label="Details"
          />
          <IconButton
            icon={<FaChevronDown size={17} />}
            onClick={() => openModal("type", index)}
            label="More"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-6 py-5 flex flex-col justify-center bg-white">
        <h3 className="text-lg font-bold text-gray-800 leading-tight mb-3">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 ">
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
    className="w-11 h-11 rounded-full bg-[#47be07] text-white flex items-center justify-center hover:bg-[#3aa506] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#47be07]"
    title={label}
  >
    {icon}
  </button>
);

export default Features;
