import React from "react";
import { Home, Compass, Users, MessageCircle, } from "lucide-react";
import { useNavigate, useLocation  } from "react-router-dom";

const tabs = [
  { id: "home", icon: Home, path: "/homepage" },
  { id: "exp", icon: Compass, path: "/discover" },
  { id: "color", special: true, path: "/spin" },
  { id: "users", icon: Users, path: "/accept" },
  { id: "chat", icon: MessageCircle, path: "/messages" },
];

const NavButton = ({ Icon, isActive, isSpecial, onClick }) => (
  <button
    onClick={onClick}
    className={`
      relative
      flex
      items-center
      justify-center

      w-10 h-10          /* mobile */
      md:w-11 md:h-11     /* tablet  */
      lg:w-11 lg:h-11   /* desktop */
      xl:w-12 xl:h-12
      rounded-full
      transition-all
      duration-300
      ease-out
      active:scale-95
      cursor-pointer
      ${
        isActive
          ? "bg-[#ce57ce] text-white shadow-xl scale-110"
          : "text-gray-400 hover:bg-gray-100"
      }
    `}
  >
    {isSpecial ? (
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-blue-400 via-green-400 to-red-500 border-2 border-white shadow-md" />
    ) : (
      Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
    )}

  </button>
);

export default function AppFooter() {
  
const location = useLocation();
const navigate = useNavigate();

  return (
    <nav
      className="
        fixed
        bottom-4
        left-1/2
        -translate-x-1/2
        w-[94%]
        sm:w-[70%]
        lg:w-[60%]
        max-w-3xl
        bg-[#FFFFFF]
        backdrop-blur-lg
        px-4
        sm:px-6
        py-3
        rounded-full
        shadow-[0_10px_40px_rgba(0,0,0,0.15)]
        flex
        items-center
        justify-between
        z-50
      "
    >
      {tabs.map(({ id, icon, special, path }) => {
        const isActive = location.pathname === path;

        return (
          <NavButton
            key={id}
            Icon={icon}
            isSpecial={special}
            isActive={special ? false : isActive}
            onClick={() => navigate(path)}
          />
        );
      })}
    </nav>
  );
}


