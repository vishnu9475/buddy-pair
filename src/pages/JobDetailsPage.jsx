import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobDetailsPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    designation: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fields = [
    { name: "companyName", placeholder: "Company Name" },
    { name: "designation", placeholder: "Designation" },
    { name: "location", placeholder: "Location" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md md:max-w-2xl bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-100 border border-gray-100">
        {/* Title */}
        <h2 className="text-center text-lg md:text-3xl font-semibold mb-6">
          Job Details
        </h2>

        {/* Inputs */}
        <div className="mb-6">
          {fields.map((field) => (
            <input
              key={field.name}
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full mb-4 px-4 py-3 border rounded-xl text-sm md:text-lg outline-none focus:ring-1 focus:ring-gray-400"
            />
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/jobseeker")}
          className="w-full bg-[#2b2b2b] text-white py-3 rounded-xl text-sm md:text-lg font-medium hover:bg-black transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobDetailsPage;
