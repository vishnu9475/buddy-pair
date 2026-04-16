import React, { useState } from "react";
import  { useNavigate } from "react-router-dom";

const Component12 = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState({
    Shorttermrel: false,
    Longtermrel: false,
  });

  const toggle = (key) => {
    setSelected((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-[90%] md:w-[70%] bg-white rounded-2xl p-6 shadow-lg shadow-gray-300">
        
        <h2 className="text-center text-lg md:text-3xl font-semibold mb-6">
          Relationship Goals
        </h2>

        <div className="space-y-4 mb-6">
          
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selected.Shorttermrel}
              onChange={() => toggle("Shorttermrel")}
              className="w-5 h-5 accent-black"
            />
            <span className="text-gray-400 text-sm md:text-lg">
              Short term relationship
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selected.Longtermrel}
              onChange={() => toggle("Longtermrel")}
              className="w-5 h-5 accent-black"
            />
            <span className="text-gray-400 text-sm md:text-lg">
              Long term relationship
            </span>
          </label>

        </div>

        <button 
          onClick={() => navigate("/interestedFeedPage")}
          className="w-full bg-[#2b2b2b] text-white py-3 rounded-xl text-sm md:text-lg font-medium">
          Next
        </button>
      </div>
    </div>
  );
};

export default Component12;
