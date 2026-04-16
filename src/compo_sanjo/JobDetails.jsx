import Modal from "./modal";
import { useState } from "react";

import { FiChevronDown } from "react-icons/fi";

const JobDetails = ({ isModelOpen, onClose, onNext }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedExpertise, setSelectedExpertise] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedExpertise(value);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isModelOpen}
        onClose={onClose}
        isNextButton={true}
        onNext={onNext}
      >
        <div className="flex flex-col p-2 w-full">
          <h2 className="text-center text-xl mb-6 text-black font-medium">
            Job Details
          </h2>

          <div className="flex flex-col space-y-4 mb-8">
            {/* Title Input */}
            <input
              type="text"
              placeholder="Title"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none text-gray-700 placeholder-gray-400"
            />

            {/* Expertise Level Section */}
            <div className="flex flex-col space-y-2 relative">
              <label className="text-gray-400 text-sm ml-1">
                Expertise Level
              </label>

              {/* Dropdown Trigger */}
              <div
                className="flex justify-between items-center w-full border-2 border-gray-300 p-3 rounded-lg cursor-pointer bg-white"
                onClick={toggleDropdown}
              >
                <span
                  className={selectedExpertise ? "text-black" : "text-gray-400"}
                >
                  {selectedExpertise || "Value"}
                </span>
                <FiChevronDown
                  className={`h-5 w-5 text-black transition-transform duration-200 ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>

              {/* Options */}
              {isDropdownOpen && (
                <Options
                  options={["Beginner", "Intermediate", "Expert"]}
                  setSelectedOption={handleOptionClick}
                />
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default JobDetails;

const Options = ({ options, setSelectedOption }) => {
  return (
    <div className="w-full rounded-lg mt-2 space-y-2 overflow-hidden transition-all">
      {options.map((option) => (
        <div
          key={option}
          className="p-3 border-2 border-gray-200 hover:bg-gray-50 rounded-lg cursor-pointer text-gray-700"
          onClick={() => setSelectedOption(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};
