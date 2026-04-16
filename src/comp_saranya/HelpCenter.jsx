import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const HelpCenter = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { name: "Help Center", path: "/help" },
        { name: "Contact Us", path: "/contactus" },
        { name: "Privacy Policy", path: "/privacypolicy" },
    ];

    return (
        <div className="w-full bg-[#4B164C] px-2 sm:px-6 md:px-8 border-b border-white/10">
            <div className="flex justify-start sm:justify-center items-center max-w-4xl mx-auto overflow-x-auto scrollbar-hide gap-2 sm:gap-6 md:gap-8">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <button
                            key={item.name}
                            onClick={() => navigate(item.path)}
                            className={`
                                relative py-3 sm:py-4 px-3 sm:px-6 text-sm sm:text-base lg:text-xl font-['Aldrich'] whitespace-nowrap transition-all duration-300 cursor-pointer outline-none
                                ${isActive ? "text-white font-semibold" : "text-white/60 hover:text-white"}
                            `}
                        >
                            {item.name}
                            {isActive && (
                                <div className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] bg-[#D68FC3] rounded-t-full shadow-[0_-2px_8px_rgba(214,143,195,0.5)]" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default HelpCenter;

