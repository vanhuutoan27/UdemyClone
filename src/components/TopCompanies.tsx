function TopCompanies() {
  return (
    <div className="flex flex-col gap-6 border-2 p-6">
      <div>
        <span className="text-sm font-bold">
          Top companies offer this course to their employees
        </span>
        <p className="text-[#6a6f73]">
          This course was selected for our collection of top-rated courses
          trusted by businesses worldwide. {""}
          <span className="text-sm text-[#401b9c] underline">Learn more</span>
        </p>
      </div>
      <div className="flex justify-between">
        <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" />
        <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" />
        <img src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" />
        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" />
        <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" />
      </div>
    </div>
  );
}

export default TopCompanies;
