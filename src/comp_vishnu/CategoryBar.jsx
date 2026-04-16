import React from "react"

const CategoryBar15 = ({ handleClick }) => {

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[rgba(0,0,0,0.3)]
        px-4
        py-6
      "
    >
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-gray-800 mb-6 text-base sm:text-lg md:text-2xl">
          Interested in
        </h2>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-4">
          <button
            onClick={() => handleClick("MEN")}
            className="
              w-full
              py-3
              sm:py-3
              md:py-4
              rounded-full
              bg-blue-600
              text-white
              text-sm
              sm:text-base
              md:text-lg
              cursor-pointer
            "
          >
            MEN
          </button>

          <button
            onClick={() => handleClick("WOMEN")}
            className="
              w-full
              py-3
              sm:py-3
              md:py-4
              rounded-full
              bg-red-500
              text-white
              text-sm
              sm:text-base
              md:text-lg
              cursor-pointer
            "
          >
            WOMEN
          </button>

          <button
            onClick={() => handleClick("BOTH")}
            className="
              w-full
              py-3
              sm:py-3
              md:py-4
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-pink-400
              text-white
              text-sm
              sm:text-base
              md:text-lg
              cursor-pointer
            "
          >
            BOTH
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar15;
