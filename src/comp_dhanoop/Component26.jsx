import React, { useState } from "react";
import Component27 from "./Component27";

const interests = [
  { id: 1, emoji: "⚽", label: "Football" },
  { id: 2, emoji: "🍃", label: "Nature" },
  { id: 3, emoji: "🗣️", label: "Language" },
  { id: 4, emoji: "✍️", label: "Writing" },
  { id: 5, emoji: "🎵", label: "Music" },
  { id: 6, emoji: "📸", label: "Photography" },
];

const Component26 = () => {
  const [activeId, setActiveId] = useState(); 
  return (
    <div className="w-full mx-auto px-3 py-3 ">

    
      <div className="flex items-center justify-between mb-3">
        <h3  style={{ fontFamily: "Aldrich" }} className="text-lg font-semibold font-aldrich">Interest</h3>
        <span  style={{ fontFamily: "Aldrich" }} className="text-sm text-pink-400 cursor-pointer">
          View all
        </span>
      </div>

              {/* comploete icon bar */}
      
      <div className="flex flex-wrap gap-2
      ">
        {interests.map((item) => (
          <Component27
            key={item.id}
            emoji={item.emoji}
            label={item.label}
            active={activeId === item.id}
            onClick={() => setActiveId(item.id)}
          />
        ))}
      </div>

    </div>
  );
};

export default Component26;
