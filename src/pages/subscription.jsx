import React from 'react';
import PricingCard from "../comp_arjun/sub"; 
import NavButton from "../comp_vishnu/AppFooter"; 
import SearchHeader from "../compo_sanjo/SearchHeader";

function Subscription() {
  const planData = {
    title: "Prime Member",
    price: 49,
    currency: "₹",
    period: "month",
    limits: [
      { label: "Daily Limits", profiles: 15, requests: 15, timeframe: "day" },
      { label: "Weekly Limits", profiles: 90, requests: 90, timeframe: "week" },
      { label: "Monthly Limits", profiles: 300, requests: 300, timeframe: "month" }
    ],
    features: [
      "Unlock Unlimited Messages",
      "Unlock Shortlist Page",
      "View Profiles Who Shortlisted You",
      "Sort & filter Profiles"
    ]
  };

  return (
    /* 1. WRAPPER: Matches SearchHeader's background */
    <div className="flex flex-col min-h-screen bg-[#4B164C] font-sans overflow-x-hidden">

      {/* 2. THE SEARCH HEADER 
          - title="Subscription Plan"
          - variant="search" (or "back" if you'd prefer a back arrow here)
      */}
      <header className="sticky top-0 z-10">
        <SearchHeader 
          title="Subscription Plan" 
          variant="search" 
          onProfileClick={() => console.log("Profile clicked")}
        />
      </header>

      {/* 3. THE OVERLAPPING BODY 
          - bg-black: Maintains your dark theme for the content
          - -mt-10: Creates the overlap with the header's padding
      */}
      <main className="
        flex-grow 
        bg-black 
        rounded-t-[80px] 
        -mt-10 
        z-20 
        relative 
        shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.6)]
        pb-36
      ">
        
        {/* The Mobile Grabber Bar */}
        <div className="w-16 h-1.5 bg-zinc-800 rounded-full mx-auto mt-6 mb-8"></div>

        <div className="px-6 pt-4 max-w-full sm:max-w-xl md:max-w-3xl mx-auto w-full">
          <PricingCard data={planData} />
        </div>
      </main>

      {/* 4. FLOATING NAV FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none flex justify-center pb-10 px-4">
        <div className="pointer-events-auto w-full max-w-[800px]">
          <NavButton />
        </div>
      </footer>

    </div>
  );
}

export default Subscription;