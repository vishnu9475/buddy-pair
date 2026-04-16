import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useNavigate, useLocation } from 'react-router-dom';

const menu = [
    { name: "Dating", path: "/homePage" },
    { name: "Matrimony", path: "/" },
    { name: "E commerce", path: "/" },
    { name: "Study Abroad", path: "/" },
    { name: "Job Portal", path: "/" },
];

const CategoryItems = ({ open, onclose, inline = false }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) => {
        navigate(path);
        onclose?.(); // Close menu if onclose function is provided
    };

    return (
        <>
            {/* Overlay */}
            {open && !inline && (
                <div 
                    className="fixed inset-0 bg-black/40 z-90 backdrop-blur-sm"
                    onClick={onclose}
                />
            )}

            {/* Sidebar */}
            <div className={`
                ${inline ? "relative w-[180px] md:w-[230px] min-w-[180px] md:min-w-[230px]" : `fixed top-0 left-0 w-[220px] md:w-[300px] z-100 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
                h-fit pb-2 max-h-[90vh] bg-[#6B4468]/95 backdrop-blur-lg text-white shadow-2xl flex flex-col overflow-y-auto
            `}>

                {/* close button */}
                {!inline && (
                    <div className='p-3 flex justify-end'>
                        <button
                            onClick={onclose}
                            className='flex items-center justify-center w-8 h-8 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors focus:outline-none'
                        >
                            <IoMdClose size={18} />
                        </button>
                    </div>
                )}

                {/* menu items */}
                <div className='px-6 space-y-1 mt-2'>
                    {menu.map((item, index) => {
                     const isActive = location.pathname === item.path;

                    return(
                        <div key={item.name}>
                            <div
                                role="button"
                                onClick={() => handleNavigation(item.path)}
                                style={{ fontFamily: "aldrich" }}
                               className={`py-2 text-center text-lg md:text-xl cursor-pointer transition-all duration-200 rounded-xl
                                ${isActive ? "bg-white/20" : "hover:bg-white/10"}
                                `}
                            >
                                {item.name}
                            </div>

                            {/* Divider */}
                            {index !== menu.length - 1 && (
                                <div className="mx-auto w-[90%] h-px bg-white/30 my-1 mb-2" />
                            )}
                        </div>
                      );
                    })}
                </div>

            </div>
        </>
    )
}

export default CategoryItems