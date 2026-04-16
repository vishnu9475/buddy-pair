import React, { useState } from "react";
import {Link} from "react-router-dom";
const Component11 = () => {
  const [level, setLevel] = useState("Value");

  return (
   
   <div className="flex items-center justify-center h-screen w-full">
   <div className="md:w-[70%] w-[90%] bg-white rounded-2xl p-6 shadow-xl shadow-gray-100">
      {/* Title */}
      <h2 className="text-center text-lg md:text-3xl font-semibold mb-6">
        Job Details
      </h2>

      {/* Job title */}
      <input
        type="text"
        placeholder="Title"
        className="w-full mb-4 px-4 py-3 border rounded-xl text-sm md:text-lg outline-none focus:ring-1 focus:ring-gray-400"
      />

      {/* Expertise Level */}
      <p className="text-sm md:text-lg text-gray-500 mb-2">Expertise Level</p>

      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="w-full mb-4 px-4 py-3 border rounded-xl text-sm md:text-lg bg-white outline-none"
      >
        <option></option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Expert</option>
      </select>

      {/* Static option cards (visual like image) */}
      {/* <div className="space-y-0 mb-6">
        {["Beginner", "Intermediate", "Expert"].map((item) => (
          <div
            key={item}
            className="w-full  "
          >
             <input
        type="text"
        placeholder=  {item}
        className="w-full mb-4 px-4 py-3 border rounded-xl text-sm outline-none focus:ring-1 focus:ring-gray-400"
      />
          </div>
        ))}
      </div> */}

      {/* Button */}
   <Link to="/relationshipgoals"> 
      <button className="w-full bg-[#2b2b2b] text-white py-3 rounded-xl text-sm md:text-lg font-medium">
        Next
      </button>
   </Link>
      
    </div>
    </div>
  );
};

export default Component11;
