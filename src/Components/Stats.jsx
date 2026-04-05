import React from "react";

const Stats = () => {
  return (
    <div className="w-35/36 mx-auto bg-violet-700 rounded-2xl py-4 md:py-6 my-6">
      <div className="max-w-7xl mx-auto px-3 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Active Users */}
          <div className="flex-1 text-center text-white relative w-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-1 tracking-tighter">
              50K+
            </h2>
            <p className="text-purple-100 text-lg md:text-xl font-medium opacity-90">
              Active Users
            </p>

            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-white/20"></div>
          </div>

          {/* Premium Tools */}
          <div className="flex-1 text-center text-white relative w-full">
            <h2 className="text-3xl font-bold md:text-5xl  mb-3 tracking-tighter">
              200+
            </h2>
            <p className="text-purple-100 text-lg md:text-xl font-medium opacity-90">
              Premium Tools
            </p>

            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/20"></div>
          </div>

          {/* Rating */}
          <div className="flex-1 text-center text-white w-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-tighter">
              4.9
            </h2>
            <p className="text-purple-100 text-lg md:text-xl font-medium opacity-90">
              Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
