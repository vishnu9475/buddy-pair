import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ChangePassword60 = ({
  title = "Feeling worried about your account been easily preyed on? Then change that password now!",
  buttonText = "Update",
  primaryColor = "#5B1B5F",
}) => {
  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const toggle = (key) => {
    setShow((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const fields = [
    { key: "current", placeholder: "Current Password" },
    { key: "new", placeholder: "New Password" },
    { key: "confirm", placeholder: "Confirm Password" },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full bg-white rounded-t-[50px] shadow-none p-8 min-h-[calc(100vh-100px)] flex flex-col transition-all -mt-10 relative z-10">
        {/* Text */}
        <p className="text-sm md:text-xl text-gray-900 font-aldrich mb-12 text-center leading-relaxed px-4">
          {title}
        </p>

        {/* Inputs */}
        <div className="space-y-8">
          {fields.map((field) => (
            <div key={field.key} className="mb-6">
              <div className="relative group">
                <input
                  type={show[field.key] ? "text" : "password"}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent outline-none border-b-2 border-[#4B164C] focus:border-[#44034f] py-2 pr-10 text-base md:text-lg text-gray-800 placeholder-gray-500 transition-colors"
                />

                <button
                  type="button"
                  onClick={() => toggle(field.key)}
                  className="absolute right-0 bottom-2 text-gray-600 hover:text-gray-800"
                >
                  {show[field.key] ? (
                    <FiEyeOff size={20} className="md:w-6 md:h-6" />
                  ) : (
                    <FiEye size={20} className="md:w-6 md:h-6" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-auto mb-8 flex justify-center w-full">
          <button
            onClick={() => alert("Password changed successfully")}
            style={{ backgroundColor: primaryColor }}
            className="w-full max-w-[85%] py-4 rounded-full text-white font-bold text-lg md:text-xl shadow-xl hover:opacity-95 transition active:scale-95"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword60;
