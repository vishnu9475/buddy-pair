import React from "react";
import { LuPhone, LuVideo } from "react-icons/lu";

const CallItem = ({ name, time, image, callType }) => {
  // Determine icon color based on call type (incoming/outgoing/missed)
  const statusColor = callType === "missed" ? "text-red-500" : "text-purple-500";

  return (
    <div className="flex items-center justify-between w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-all mb-2">
      <div className="flex items-center gap-4 text-left">
        {/* Profile Image with Yellow Border */}
        <div className="relative flex-shrink-0">
          <img 
            src={image || "https://via.placeholder.com/150"} 
            alt={name}
            className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 p-0.5"
          />
        </div>

        {/* Name and Timestamp with Icon */}
        <div className="flex flex-col">
          {/* Reduced to 15px, added Michroma and tracking */}
          <h3 className="text-[15px] font-bold text-gray-900 leading-tight font-michroma tracking-wider">
            {name}
          </h3>
          {/* Reduced to 11px, added Michroma and tracking */}
          <p className={`text-[11px] font-medium flex items-center gap-1 mt-0.5 font-michroma tracking-wider ${statusColor}`}>
            <LuPhone size={12} className="rotate-[135deg]" />
            <span className="text-gray-400 ml-1">{time}</span>
          </p>
        </div>
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-4 text-gray-400">
        <button className="hover:text-purple-500 transition-colors">
          <LuPhone size={20} strokeWidth={1.5} />
        </button>
        <button className="hover:text-purple-500 transition-colors">
          <LuVideo size={22} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default CallItem;