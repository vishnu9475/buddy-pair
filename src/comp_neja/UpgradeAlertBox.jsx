import React from "react";
import { IoClose } from "react-icons/io5";

const UpgradeAlertBox = ({
  title = "Upgrade to\nview Profile",
  buttonText = "Upgrade",
  onUpgrade,
  onBackClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30">
      {/* Modal Card */}
      <div
        className="
          relative 
          bg-white 
          rounded-3xl 
          shadow-2xl 
          p-8 
          text-center 
          flex 
          flex-col 
          justify-center
          w-[320px] h-[240px]       
          sm:w-[360px] sm:h-[260px] 
        "
      >
        {/* Close Button */}
        <button
          onClick={onBackClose}
          className="
            absolute 
            top-3 
            right-3 
            text-gray-500 
            hover:text-black 
            transition
          "
        >
          <IoClose size={22} />
        </button>

        {/* Title */}
        <h2
          className="text-2xl font-medium text-black mb-10 leading-snug"
          style={{ fontFamily: "Aldrich" }}
        >
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h2>

        {/* Upgrade Button */}
        <button
          onClick={onUpgrade}
          className="bg-purple-800 hover:bg-purple-900 text-white py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default UpgradeAlertBox;
