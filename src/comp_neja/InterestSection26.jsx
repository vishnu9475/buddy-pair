import React, { useState } from "react";

/* ✅ DUMMY DATA */
const dummyInterests = [
  { id: 1, emoji: "⚽", label: "Football" },
  { id: 2, emoji: "🍃", label: "Nature" },
  { id: 3, emoji: "🗣️", label: "Language" },
  { id: 4, emoji: "🎵", label: "Music" },
  { id: 5, emoji: "✈️", label: "Travel" },
];

const InterestSection26 = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="w-full mx-auto">
      {/* TITLE */}
      <div className="flex items-center justify-between mb-2">
        <h3
          className="text-base text-gray-400"
          style={{ fontFamily: "Aldrich" }}
        >
          Interest
        </h3>
      </div>

      {/* BUTTON LIST */}
      <div className="flex flex-wrap gap-2">
        {dummyInterests.map((item) => {
          const active = activeId === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
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
                    ? "bg-pink-100 border-gray-300 text-gray-700"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-pink-200"
                }
              `}
            >
              <span>{item.emoji}</span>
              <span style={{ fontFamily: "Aldrich" }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default InterestSection26;
