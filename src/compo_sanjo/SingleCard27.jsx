import React from "react";

const SingleCard27 = ({ emoji, label, active, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center gap-2
        px-4 py-1.5
        rounded-full
        border border-gray-300
        text-sm font-medium
        whitespace-nowrap
        transition
        focus:outline-none
        ${
          active
            ? "bg-pink-100 text-gray-700"
            : "bg-white text-gray-700 hover:bg-pink-200"
        }
      `}
    >
      <span>{emoji}</span>
      <span style={{ fontFamily: "Aldrich" }}>
        {label}
      </span>
    </button>
  );
};

export default SingleCard27;
