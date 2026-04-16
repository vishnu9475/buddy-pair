import { FiChevronLeft, FiSliders } from "react-icons/fi";

const NavHeader = ({
  title = "Qualification",
  onBack,
  onFilter,
  onProfileClick,
  profileImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
}) => {
  return (
    <div className="flex justify-between items-center w-full py-4 relative">
      {/* Left: Back Button */}
      <div className="flex items-center w-24">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full border-[1.5px] border-[#D9CADA] hover:bg-pink-100 transition-colors"
        >
          <FiChevronLeft size={24} className="text-[#4A144B]" />
        </button>
      </div>

      {/* Center: Title */}
      <h2 className="text-xl md:text-2xl font-aldrich font-medium text-[#4A144B] tracking-wide text-center flex-1">
        {title}
      </h2>

      {/* Right: Filter & Profile Icons */}
      <div className="flex items-center justify-end gap-3 w-24">
        <button
          onClick={onFilter}
          className="w-10 h-10 flex items-center justify-center rounded-full border-[1.5px] border-[#D9CADA] hover:bg-pink-100 transition-colors"
        >
          <FiSliders size={20} className="text-[#4A144B]" />
        </button>

        <button
          onClick={onProfileClick}
          className="w-10 h-10 rounded-full overflow-hidden border-[1.5px] border-[#D9CADA] hover:opacity-80 transition-opacity"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover bg-pink-100"
          />
        </button>
      </div>
    </div>
  );
};

export default NavHeader;
