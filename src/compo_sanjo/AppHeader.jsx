import { FiMenu, FiBell } from "react-icons/fi";

const AppHeader = ({
  onMenuClick,
  onNotificationClick,
  profileImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
}) => {
  return (
    <div className="flex justify-between items-center p-4 ">
      {/* Left: Menu Icon & Brand */}
      <div className="flex items-center gap-2">
        <button
          onClick={onMenuClick}
          className="text-gray-700 flex items-center justify-center"
        >
          <FiMenu size={25} color="#4B164C" />
        </button>
        <span className="text-2xl font-aldrich text-[#4A144B] leading-none pt-1">
          BuddyPair
        </span>
      </div>

      {/* Right: Notification & Profile */}
      <div className="flex items-center gap-3">
        <button
          onClick={onNotificationClick}
          className="p-2.5 text-gray-700 border-[1.5px] border-[#D9CADA] rounded-full relative"
        >
          <FiBell size={20} color="#4B164C" />
          <span className="absolute top-1.5 right-2 w-2.5 h-2.5 bg-[#DD88CF] rounded-full border-2 border-white"></span>
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover bg-pink-100"
          />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
