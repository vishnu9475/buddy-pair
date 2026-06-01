import React, { useState } from "react";
import SearchHeader from "../compo_sanjo/SearchHeader";
import FilterSection from "../compo_sanjo/FilterSection";
import NavButton from "../comp_vishnu/AppFooter";
import ProfileSidebar50 from "../comp_saranya/ProfileSidebar50";
import { useNavigate } from "react-router-dom";

const Filter = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sortBy, setSortBy] = useState("Newest Members");
    const [filterBy, setFilterBy] = useState("Gender");

    const sortOptions = ["Newest Members", "Last Active", "Distance", "Popularity", "Age"];
    const filterOptions = ["Gender", "Location", "Interests/Hobbies", "Languages Spoken", "Relationship Goals"];

    return (
        <div className="min-h-screen w-full bg-[#4B164C] font-sans overflow-x-hidden lg:flex">
            
            {/* ✅ LEFT SIDE */}
            <div className="flex-1 flex flex-col">

                {/* HEADER */}
                <header className="sticky top-0 z-10">
                    <SearchHeader 
                        title="Filter" 
                        variant="back"
                        onProfileClick={() => setIsSidebarOpen(true)}
                    />
                </header>

                {/* MAIN */}
                <main className="
                    flex-grow 
                    bg-white 
                    rounded-t-[80px] 
                    -mt-10 
                    z-20 
                    relative 
                    shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.35)]
                    pb-36
                ">
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full mx-auto mt-6 mb-8"></div>

                    <div className="w-[92%] md:w-[85%] max-w-[1100px] mx-auto flex flex-col">
                        {/* Sort By Section */}
                        <FilterSection
                            title="Sort By"
                            options={sortOptions}
                            selectedOption={sortBy}
                            onOptionClick={(opt) => setSortBy(opt)}
                        />

                        {/* Filter By Section */}
                        <FilterSection
                            title="Filter By"
                            options={filterOptions}
                            selectedOption={filterBy}
                            onOptionClick={(opt) => setFilterBy(opt)}
                        />

                        {/* Action Buttons */}
                        <div className="flex items-center justify-center gap-6 mt-16 pb-8">
                            <button
                                onClick={() => navigate(-1)}
                                className="px-10 py-3.5 bg-[#FF7E8B] text-white rounded-2xl font-medium tracking-wide hover:opacity-90 transition-all font-['Aldrich']"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => navigate(-1)}
                                className="px-10 py-3.5 bg-[#4B164C] text-white rounded-2xl font-medium tracking-wide hover:bg-[#341538] transition-all font-['Aldrich']"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </main>

            </div>

            {/* ✅ RIGHT SIDE (DESKTOP ONLY) */}
            <div className="hidden lg:block w-[320px]">
                <ProfileSidebar50 inline sidebarBg="bg-[#4B164C]" />
            </div>

            {/* ✅ MOBILE SIDEBAR (overlay) */}
            <div className="lg:hidden">
                <ProfileSidebar50
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />
            </div>

            {/* 4. FLOATING NAV FOOTER */}
            <footer className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none flex justify-center pb-10 px-4">
                <div className="pointer-events-auto w-full max-w-[800px]">
                    <NavButton />
                </div>
            </footer>
        </div>
    );
};

export default Filter;
