import React from "react";
import { FiPlus } from "react-icons/fi";
import { Search, ChevronLeft, PenLine } from "lucide-react";

const ProfileForm57 = ({
  name = "Nazrul Islam",
  quote = "Never give up 💪",
  avatar = "https://picsum.photos/seed/picsum/200/300",
  infotext = "All your account information can be accessed and edited here but your mail will still remain un-edited.",
  fields = [
    { placeholder: "Name", value: "", type: "text" },
    { placeholder: "Username", value: "", type: "text" },
    { placeholder: "Email", value: "", type: "email" },
    { placeholder: "Phone Number", value: "", type: "tel" },
    { placeholder: "Bio", value: "", type: "text" },
  ],

  images = [
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/seed/picsum/200/300",
  ],
  reels = ["https://picsum.photos/seed/picsum/200/300"],

  onAddImage = () => {},
  onAddReel = () => {},
  onProfileImageChange = () => {},
  onChangePassword = () => {},
  onUpdate = () => {},
}) => {
  return (
    <div className="w-full bg-transparent">
      {/* INNER CARD */}
      <div className="bg-white rounded-t-[50px] px-6 py-8 shadow-sm -mt-10 relative z-10 transition-all duration-300">
        {/* HANDLE - OPTIONAL, REMOVED TO MATCH DESIGN */}
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-6" />

        {/* PROFILE HEADER */}
        <div className="flex items-center gap-5 mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={onProfileImageChange}
              className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#525252] border-2 border-white flex items-center justify-center text-white"
            >
              <PenLine size={12} />
            </button>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 leading-tight">
              {name}
            </h2>
            <p className="text-sm text-gray-500 font-medium">{quote}</p>
          </div>
        </div>

        {/* INFO TEXT */}
        <p className="text-[13px] text-gray-500 leading-relaxed mb-8 font-medium">
          {infotext}
        </p>

        {/* FIELDS */}
        <div className="space-y-6">
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col gap-1">
              <input
                type={field.type || "text"}
                defaultValue={field.value}
                placeholder={field.placeholder}
                className="w-full border-b-2 border-[#4B164C] py-2 text-sm text-gray-900 outline-none focus:border-[#4B144A] transition-colors bg-transparent placeholder-gray-500"
              />
            </div>
          ))}
        </div>

        {/* IMAGES */}
        <div className="mb-5 mt-8">
          <p className="text-[13px] font-semibold text-gray-700 mb-3">Images</p>
          <div className="flex items-center gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-12 h-12 rounded-full object-cover border border-gray-100"
              />
            ))}
            <button
              onClick={onAddImage}
              className="w-12 h-12 rounded-full border border-dashed border-gray-400 flex items-center justify-center cursor-pointer text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <FiPlus size={24} />
            </button>
          </div>
        </div>

        {/* REELS */}
        <div className="mb-8">
          <p className="text-[13px] font-semibold text-gray-700 mb-3">Reels</p>
          <div className="flex items-center gap-3">
            {reels.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-12 h-12 rounded-full object-cover border border-gray-100"
              />
            ))}
            {/* Assuming only one reel shown in design or add button if needed, adding plus button for consistency */}
          </div>
        </div>

        {/* CHANGE PASSWORD LINK */}
        <div className="mb-8">
          <button
            onClick={onChangePassword}
            className="text-sm text-gray-700 hover:text-black font-medium text-left cursor-pointer"
          >
            Change Password
          </button>
        </div>

        {/* UPDATE BUTTON */}
        <button
          onClick={onUpdate}
          className="w-full h-14 bg-[#4A1448] text-white rounded-full font-bold text-lg cursor-pointer shadow-lg hover:bg-[#5e1a5b] transition-colors"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default ProfileForm57;
