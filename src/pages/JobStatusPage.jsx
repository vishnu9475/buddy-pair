import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobStatusPage = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState("");

  const options = [
    { key: "employer", label: "Employer" },
    { key: "employee", label: "Employee" },
    { key: "seeker", label: "Job Seeker" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
        <h2 className="text-center text-lg md:text-3xl font-semibold mb-6">
          Job Status
        </h2>

        <div className="space-y-4 mb-6">
          {options.map((option) => (
            <label
              key={option.key}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="jobStatus"
                checked={selected === option.key}
                onChange={() => setSelected(option.key)}
                className="w-5 h-5 accent-black"
              />
              <span className="text-gray-500 text-sm md:text-lg">
                {option.label}
              </span>
            </label>
          ))}
        </div>

        <button
          onClick={() => navigate("/jobdetails")}
          className="w-full bg-[#2b2b2b] text-white py-3 rounded-xl text-sm md:text-lg font-medium hover:bg-black transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobStatusPage;
