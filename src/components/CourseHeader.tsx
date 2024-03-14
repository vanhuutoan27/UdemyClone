import { FaStar } from "react-icons/fa";
import { PiSealWarningFill, PiSubtitlesFill } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CourseHeader() {
  return (
    <div className="flex flex-col gap-4">
      {/* COURSE NAME */}
      <h2 className="text-[32px] font-bold">Javascript for Beginners</h2>

      {/* DESCRIPTION */}
      <p className="mb-2 text-[19px]">
        Learn javascript online and supercharge your web design with this
        Javascript for beginners training course.
      </p>

      {/* RATING */}
      <div className="flex items-center gap-2">
        <div className="flex items-center text-[#f69c08]">
          <span className="mr-1 text-sm font-bold">4.5</span>
          <FaStar className="text-sm" />
          <FaStar className="text-sm" />
          <FaStar className="text-sm" />
          <FaStar className="text-sm" />
          <FaStarHalfStroke className="text-sm" />
        </div>
        <span className="text-sm text-[#c0c4fc] underline">
          (2,830 ratings)
        </span>
        <span className="text-sm">22,433 students</span>
      </div>

      {/* CREATED */}
      <div>
        <span className="text-sm">Created by </span>
        <Link to="#!" className="text-sm text-[#c0c4fc] underline">
          SkillSprints Inc.
        </Link>
      </div>

      {/* MORE INFORMATION */}
      <div className="flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <PiSealWarningFill />
          <span>Last updated 7/2023</span>
        </div>
        <div className="flex items-center gap-2">
          <TbWorld />
          <span>English</span>
        </div>
        <div className="flex items-center gap-2">
          <PiSubtitlesFill />
          <span>English [Auto]</span>
        </div>
      </div>
    </div>
  );
}

export default CourseHeader;
