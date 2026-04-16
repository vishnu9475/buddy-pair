import React from "react";

const InterestedCard = ({
  title = "Interested",
  option1 = "Dating",
  option2 = "Matrimony",
  handleDating,
  handleMatrimony
}) => {


  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-0 bg-[#F3F4FF]">
      
      {/* CARD */}
      <div
        className="
          w-full
          max-w-[320px]
          sm:max-w-[320px]
          md:max-w-[340px]
          bg-white
          rounded-xl
          border border-gray-200
          shadow-lg
          pt-6
          px-6
          pb-20
        "
      >
        
        {/* Title */}
        <h2
          className="
            text-center
            text-base
            sm:text-lg
            font-medium
            mb-8
            mt-4
          "
        >
          {title}
        </h2>

        {/* Buttons */}
        <div className="flex flex-col gap-6">
          <button
            onClick={handleDating}
            className="
              w-full
              mt-6
              bg-black
              text-white
              py-2
              sm:py-2
              rounded-lg
              text-sm
              sm:text-base
              cursor-pointer
            "
          >
            {option1}
          </button>

          <button
            onClick={handleMatrimony}
            className="
              w-full
              mt-6
              bg-black
              text-white
              py-2
              sm:py-2
              rounded-lg
              text-sm
              sm:text-base
              cursor-pointer
            "
          >
            {option2}
          </button>
        </div>
      </div>

    </div>
  );
};

export default InterestedCard;
