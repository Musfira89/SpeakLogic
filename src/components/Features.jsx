import { useState } from "react";
import { FaDownload, FaPrint, FaInfoCircle } from "react-icons/fa";
import Modal from "./Modal";
import img1 from "../assets/3D-1.jpg";
import img2 from "../assets/3D-2.jpg";
import img3 from "../assets/3D-3.jpg";

const sections = [
  {
    number: 1,
    heading: "Start Learning Better Communication",
    description:
      "Promotes better communication by incorporating logic into everyday exchanges. This helps children become more expressive and responsive in their early years of development, encouraging open-minded dialogue and mutual respect.",
    image: img1,
  },
  {
    number: 2,
    heading: "Easy Access & Navigation",
    description:
      "Application Modeling Tutorial Communication Domain with Practical Examples Vol. I. It simplifies how you navigate complex topics using interactive modules and structured logic.",
    image: img2,
  },
  {
    number: 3,
    heading: "Increase Learning",
    description:
      "Includes problem and solution links for practical, hands-on understanding of logical thinking. It helps reinforce learning through engaging exercises tailored for all levels.",
    image: img3,
  },
  {
    number: 4,
    heading: "Explore Real World Scenarios",
    description:
      "Learn to apply communication techniques in everyday life with interactive examples that develop critical thinking and empathy.",
    image: img1,
  },
];

const appSections = [
  {
    number: 1,
    heading: "Child Learning Journey",
    description:
      "Track your child's growth and progress over time. Get insights on their learning and behavioral trends.",
    image: img1,
  },
  {
    number: 2,
    heading: "Interactive Assessments",
    description:
      "Interactive quizzes and assessments to gauge your child's development. Receive tailored suggestions for improvement.",
    image: img2,
  },
];

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

  return (
    <div className="px-4 sm:px-6 md:px-12 xl:px-24 py-16 bg-[#F9FAFB] min-h-screen">
      {/* Tabs */}
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

      {/* Tab Content */}
      {activeTab === "Download App" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {appSections.map((section, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all flex flex-col md:flex-row items-start md:items-center gap-6 border border-[#e2e8f0]"
            >
              {/* App Image */}
              <div className="relative flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
                <img
                  src={section.image}
                  alt="App"
                  className="w-full max-w-[220px] h-auto object-contain rounded-lg shadow-md"
                />
                <span className="absolute top-2 left-2 bg-[#47be07] text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                  #{section.number}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex-1 w-full">
                <h3 className="text-lg sm:text-lg font-bold text-[#1f2937] mb-3">
                  {section.heading}
                </h3>
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-4">
                  {expandedIndex === index
                    ? section.description
                    : section.description.slice(0, 100) + "... "}
                  <button
                    onClick={() => toggleShowMore(index)}
                    className="text-[#47be07] underline font-medium text-sm"
                  >
                    {expandedIndex === index ? "Show Less" : "Show More"}
                  </button>
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <button className="px-6 py-2 rounded-lg border-2 border-[#47be07] text-[#47be07] hover:bg-[#47be07] hover:text-white transition-all font-semibold text-sm">
                    View
                  </button>
                  <button
                    onClick={() => openModal("download", index)}
                    className="px-5 py-2 rounded-lg bg-[#47be07] text-white hover:bg-[#3aa506] transition-all font-semibold text-sm"
                  >
                    Download
                  </button>
                </div>
              </div>

              {/* Icon Buttons */}
              <div className="flex gap-4 md:flex-col mt-4 md:mt-0 self-start md:self-auto">
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
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all flex flex-col md:flex-row items-start md:items-center gap-6 border border-[#e2e8f0]"
            >
              {/* Book Image */}
              <div className="relative flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
                <img
                  src={section.image}
                  alt="Book"
                  className="w-full max-w-[220px] h-auto object-contain rounded-lg shadow-md"
                />
                <span className="absolute top-2 left-2 bg-[#47be07] text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                  #{section.number}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex-1 w-full">
                <h3 className="text-lg sm:text-xl font-bold text-[#1f2937] mb-3">
                  {section.heading}
                </h3>
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-4">
                  {expandedIndex === index
                    ? section.description
                    : section.description.slice(0, 100) + "... "}
                  <button
                    onClick={() => toggleShowMore(index)}
                    className="text-[#47be07] underline font-medium text-sm"
                  >
                    {expandedIndex === index ? "Show Less" : "Show More"}
                  </button>
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <button className="px-6 py-2 rounded-lg border-2 border-[#47be07] text-[#47be07] hover:bg-[#47be07] hover:text-white transition-all font-semibold text-sm">
                    View
                  </button>
                  <button
                    onClick={() => openModal("download", index)}
                    className="px-5 py-2 rounded-lg bg-[#47be07] text-white hover:bg-[#3aa506] transition-all font-semibold text-sm"
                  >
                    Download
                  </button>
                </div>
              </div>

              {/* Icon Buttons */}
              <div className="flex gap-4 md:flex-col mt-4 md:mt-0 self-start md:self-auto">
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
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal modal={modal} closeModal={closeModal} />
    </div>
  );
};

const IconButton = ({ icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#47be07] text-white flex items-center justify-center hover:bg-[#3aa506] transition-all shadow-md"
  >
    {icon}
  </button>
);

export default Features;
