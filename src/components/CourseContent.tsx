import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type ContentItem = {
  title: string;
  length: string;
  preview?: boolean;
  questions?: number;
};

type Section = {
  title: string;
  lectures: number;
  length: string;
  content: ContentItem[];
};

// A helper function to sum up lengths (assumes all lengths are in format "hh:mm")
const sumLengths = (contents: ContentItem[]): string => {
  let totalMinutes = contents.reduce((acc, item) => {
    const [hours, minutes] = item.length.split(":").map(Number);
    return acc + hours * 60 + minutes;
  }, 0);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes.toString().padStart(2, "0")}m`;
};

function CourseContent() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [allExpanded, setAllExpanded] = useState(false);

  const sections: Section[] = [
    {
      title: "Bonus: Mark's JavaScript Workbook",
      lectures: 1,
      length: "1min",
      content: [{ title: "JavaScript Development Workbook", length: "00:09" }],
    },
    {
      title: "JavaScript 2023/2024 Edition",
      lectures: 23,
      length: "16min",
      content: [
        { title: "Output with JavaScript", length: "13:47" },
        { title: "Variables in JavaScript", length: "12:34" },
        { title: "Math with JavaScript", length: "09:38" },
      ],
    },
    {
      title: "Beyond the Basics",
      lectures: 1,
      length: "16min",
      content: [
        {
          title: "JavaScript Testing and Automated Testing with AI",
          length: "15:38",
        },
      ],
    },
  ];

  // Calculate totals
  const totalSections = sections.length;
  const totalLectures = sections.reduce(
    (acc, section) => acc + section.lectures,
    0,
  );
  const totalLength = sumLengths(
    sections.flatMap((section) => section.content),
  );

  const collapseAllSections = () => {
    setOpenSections({});
    setAllExpanded(false);
  };

  const expandAllSections = () => {
    setOpenSections(
      sections.reduce(
        (acc, section) => {
          acc[section.title] = true;
          return acc;
        },
        {} as { [key: string]: boolean },
      ),
    );
    setAllExpanded(true);
  };

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="p-6">
      <h3 className="pb-4 text-2xl font-bold">Course content</h3>
      <div className="mb-4 flex justify-between">
        <span className="text-sm text-[#2d2f31]">
          {totalSections} sections • {totalLectures} lectures • {totalLength}{" "}
          total length
        </span>
        {!allExpanded ? (
          <button
            className="text-sm font-bold text-[#5624d0]"
            onClick={expandAllSections}
          >
            Expand all sections
          </button>
        ) : (
          <button
            className="text-sm font-bold text-[#5624d0]"
            onClick={collapseAllSections}
          >
            Collapse all sections
          </button>
        )}
      </div>
      <div>
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col border-2 bg-[#f7f9fa]">
            <div
              className="flex cursor-pointer justify-between px-6 py-4"
              onClick={() => toggleSection(section.title)}
            >
              <div className="flex items-center gap-2">
                {openSections[section.title] ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
                <span className="text-sm font-bold">{section.title}</span>
              </div>
              <span className="text-sm">
                {section.lectures} lectures • {section.length}
              </span>
            </div>
            {openSections[section.title] && (
              <div className="mt-2 border-2 bg-white px-6">
                {section.content.map((item, contentIndex) => (
                  <div key={contentIndex} className="flex justify-between py-4">
                    <span className="text-sm">{item.title}</span>
                    <span className="text-sm">{item.length}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseContent;
