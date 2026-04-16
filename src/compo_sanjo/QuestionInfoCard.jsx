import React from "react";

const QuestionInfoCard = ({
  label,
  value, 
  className = "",
}) => {
  return (
    <div
      className={`
        w-full
        px-4
        py-3
        flex
        items-center
        justify-between
        bg-white
        shadow-[0_-1px_0_rgba(0,0,0,0.06),0_1px_0_rgba(0,0,0,0.06)]
        ${className}
      `}
    >
      
      <p
        className="text-sm text-gray-700"
        style={{ fontFamily: "Aldrich" }}
      >
        {label}
      </p>

      
      <span
        className="
          px-3
          py-1
          text-xs
          rounded-full
          font-medium
          bg-gray-100
          text-gray-700
        "
      >
        {value}
      </span>
    </div>
  );
};

export default QuestionInfoCard;
