import { ChevronLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchHeader = ({
  title = "Sent",
  variant = "search",
  onProfileClick,
  profileImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#4B164C] pt-16 pb-20 relative transition-colors duration-300">
      <div className="px-6 flex items-center relative w-full">
        {variant === "back" ? (
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 cursor-pointer flex items-center justify-center w-11 h-11 rounded-full bg-transparent border border-white/40 hover:bg-white/10 transition-all font-['Aldrich']"
          >
            <ChevronLeft size={26} color="#fff" strokeWidth={1.5} />
          </button>
        ) : (
          <div className="absolute left-6 cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-[#D68FC3] border-2 border-white/60">
            <Search size={20} color="#fff" strokeWidth={2.0} />
          </div>
        )}

        <h2 className="w-full text-center text-xl md:text-3xl font-medium text-white font-['Aldrich'] tracking-wide">
          {title}
        </h2>

        {/* Profile Icon */}
        <button
          onClick={onProfileClick}
          className="absolute right-6 w-10 h-10 rounded-full overflow-hidden border-2 border-white/60 hover:opacity-80 transition-opacity flex items-center justify-center"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover bg-white/10"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchHeader;
