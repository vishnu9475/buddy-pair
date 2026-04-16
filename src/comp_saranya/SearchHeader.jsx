import React, { useState } from "react";
import { ChevronLeft, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchHeader = ({ title = "Sent", variant = "search", align = "center" }) => {
    const navigate = useNavigate();
    const [isSearching, setIsSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="bg-[#4B164C] pt-8 pb-6 sm:pt-14 sm:pb-9 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12 relative transition-colors duration-300">
            <div className={`px-4 sm:px-6 md:px-8 lg:px-10 flex items-center relative w-full ${align === 'left' ? 'justify-start gap-4 sm:gap-5' : 'justify-center'
                }`}>
                
                {isSearching ? (
                    <div className={`${align === 'center' ? 'absolute left-4 sm:left-6 md:left-8 lg:left-10' : ''} flex w-[45%] sm:w-[40%] md:max-w-[280px] items-center bg-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 transition-all z-20 backdrop-blur-sm`}>
                        <Search size={16} className="text-white mr-2 sm:mr-3 sm:w-4 sm:h-4 md:w-5 md:h-5" strokeWidth={2.0} />
                        <input
                            type="text"
                            autoFocus
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                            className="bg-transparent border-none outline-none text-white w-full placeholder-white/70 text-xs sm:text-sm md:text-base min-w-0"
                        />
                        <button 
                            onClick={() => setIsSearching(false)} 
                            className="ml-1 hover:bg-white/20 p-1 rounded-full cursor-pointer transition-colors flex items-center justify-center shrink-0"
                        >
                            <X size={16} className="text-white sm:w-4 sm:h-4" />
                        </button>
                    </div>
                ) : (
                    <>
                        {variant === "back" ? (
                            <button
                                onClick={() => navigate(-1)}
                                className={`${align === 'center' ? 'absolute left-4 sm:left-6 md:left-8 lg:left-10' : ''} cursor-pointer flex items-center justify-center w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] rounded-full bg-transparent border border-white/50 hover:bg-white/10 transition-all z-10`}
                            >
                                <ChevronLeft size={18} className="sm:w-6 sm:h-6 md:w-7 md:h-7" color="#fff" strokeWidth={1.5} />
                            </button>
                        ) : (
                            <div 
                                onClick={() => setIsSearching(true)}
                                className={`${align === 'center' ? 'absolute left-4 sm:left-6 md:left-8 lg:left-10' : ''} cursor-pointer flex items-center justify-center w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#D68FC3] border-2 border-white/60 z-10`}>
                                <Search size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" color="#fff" strokeWidth={2.0} />
                            </div>
                        )}
                    </>
                )}

                <h2 className={`${align === 'left' ? 'text-left' : 'w-full text-center'} text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-white font-['Aldrich'] tracking-wide`}>
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default SearchHeader;
