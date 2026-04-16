import { FiChevronLeft, FiSliders, FiPhone } from "react-icons/fi";

const NavHeader16 = ({
  title = "Matches",
  onBack = () => {},
  onFilter = () => {},
  onCall = () => {},
  showFilter = true,
  showCall = true,
}) => {
  return (
    <div className="w-full bg-[#4b145f] px-4 pt-5 pb-6 relative">

      {/* LEFT BUTTON */}
      <button
        onClick={onBack}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-[#7c5a86]"
      >
        <FiChevronLeft size={20} className="text-white" />
      </button>

      {/* TITLE (CENTERED PERFECTLY) */}
      <h1
        className="text-center text-xl sm:text-2xl font-medium text-white"
        style={{ fontFamily: "Aldrich" }}
      >
        {title}
      </h1>

      {/* RIGHT ICONS */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
        
        {showFilter && (
          <button
            onClick={onFilter}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E5D6E2]/40 hover:bg-white/10 transition"
          >
            <FiSliders size={18} className="text-white" />
          </button>
        )}

        {showCall && (
          <button
            onClick={onCall}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E5D6E2]/40 hover:bg-white/10 transition"
          >
            <FiPhone size={18} className="text-white" />
          </button>
        )}

        {!showFilter && !showCall && <div className="w-10 h-10" />}
      </div>
    </div>
  );
};

export default NavHeader16;