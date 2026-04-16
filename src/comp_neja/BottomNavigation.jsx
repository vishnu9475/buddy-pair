import { useLocation, useNavigate } from "react-router-dom";
import { FiCompass, FiMessageCircle } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import { GoHome } from "react-icons/go";


const navItems = [
  { id: "home", icon: GoHome, path: "/home" },
  { id: "explore", icon: FiCompass, path: "/explore" },
  { id: "add", icon: FaPlus, path: "/add" },
  { id: "friends", icon: HiOutlineUsers, path: "/friends" },
  { id: "chat", icon: FiMessageCircle, path: "/chat" },
];

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-6 px-6 py-4 bg-white rounded-full shadow-xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.id}
              onClick={() => {
               
               navigate(item.path);
              }}
              className={`flex h-11 w-11 items-center justify-center rounded-full
                transition-all duration-200 ease-out
                ${
                  isActive
                    ? "bg-pink-300 text-white shadow-lg scale-110"
                    : "text-purple-300 hover:text-purple-500"
                }`}
            >
              <Icon size={27} className="transition-colors duration-200" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
