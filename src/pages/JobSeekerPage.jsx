import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobSeekerPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    expertiseLevel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md md:max-w-2xl bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-100 border border-gray-100">
        {/* Title */}
        <h2 className="text-center text-lg md:text-3xl font-semibold mb-6">
          Professional Details
        </h2>

        {/* Job Title */}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full mb-4 px-4 py-3 border rounded-xl text-sm md:text-lg outline-none focus:ring-1 focus:ring-gray-400"
        />

        {/* Expertise Level */}
        <p className="text-sm md:text-lg text-gray-500 mb-2">Expertise Level</p>

        <select
          name="expertiseLevel"
          value={formData.expertiseLevel}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-3 border rounded-xl text-sm md:text-lg bg-white outline-none focus:ring-1 focus:ring-gray-400"
        >
          <option value="">Select your level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>

        {/* Button */}
        <button
          onClick={() => navigate("/relationshipgoals")}
          className="w-full bg-[#2b2b2b] text-white py-3 rounded-xl text-sm md:text-lg font-medium hover:bg-black transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobSeekerPage;
