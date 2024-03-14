import { useEffect, useState } from "react";
import Header from "../components/Header";
import TopCompanies from "../components/TopCompanies";
import CodeExercise from "../components/CodeExercise";
import TableContent from "../components/TableContent";
import CourseContent from "../components/CourseContent";
import Purchase from "../components/Purchase";

function CoursePage() {
  const [isSticky, setIsSticky] = useState(false);
  const headerHeight = 320;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > headerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerHeight]);

  return (
    <>
      {/* COURSE HEADER */}
      <Header />

      <div className="relative mx-auto flex h-[2000px] max-w-[1184px] justify-between py-8">
        {/* Left column for main content */}

        <div
          className={`${isSticky ? "pr-0" : "pr-12"} flex max-w-[796px] flex-grow flex-col gap-8 px-12`}
        >
          {/* WHAT WILL LEARN */}
          <TableContent />

          {/* TOP COMPANIES */}
          <TopCompanies />

          {/* EXERCISE */}
          <CodeExercise />

          {/* COURSE CONTENT */}
          <CourseContent />
        </div>

        {/* Right column for the purchase card */}
        <div
          className={`${isSticky ? "sticky top-0 -mt-8 h-[130vh]" : "absolute -top-96 mt-8 "} right-0`}
        >
          <Purchase isSticky={isSticky} />
        </div>
      </div>
    </>
  );
}

export default CoursePage;
