import React from "react";
import "@fontsource/aldrich";
import proimg from "../assets/img1.jpg";
import {
  Menu,
  Bell,
  ChevronLeft,
  SlidersHorizontal,
  Search,
} from "lucide-react";

export default function AppHeader({
  title = "BuddyPair",
  showMenu = true,
  showSearch = false,
  showBellDot = true,
  showChevronLeft = false,
  showSlidersHorizontal = false,
  theme = "white",
  onProfileClick,
  onMenuClick,
  handleNotification,
}) {
  const isDark = theme === "black";
  const bgColor = isDark ? "bg-[#1C1B1F]" : "bg-[#FDF7FD]";
  const textColor = isDark ? "text-white" : "text-[#1C1B1F]";
  const hoverColor = isDark ? "hover:bg-gray-800" : "hover:bg-gray-100";

  return (
    <header
      className={`
        flex items-center justify-between
        px-3 sm:px-4 md:px-6
        py-3 sm:py-4
        ${bgColor} ${textColor}
      `}
      style={{ fontFamily: "Aldrich, sans-serif" }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-1 sm:gap-2">
        {showMenu && (
          <button 
            onClick={onMenuClick}
            className={`p-2 rounded-full ${hoverColor}`}>
            <Menu size={20} />
          </button>
        )}

        {showChevronLeft && (
          <button className={`p-2 rounded-full ${hoverColor}`}>
            <ChevronLeft size={20} />
          </button>
        )}

        <h1 className="text-lg sm:text-2xl lg:text-3xl text-[#4B164C] font-semibold truncate">
          {title}
        </h1>
      </div>

      {/* Right Section */}
      <div 
        className="flex items-center gap-2 sm:gap-3">
        {showBellDot && (
          <button
    className="
      relative
      w-11
      h-11
      rounded-full
      flex
      items-center
      justify-center
      border-2
      border-[#D9C9D8]
      bg-transparent
    "
  >
    {/* Bell icon */}
    <Bell
      size={22}
      onClick={handleNotification}
      className="text-[#4B164C] cursor-pointer"
    />

    {/* Notification dot */}
    <span
      className="
        absolute
        top-2.5
        right-2.5
        w-2
        h-2
        bg-[#DD88CF]
        rounded-full
        ring-2
        ring-white
      "
    />
  </button>
        )}

        <img
          src={proimg}
          alt="profile"
          onClick={onProfileClick}
          className="rounded-full size-10 sm:size-9 md:size-11 cursor-pointer"
        />

        {showSlidersHorizontal && (
          <button className={`p-2 rounded-full ${hoverColor}`}>
            <SlidersHorizontal size={22} />
          </button>
        )}

        {showSearch && (
          <button className={`p-2 rounded-full ${hoverColor}`}>
            <Search size={22} />
          </button>
        )}
      </div>
    </header>
  );
}
