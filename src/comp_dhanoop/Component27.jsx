import React from "react";

const Component27 = ({ label, emoji, active, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center gap-2
        px-4 py-1.5
        rounded-full
        border
        text-sm font-medium
        whitespace-nowrap
        transition
        focus:outline-none
        ${
          active
            ? "bg-pink-400 border-pink-400 text-white"
            : "bg-white border-gray-300 text-gray-700 hover:bg-pink-200"
        }
      `}
    >
      <span>{emoji}</span>
      <span  style={{ fontFamily: "Aldrich" }}>{label}</span>
    </button>
  );
};

export default Component27;
