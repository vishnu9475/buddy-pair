import React from "react";

const InfoBox = ({
  icon = "📍",
  text,
  className = "",
}) => {
  return (
    <div
      className={`
        w-full
        bg-white
        rounded-xl
        px-3
        py-3
        shadow-md
        border
        border-gray-100
        flex
        items-center
        gap-2
        ${className}
      `}
    >
      <span className="text-lg">{icon}</span>
      <p
        className="text-sm text-gray-700"
        style={{ fontFamily: "Aldrich" }}
      >
        {text}
      </p>
      
    </div>
  );
};

export default InfoBox;
