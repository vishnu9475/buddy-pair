import React, { useState } from "react";
import {Link} from "react-router-dom"
const Component9 = () => {
  const [selected, setSelected] = useState({
    employer: false,
    employee: false,
    seeker: false,
  });

  const toggle = (key) => {
    setSelected({ ...selected, [key]: !selected[key] });
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
    <div className="w-[90%] md:w-[70%] bg-white rounded-2xl p-6 shadow-lg shadow-gray-300">
      {/* Title */}
      <h2 className="text-center md:text-3xl text-lg font-semibold mb-6">
        Job Status
      </h2>

      {/* Options */}
      <div className="space-y-4 mb-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={selected.employer}
            onChange={() => toggle("employer")}
            className="w-5 h-5 accent-black"
          />
          <span className="text-gray-400 text-sm  md:text-lg">Employer</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={selected.employee}
            onChange={() => toggle("employee")}
            className="w-5 h-5 accent-black"
          />
          <span className="text-gray-400 text-sm md:text-lg">Employee</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={selected.seeker}
            onChange={() => toggle("seeker")}
            className="w-5 h-5 accent-black"
          />
          <span className="text-gray-400 text-sm md:text-lg">Job Seeker</span>
        </label>
      </div>

      {/* Button */}
      <Link to="/jobdetails">
        <button className="w-full bg-[#2b2b2b] text-white py-3 rounded-xl text-sm md:text-lg font-medium">
          Next
         </button>
      </Link>
    </div>
    </div>
  );
};

export default Component9;
