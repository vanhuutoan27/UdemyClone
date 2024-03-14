import {
  AlarmClock,
  Blend,
  Code,
  File,
  FolderDown,
  MonitorPlay,
  Smartphone,
  Trophy,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

function Purchase({ isSticky }: { isSticky: boolean }) {
  return (
    <div className="mx-12 my-8 mt-8 w-[340px] overflow-hidden border-2 bg-white shadow-md">
      {/* VIDEO ILLUSTRATION */}
      {!isSticky && (
        <div className="overflow-hidden">
          <img
            alt="Course Preview"
            src="https://img-b.udemycdn.com/course/750x422/8324_fa84_13.jpg"
            className="w-full object-cover"
          />
        </div>
      )}

      <div className="p-6">
        {/* PRICE */}
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[32px] font-bold">₫299,000</p>
          <p className="text-base font-semibold text-[#6a6f73] line-through">
            ₫399,000
          </p>
          <p className="text-sm font-semibold text-[#2d2f31]">25% off</p>
        </div>
        <div className="-mt-1 mb-2 flex items-center text-sm text-[#b32d0f]">
          <AlarmClock size={16} />
          <span className="mr-1 font-bold">12 hours</span>left at this price!
        </div>

        {/* BUTTON TO ACTION */}
        <button className="mb-2 mt-4 h-12 w-full bg-[#8710d8]/80 px-3 font-bold text-white transition-all duration-150 hover:bg-[#8710d8]">
          Add to cart
        </button>
        <button className="mb-2 h-12 w-full border-2 border-black font-bold transition-all duration-150 hover:bg-[#1739531f]">
          Buy now
        </button>

        {/* REFUND */}
        <p className="mb-2 mt-4 text-center text-[12px] text-[#2d2f31]">
          30-Day Money-Back Guarantee
        </p>

        {/* COURSE CONTENT */}
        <div className="mb-4 pt-4">
          <h3 className="mb-2 text-[16px] font-bold">This course includes:</h3>
          <ul>
            <li className="flex items-center gap-4 py-1 text-sm">
              <MonitorPlay size={16} />
              <span>7.5 hours on-demand video</span>
            </li>

            <li className="flex items-center gap-4 py-1 text-sm">
              <Code size={16} />
              <span>6 coding exercises</span>
            </li>

            <li className="flex items-center gap-4 py-1 text-sm">
              <File size={16} />
              <span>1 article</span>
            </li>

            <li className="flex items-center gap-4 py-1 text-sm">
              <FolderDown size={16} />
              <span>25 downloadable resources</span>
            </li>

            <li className="flex items-center gap-4 py-1 text-sm">
              <Smartphone size={16} />
              <span>Access on mobile and TV</span>
            </li>

            <li className="flex items-center gap-4 py-1 text-sm">
              <Blend size={16} />
              <span>Full lifetime access</span>
            </li>

            <li className="flex items-center gap-4 py-1 text-sm">
              <Trophy size={16} />
              <span>Certificate of completion</span>
            </li>
          </ul>
        </div>

        {/* BUTTON TO ACTION 2 */}
        <div className="flex justify-between">
          <Link
            to="#!"
            className="h-10 text-sm font-bold underline decoration-[#8072e6] decoration-1 underline-offset-4 transition-all duration-150 hover:no-underline"
          >
            Share
          </Link>
          <Link
            to="#!"
            className="h-10 text-sm font-bold underline decoration-[#8072e6] decoration-1 underline-offset-4 transition-all duration-150 hover:no-underline"
          >
            Gift this course
          </Link>
          <Link
            to="#!"
            className="h-10 text-sm font-bold underline decoration-[#8072e6] decoration-1 underline-offset-4 transition-all duration-150 hover:no-underline"
          >
            Apply Coupon
          </Link>
        </div>

        {/* COUPON */}
        <div className="my-2 flex items-center justify-between border-2 border-dotted p-2">
          <div className="flex flex-col text-[#6a6f73]">
            <span className="text-[12px]">
              <span className="text-sm font-bold">VHT27FPT171981 </span>
              is applied
            </span>
            <span className="text-[12px]">Udemy coupon</span>
          </div>
          <X
            size={20}
            className="cursor-pointer text-[#8072e6] hover:text-[#8072e6]/80"
          />
        </div>
        <div className="relative w-full">
          <input
            type="text"
            className="h-10 w-full border-2 border-black px-4"
            placeholder="Enter Coupon"
          />
          <button className="absolute right-0 h-10 bg-black px-6 text-sm font-bold text-white hover:bg-black/80">
            Apply
          </button>
        </div>

        {/* TRY UDEMY */}
        <div className="border-t-2 pt-6">
          <h3 className="mb-2 text-[19px] font-bold">
            Training 5 or more people?
          </h3>
          <p className="mb-2 text-sm">
            Get your team access to 25,000+ top Udemy courses anytime, anywhere.
          </p>
          <button className="mb-2 h-12 w-full border-2 border-black font-bold transition-all duration-150 hover:bg-[#1739531f]">
            Try Udemy Business
          </button>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
