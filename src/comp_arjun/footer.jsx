import React, { useState } from 'react';
import { Home, Compass, Users, MessageCircle } from 'lucide-react';

const NavButton = ({ icon: Icon, isActive, isSpecial, onClick, isLast }) => (
  <div className="flex items-center flex-1 justify-center">
    <button 
      onClick={onClick}
      className={`group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-300 ${
        isActive ? 'bg-purple-400 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-100'
      }`}
    >
      {isSpecial ? (
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-blue-400 via-green-400 to-red-500 border-2 border-white shadow-sm" />
      ) : (
        <Icon size={20} className="md:w-6 md:h-6" />
      )}
    </button>
    
    {/* Hide divider on mobile (hidden), show on medium screens (md:block) */}
    {!isLast && (
      <div className="hidden md:block h-8 border-r border-dashed border-gray-200 mx-auto" />
    )}
  </div>
);

export default function Navbar() {
  const [active, setActive] = useState('home');

  return (
    /* Reduced px-4 for mobile, px-8 for desktop */
    <nav className="flex items-center justify-between w-full bg-white/90 backdrop-blur-md border border-gray-100 px-4 md:px-8 py-2 md:py-3 rounded-full shadow-2xl">
      <NavButton icon={Home} isActive={active === 'home'} onClick={() => setActive('home')} />
      <NavButton icon={Compass} isActive={active === 'exp'} onClick={() => setActive('exp')} />
      <NavButton isSpecial isActive={active === 'color'} onClick={() => setActive('color')} />
      <NavButton icon={Users} isActive={active === 'users'} onClick={() => setActive('users')} />
      <NavButton icon={MessageCircle} isActive={active === 'chat'} onClick={() => setActive('chat')} isLast />
    </nav>
  );
}