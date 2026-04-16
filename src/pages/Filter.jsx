import React, { useState } from "react";
import SearchHeader from "../compo_sanjo/SearchHeader";
import FilterSection from "../compo_sanjo/FilterSection";
import AppFooter from "../comp_vishnu/AppFooter";
import { useNavigate } from "react-router-dom";

const Filter = () => {
    const navigate = useNavigate();
    const [sortBy, setSortBy] = useState("Newest Members");
    const [filterBy, setFilterBy] = useState("Gender");

    const sortOptions = ["Newest Members", "Last Active", "Distance", "Popularity", "Age"];
    const filterOptions = ["Gender", "Location", "Interests/Hobbies", "Languages Spoken", "Relationship Goals"];

    return (
        <div className="min-h-screen bg-[#4B164C] relative overflow-hidden flex flex-col">
            <SearchHeader title="Filter" variant="back" />

            {/* WHITE SHEET */}
            <div className="relative flex-1 bg-white rounded-t-[40px] -mt-10 px-6 pt-10 pb-36 md:px-12 lg:px-24">
                {/* DRAG INDICATOR */}
                <div className="flex justify-center mb-10">
                    <div className="w-16 h-1.5 rounded-full bg-gray-200" />
                </div>

                <div className="max-w-4xl mx-auto">
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
            </div>

            {/* Bottom Nav */}
            <AppFooter />
        </div>
    );
};

export default Filter;
