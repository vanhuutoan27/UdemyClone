import Breadcrumb from "./Breadcrumb";
import CourseHeader from "./CourseHeader";

function Header() {
  return (
    <div className="bg-[#2d2f31] text-white">
      <div className="mx-auto max-w-[1184px] py-8">
        <div className="mx-12 mb-4 max-w-[700px]">
          {/* BREADCRUMB */}
          <Breadcrumb />

          {/* COURSE HEADER */}
          <CourseHeader />
        </div>
      </div>
    </div>
  );
}

export default Header;
