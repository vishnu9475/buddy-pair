import { FiMenu, FiBell, FiArrowLeft } from "react-icons/fi";

const AppHeader = ({
  // Top Brand
  showBrand = true,
  brand = "BuddyPair",

  // Second Row
  showBack = true,
  showCenterTitle = true,
  centerTitle = "Create Group",
  onBackClick,

  // Right Side
  showNotification = true,
  onNotificationClick,

  // Menu Option (for home screen)
  showMenu = false,
  onMenuClick,
}) => {
  return (
    <div className="w-full">

      {/* 🔹 TOP ROW - Brand + Right Icons */}
      {showBrand && (
        <div className="flex justify-between items-center px-4 pt-4">
          <div className="flex items-center gap-2">
            {showMenu && (
              <button onClick={onMenuClick}>
                <FiMenu size={24} color="#4B164C" />
              </button>
            )}
            <h1 style={{ fontFamily: "Aldrich" }} className="text-2xl font-aldrich text-[#4A144B]">
              {brand}
            </h1>
          </div>

          {showNotification && (
            <button
              onClick={onNotificationClick}
              className="p-2.5 border-[1.5px] border-[#D9CADA] rounded-full relative"
            >
              <FiBell size={20} color="#4B164C" />
              <span className="absolute top-1.5 right-2 w-2.5 h-2.5 bg-[#DD88CF] rounded-full border-2 border-white"></span>
            </button>
          )}
        </div>
      )}

      {/* 🔹 SECOND ROW - Back + Center Title */}
      {(showBack || showCenterTitle) && (
        <div className="relative flex items-center justify-center px-4 py-3">

          {showBack && (
            <button
              onClick={onBackClick}
              className="absolute left-4"
            >
              <FiArrowLeft size={20} color="#000" />
            </button>
          )}

          {showCenterTitle && (
            <h2 style={{ fontFamily: "Aldrich" }} className="text-md text-black">
              {centerTitle}
            </h2>
          )}
        </div>
      )}
    </div>
  );
};

export default AppHeader;