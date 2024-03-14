import { Check } from "lucide-react";

function TableContent() {
  return (
    <div className="border-2 p-6">
      <h2 className="mb-4 text-2xl font-bold">What you'll learn</h2>
      <ul className="grid grid-cols-2 gap-x-10">
        <li className="flex py-1 text-sm">
          <Check size={16} className="mr-2 mt-1" /> Extensive, informative and
          interesting video lecture
        </li>
        <li className="flex py-1 text-sm">
          <Check size={16} className="mr-2 mt-1" /> Complete Code demonstrated
          in lecture
        </li>
        <li className="flex py-1 text-sm">
          <Check size={16} className="mr-2 mt-1" /> Lab Exercises
        </li>
        <li className="flex py-1 text-sm">
          <Check size={16} className="mr-2 mt-1" /> Lab Solution Sets
        </li>
        <li className="flex py-1 text-sm">
          <Check size={16} className="mr-2 mt-1" /> All Powerpoint
          Demonstrations Used in Course
        </li>
        <li className="flex py-1 text-sm">
          <Check size={16} className="mr-2 mt-1" /> Instructor contact Email for
          questions and clarifications
        </li>
        <li className="flex py-1 text-sm">
          <Check size={16} className="mr-2 mt-1" /> Coverage of all important
          primary Javascript concepts
        </li>
      </ul>
    </div>
  );
}

export default TableContent;
