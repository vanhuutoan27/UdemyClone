import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function Breadcrumb() {
  return (
    <div className="flex items-center gap-1 p-1">
      <Link to="#!" className="text-sm font-bold text-[#c0c4fc]">
        Development
      </Link>
      <ChevronRight size={12} strokeWidth={3} className="text-white" />
      <Link to="#!" className="text-sm font-bold text-[#c0c4fc]">
        Web Development
      </Link>
      <ChevronRight size={12} strokeWidth={3} className="text-white" />
      <Link to="#!" className="text-sm font-bold text-[#c0c4fc]">
        JavaScript
      </Link>
    </div>
  );
}

export default Breadcrumb;
