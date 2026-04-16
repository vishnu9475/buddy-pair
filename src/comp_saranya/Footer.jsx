import React from 'react';
import { Home, Compass, Users, MessageCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavButton = ({ icon: Icon, isActive, isSpecial, onClick }) => (
    <button
        onClick={onClick}
        className={`group relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full transition-all duration-300 ${isActive && !isSpecial ? 'bg-[#D68FC3] text-white shadow-md' : 'text-gray-400'
            }`}
    >
        {isSpecial ? (
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full shadow-inner" style={{
                background: 'conic-gradient(from 180deg, #FF512F, #DD2476, #9c27b0, #2196F3, #4CAF50, #FFEB3B, #FF512F)',
            }} />
        ) : (
            <Icon size={22} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
        )}
    </button>
);

export default function Footer({ joined = false }) {
    const navigate = useNavigate();
    const location = useLocation();

    // Determine active tab based on current path
    const getActiveTab = () => {
        const path = location.pathname;
        if (path === '/Page12') return 'home';
        if (path === '') return 'exp';
        if (path === '') return 'color';
        if (path === '/Page32') return 'users';
        if (path === '/Page22') return 'chat';
        return '';
    };

    const active = getActiveTab();

    const handleNavigation = (tab) => {
        switch (tab) {
            case 'home':
                navigate('/homePage');
                break;
            case 'exp':
                navigate('/');
                break;
            case 'color':
                navigate('/spin');
                break;
            case 'users':
                navigate('/accept');
                break;
            case 'chat':
                navigate('/messages');
                break;
            default:
                break;
        }
    };

    if (joined) {
        return (
            <nav className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full bg-white px-2 sm:px-3 md:px-4 py-3 sm:py-4 md:py-5 border-t border-gray-100">
                <NavButton icon={Home} isActive={active === 'home'} onClick={() => handleNavigation('home')} />
                <NavButton icon={Compass} isActive={active === 'exp'} onClick={() => handleNavigation('exp')} />
                <NavButton isSpecial isActive={active === 'color'} onClick={() => handleNavigation('color')} />
                <NavButton icon={Users} isActive={active === 'users'} onClick={() => handleNavigation('users')} />
                <NavButton icon={MessageCircle} isActive={active === 'chat'} onClick={() => handleNavigation('chat')} />
            </nav>
        );
    }

    return (
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 pt-2 sm:pt-3 sticky bottom-0 z-50">
            <nav className="flex items-center justify-between w-full bg-white/90 backdrop-blur-md px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50/50">
                <NavButton icon={Home} isActive={active === 'home'} onClick={() => handleNavigation('home')} />
                <NavButton icon={Compass} isActive={active === 'exp'} onClick={() => handleNavigation('exp')} />
                <NavButton isSpecial isActive={active === 'color'} onClick={() => handleNavigation('color')} />
                <NavButton icon={Users} isActive={active === 'users'} onClick={() => handleNavigation('users')} />
                <NavButton icon={MessageCircle} isActive={active === 'chat'} onClick={() => handleNavigation('chat')} />
            </nav>
        </div>
    );
}