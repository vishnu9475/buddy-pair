import React from "react";
import "@fontsource/aldrich";

const AdditionalDetailsForm = ({ handleNext }) => {
  
  const inputClass =
    `
    w-full
    h-[44px]
    sm:h-[44px]
    px-4
    border
    border-gray-300
    rounded-md
    text-sm
    sm:text-sm
    md:text-base
    placeholder-gray-400
    focus:outline-none
    focus:ring-1
    focus:ring-gray-400
    `;
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-0 py-6 bg-[#F3F4FF]"
    style={{ fontFamily: "Aldrich, sans-serif" }}>
      
      {/* Card */}
      <div
        className="
          w-full
          max-w-[320px]
          sm:max-w-[320px]
          md:max-w-[360px]
          bg-white
          rounded-lg
          shadow-lg
          p-5
          sm:p-5
          md:p-6
        "
      >
        
        {/* Title */}
        <h2 className="text-center text-sm sm:text-sm md:text-base font-medium mb-5">
          Additional Details
        </h2>

        {/* Form */}
        <div className="flex flex-col gap-3 sm:gap-3 md:gap-4">
          <input className={inputClass} placeholder="Annual Income" />
          <input className={inputClass} placeholder="Family Type" />
          <input className={inputClass} placeholder="Family Name" />
          <input className={inputClass} placeholder="Father's Name" />
          <input className={inputClass} placeholder="Father's Occupation" />
          <input className={inputClass} placeholder="Mother's Name" />
          <input className={inputClass} placeholder="Mother's Occupation" />
          <input className={inputClass} placeholder="Number of Siblings" />

          {/* Siblings Married */}
          <div className="relative">
            <input
              className={inputClass}
              placeholder="Number of Siblings Married"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-lg sm:text-lg md:text-xl font-medium cursor-pointer select-none">
              +
            </span>
          </div>

          <input className={inputClass} placeholder="Siblings Name & Details" />
          <input className={inputClass} placeholder="Height" />
          <input className={inputClass} placeholder="Weight" />
          <input className={inputClass} placeholder="Body Type" />
          <input className={inputClass} placeholder="Complexion" />

          {/* Disabilities */}
          <div className="relative">
            <input className={inputClass} placeholder="Disabilities" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-lg sm:text-lg md:text-xl font-medium cursor-pointer select-none">
              +
            </span>
          </div>

          <input className={inputClass} placeholder="Religion" />
          <input className={inputClass} placeholder="Cast/Community" />
          <input
            className={inputClass}
            placeholder="Expectations from Partner"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleNext}
          className="
            w-full
            h-11
            mt-6
            bg-[#2C2C2C]
            text-white
            rounded-md
            text-sm
            sm:text-sm
            md:text-base
            cursor-pointer
          "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdditionalDetailsForm;
