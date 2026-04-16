import React from "react";

const StatItem = ({ icon, label, value, image }) => {
  return (
    <div className="flex flex-col items-start">
      {/* Circle Container */}
      <div className="w-20 h-20 rounded-full border-[3px] border-[#DD88CF] p-1 mb-2">
        <div className="w-full h-full rounded-full overflow-hidden relative flex items-center justify-center">
          {/* Background Image    with Blur */}
          <img
            src={image}
            alt="bg"
            className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-80"
          />
          {/* Dark overlay for icon visibility */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Icon */}
          <div className="relative z-10">{icon}</div>
        </div>
      </div>

      {/* Label */}
      <div className="text-sm md:text-base font-aldrich font-semibold text-[#4A144B] pl-1">
        {label} <span className="text-[#E996D1] ml-1">{value}</span>
      </div>
    </div>
  );
};

export default StatItem;
