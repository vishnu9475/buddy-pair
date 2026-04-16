import React, { useState } from "react";
import { Home, Compass, Users, MessageCircle } from "lucide-react";

const NavButton = ({ icon: Icon, isActive, isSpecial, onClick }) => (
  <div className="flex items-center flex-1 justify-center">
    <button
      onClick={onClick}
      className={`group relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
        isActive
          ? "bg-purple-400 text-white shadow-lg"
          : "text-gray-400 hover:bg-gray-100"
      }`}
    >
      {isSpecial ? (
        <div className="w-10 h-10 rounded-full bg-linear-to-tr from-blue-400 via-green-400 to-red-500 border-2 border-white shadow-sm" />
      ) : (
        <Icon size={24} />
      )}
    </button>
    {/* Dashed divider */}
    <div className="h-8 border-r border-dashed border-gray-200 mx-auto last:hidden" />
  </div>
);

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    /* Added w-full and px-8 for a wider, more spaced-out feel */
    <nav className="flex items-center justify-between w-full bg-white/90 backdrop-blur-md border border-gray-100 px-8 py-3 rounded-full shadow-2xl">
      <NavButton
        icon={Home}
        isActive={active === "home"}
        onClick={() => setActive("home")}
      />
      <NavButton
        icon={Compass}
        isActive={active === "exp"}
        onClick={() => setActive("exp")}
      />

      <NavButton
        isSpecial
        isActive={active === "color"}
        onClick={() => setActive("color")}
      />

      <NavButton
        icon={Users}
        isActive={active === "users"}
        onClick={() => setActive("users")}
      />
      <NavButton
        icon={MessageCircle}
        isActive={active === "chat"}
        onClick={() => setActive("chat")}
      />
    </nav>
  );
}
