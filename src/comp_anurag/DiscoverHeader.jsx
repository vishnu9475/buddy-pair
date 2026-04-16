import { FiChevronLeft, FiSliders } from "react-icons/fi";
import { Search } from "lucide-react";

const DiscoverHeader = ({
  title = "Discover",
  location = "Germany",
  onBack,
  onFilter,
  onSearch,
  onProfileClick,
  profileImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
}) => {
  return (
    <div className="flex justify-between items-center w-full mb-6">
      
      {/* LEFT: Location + Title */}
      <div className="flex flex-col">
        <span className="text-sm text-[#a657a7]">{location} ▼</span>
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>

      {/* RIGHT: Icons */}
      <div className="flex items-center gap-3">
        
        {/* Search */}
        <button
          onClick={onSearch}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-md"
        >
          <Search size={20} />
        </button>

        {/* Filter */}
        <button
          onClick={onFilter}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-md"
        >
          <FiSliders size={20} />
        </button>

        {/* Profile */}
        <button
          onClick={onProfileClick}
          className="w-11 h-11 rounded-full overflow-hidden border"
        >
          <img
            src={profileImage}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  );
};

export default DiscoverHeader;