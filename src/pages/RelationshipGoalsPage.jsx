import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RelationshipGoalsPage = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState({
    shortTerm: false,
    longTerm: false,
  });

  const toggle = (key) => {
    setSelected((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleNext = () => {
    const hasSelection = selected.shortTerm || selected.longTerm;

    if (!hasSelection) {
      alert("Please select at least one relationship goal");
      return;
    }

    // later: save to context / localStorage / backend
    navigate("/interestedFeedPage");
  };

  const options = [
    { key: "shortTerm", label: "Short term relationship" },
    { key: "longTerm", label: "Long term relationship" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md md:max-w-2xl bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-gray-200 border border-gray-100">
        <h2 className="text-center text-lg md:text-3xl font-semibold mb-6">
          Relationship Goals
        </h2>

        <div className="space-y-4 mb-6">
          {options.map((option) => (
            <label
              key={option.key}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected[option.key]}
                onChange={() => toggle(option.key)}
                className="w-5 h-5 accent-black"
              />
              <span className="text-gray-500 text-sm md:text-lg">
                {option.label}
              </span>
            </label>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-full bg-[#2b2b2b] text-white py-3 rounded-xl text-sm md:text-lg font-medium hover:bg-black transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RelationshipGoalsPage;