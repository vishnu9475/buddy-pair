import { FiArrowLeft, FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";

const StoryHeader = ({
  name = "Stone Stellar",
  avatar,
  status = "Online",
  onBack = () => {},
  isOwn = false,
  showStatus = true,
  onDelete = () => {},
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-30 px-4 py-3 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent">
        
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <FiArrowLeft
            onClick={onBack}
            className="text-white text-xl cursor-pointer"
          />

          <div className="relative">
            <img
              src={avatar}
              alt={name}
              className="w-10 h-10 rounded-full object-cover border-2 border-pink-500"
            />

            {!isOwn && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-black" />
            )}
          </div>

          <div>
            <p className="text-white text-sm font-semibold">
              {isOwn ? "My Story" : name}
            </p>

            {!isOwn && showStatus && (
              <p className="text-green-400 text-xs">{status}</p>
            )}
          </div>
        </div>

        {/* RIGHT MENU ICON */}
        {isOwn && (
          <FiMoreHorizontal
            onClick={() => setShowMenu(!showMenu)}
            className="text-white text-xl cursor-pointer"
          />
        )}
      </div>

      {/* ✅ INLINE MENU */}
      {showMenu && (
        <>
          {/* Overlay (click outside to close) */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowMenu(false)}
          />

          {/* Menu Box */}
          <div className="absolute top-14 right-4 z-50 w-40 bg-white rounded-xl shadow-lg overflow-hidden animate-fadeIn">
            
            <button
              onClick={() => {
                setShowMenu(false);
                onDelete();
              }}
              className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100"
            >
              Delete
            </button>

            <button
              onClick={() => {
                setShowMenu(false);
                alert("Share");
              }}
              className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100"
            >
              Share
            </button>

            <button
              onClick={() => {
                setShowMenu(false);
                alert("Save");
              }}
              className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100"
            >
              Save
            </button>

            <button
              onClick={() => setShowMenu(false)}
              className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default StoryHeader;