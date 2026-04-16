import React, { useState,useEffect } from "react";
import "@fontsource/aldrich";
const tabs = ["Nearby", "Designation", "Qualification"];

const CategoryToggleBar = ({handleQualification, handleDesignation}) => {
  const [activeTab, setActiveTab] = useState("Nearby");

  useEffect(() => {
    if (activeTab === "Designation") {
      handleDesignation?.("/designation");
    }

    if (activeTab === "Qualification") {
      handleQualification?.("/qualification");
    }
  }, [activeTab]);

  return (
    <div className="my-6 px-3">
      <div className="mx-auto w-full max-w-md lg:max-w-xl"
      style={{ fontFamily: "Aldrich, sans-serif" }}>
        
        {/* Toggle Container */}
        <div
            className="
              relative
              bg-[#F8E7F6]
              rounded-full
              p-1
              shadow-sm
              ring-4
              ring-white
              ring-inset
            "
          >
          
          {/* Sliding Indicator */}
          <div
            className="
              absolute
              inset-1
              w-[calc((100%-0.5rem)/3)]
              bg-white
              rounded-full
              shadow-md
              transition-transform
              duration-300
              ease-out
            "
            style={{
              transform:
                activeTab === "Nearby"
                  ? "translateX(0%)"
                  : activeTab === "Designation"
                  ? "translateX(100%)"
                  : "translateX(200%)",
            }}
          />

          {/* Tabs */}
          {/* <div className="relative z-10 flex"> */}
          <div className="relative z-10 flex overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                // className={`
                //   flex-1
                //   py-2.5
                //   lg:py-4
                //   text-sm
                //   md:text-base
                //   lg:text-xl
                //   font-semibold
                //   rounded-full
                //   transition-colors
                //   focus:outline-none
                //   focus-visible:ring-2
                //   focus-visible:ring-blue-400
                //   cursor-pointer
                //   ${
                //     activeTab === tab
                //       ? "text-blue-600"
                //       : "text-gray-700 hover:text-gray-900"
                //   }
                // `}
                className={`
                  flex-1
                  py-1.5 sm:py-2 md:py-3
                  px-1 sm:px-2
                  text-xs sm:text-sm md:text-base lg:text-lg
                  font-semibold
                  rounded-full
                  whitespace-nowrap
                  transition-colors
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-400
                  cursor-pointer
                  ${
                    activeTab === tab
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-gray-900"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryToggleBar;
