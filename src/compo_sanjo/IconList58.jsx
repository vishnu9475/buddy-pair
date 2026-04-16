import React from "react";
import { FiPlus } from "react-icons/fi";

const IconList58 = ({
  images = [
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/seed/picsum/200/300",
  ],
  reels = ["https://picsum.photos/seed/picsum/200/300"],

  onAddImage = () => {},
  onAddReel = () => {},
  onChangePassword = () => {},
}) => {
  return (
    <div className="w-full">
      <div className="px-0 py-0">
        {/* IMAGES */}
        <div className="mb-5 mt-5">
          <p className="text-xs text-gray-500 mb-2">Images</p>
          <div className="flex items-center gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
            ))}
            <button
              onClick={onAddImage}
              className="w-10 h-10 rounded-full border border-dashed border-gray-400 flex items-center justify-center cursor-pointer"
            >
              <FiPlus />
            </button>
          </div>
        </div>

        {/* REELS */}
        <div className="mb-6">
          <p className="text-xs text-gray-500 mb-2">Reels</p>
          <div className="flex items-center gap-3">
            {reels.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
            ))}
            <button
              onClick={onAddReel}
              className="w-10 h-10 rounded-full border border-dashed border-gray-400 flex items-center justify-center cursor-pointer"
            >
              <FiPlus />
            </button>
          </div>
        </div>

        {/* CHANGE PASSWORD LINK */}
        <button
          onClick={onChangePassword}
          className="text-sm text-[#2f2d2f] mb-6 text-left cursor-pointer"
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default IconList58;
