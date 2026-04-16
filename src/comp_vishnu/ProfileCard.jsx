import React from "react";
import { LuX } from "react-icons/lu";

/* Individual Profile Item */
const ProfileItem = ({ name, status, image, onRemove }) => {
  return (
    <div className="flex items-center justify-between w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors group mb-3">
      <div className="flex items-center gap-4">
        {/* Profile Image with Yellow Border */}
        <div className="relative flex-shrink-0">
          <img 
            src={image || "https://via.placeholder.com/60"} 
            alt={name}
            className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 p-0.5"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col text-left">
          {/* Reduced size to 15px, added Michroma and tracking */}
          <h3 className="text-[15px] font-bold text-gray-900 leading-tight font-michroma tracking-wider">
            {name}
          </h3>
          {/* Reduced size to 11px, added Michroma and tracking */}
          <p className="text-[11px] text-gray-500 font-medium font-michroma tracking-wider mt-0.5">
            {status} <span role="img" aria-label="muscle">💪</span>
          </p>
        </div>
      </div>

      {/* Action Button */}
      <button 
        onClick={onRemove}
        className="text-gray-300 hover:text-red-500 transition-colors p-2"
      >
        <LuX size={20} />
      </button>
    </div>
  );
};

export default ProfileItem;