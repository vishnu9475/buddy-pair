import React from "react";
import { CheckCircle2 } from "lucide-react";

const FilterOption = ({ label, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between py-4 border-b border-gray-100 cursor-pointer group pr-4"
    >
      <span className="text-[#4B164C] text-base md:text-lg font-medium opacity-80 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
      <div className={`transition-all duration-300 ${isSelected ? "text-[#D68FC3]" : "text-gray-300"}`}>
        <CheckCircle2 size={24} />
      </div>
    </div>
  );
};

export default FilterOption;
