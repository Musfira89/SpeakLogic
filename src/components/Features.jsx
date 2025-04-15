import { FaDownload, FaPrint, FaInfoCircle } from "react-icons/fa";

const sections = [
  {
    heading: "Start Learning Better Communication",
    title: "Purpose of Speak Logic",
    description:
      "Promotes better communication by incorporating logic into everyday exchanges.",
    image: "/book1.svg",
  },
  {
    heading: "Easy Access & Navigation",
    title: "Start Modeling",
    description:
      "Application Modeling Tutorial Communication Domain with Practical Examples Vol. I",
    image: "/book1.svg",
  },
  {
    heading: "Interactive Learning",
    title: "Increase Learning",
    description:
      "Includes problem and solution links for practical, hands-on understanding of logical thinking.",
    image: "/book1.svg",
  },
];

const Features = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 xl:px-24 py-16 bg-[#F9FAFB] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-5 flex flex-col md:flex-row items-start md:items-center gap-6 transition-transform transform hover:scale-[1.02]"
          >
            {/* Book Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
  <img
    src={section.image}
    alt="Book"
    className="w-full max-w-[200px] sm:max-w-[220px] md:w-48 h-auto object-contain rounded-lg shadow-md"
  />
</div>


            {/* Content */}
            <div className="flex-1 w-full">
              <p className="text-xs text-[#6B7280] mb-1 font-semibold uppercase tracking-wide">
                {section.heading}
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-[#333333] mb-2">
                {section.title}
              </h3>
              <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-4">
                {section.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-auto">
                <button className="px-5 py-2 rounded-lg border-2 border-[#47be07] text-[#47be07] hover:bg-[#47be07] hover:text-white transition-all font-semibold text-sm">
                  View
                </button>
                <button className="px-5 py-2 rounded-lg bg-[#47be07] text-white hover:bg-[#3aa506] transition-all font-semibold text-sm">
                  Download
                </button>
              </div>
            </div>

            {/* Icon Buttons */}
            <div className="flex gap-4 md:flex-col mt-4 md:mt-0 self-start md:self-auto">
              <IconButton icon={<FaDownload />} />
              <IconButton icon={<FaPrint />} />
              <IconButton icon={<FaInfoCircle />} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// IconButton Component
const IconButton = ({ icon }) => (
  <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#47be07] text-white flex items-center justify-center hover:bg-[#3aa506] transition-all">
    {icon}
  </button>
);

export default Features;
