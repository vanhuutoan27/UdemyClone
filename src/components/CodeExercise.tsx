import { Link } from "react-router-dom";

function CodeExercise() {
  return (
    <div className="flex gap-8 bg-[#f7f9fa] p-6">
      <div className="basis-1/3">
        <h3 className="text-2xl font-bold">Coding Exercises</h3>
        <p className="pb-6 pt-4 text-sm text-[#6a6f73]">
          This course includes our updated coding exercises so you can practice
          your skills as you learn.
        </p>
        <Link to="#!" className="pt-4 text-sm text-[#5624d0] underline">
          See a demo
        </Link>
      </div>
      <div style={{ flexBasis: "calc(66.6667% - 32px)" }} className="shadow-md">
        <img src="https://www.udemy.com/staticx/udemy/js/webpack/coding-exercises-demo-preview-desktop.2957bed27c3ae43a02824b61ad9cda03.png" />
      </div>
    </div>
  );
}

export default CodeExercise;
