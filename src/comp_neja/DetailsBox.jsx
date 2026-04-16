import React from "react";

const DetailsBox = ({
  data = {
    "Father's Name": "Abc",
    "Father's Occupation": "Business",
    "Mother's Name": "Xyz",
  },
  formatLabel = (label) => label,
  formatValue = (value) => value,
  containerClass = "",
}) => {
  return (
    <div
      className={`w-full rounded-xl border border-gray-100 shadow-md bg-white p-5 ${containerClass}`}
    >
        
      <div className="space-y-2">
        {Object.entries(data).map(([label, value], index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-sm"
          >
            {/* Label */}
            <span style={{ fontFamily: "Aldrich" }} className="text-gray-700 text-left">
              {formatLabel(label)}
            </span>

            
            <span className="text-gray-700 text-center">:</span>

            {/* Value */}
            <span style={{ fontFamily: "Aldrich" }} className="text-gray-700 text-left">
              {formatValue(value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsBox;
