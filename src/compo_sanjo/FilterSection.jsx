import React from "react";
import FilterOption from "./FilterOption";

const FilterSection = ({ title, options, selectedOption, onOptionClick }) => {
  return (
    <div className="mb-10 lg:mb-12">
      <h3
        className="text-2xl md:text-3xl font-medium text-[#4B164C] mb-6 font-['Aldrich']"
      >
        {title}
      </h3>
      <div className="flex flex-col">
        {options.map((option) => (
          <FilterOption
            key={option}
            label={option}
            isSelected={selectedOption === option}
            onClick={() => onOptionClick(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
