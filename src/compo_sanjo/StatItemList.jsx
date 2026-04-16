import React from "react";
import StatItem from "./StatItem";
import { FaHeart, FaComment } from "react-icons/fa";

const StatItemList = () => {
  return (
    <div className="mt-6 mb-8 flex gap-4">
      <StatItem
        icon={<FaHeart className="text-white text-2xl drop-shadow-md" />}
        label="Likes"
        value="32"
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150"
      />
      <StatItem
        icon={<FaComment className="text-white text-2xl drop-shadow-md" />}
        label="Connect"
        value="15"
        image="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150"
      />
    </div>
  );
};

export default StatItemList;
