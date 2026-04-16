import React from 'react';
import CallList from "../comp_arjun/CallList";
import NavButton from "../comp_vishnu/AppFooter"; 
import SearchHeader from "../compo_sanjo/SearchHeader";

function Accept() {
  return (
    /* 1. WRAPPER: Matches SearchHeader's bg-[#4B164C] for a seamless top area */
    <div className="min-h-screen w-full flex flex-col  font-sans overflow-x-hidden">
      
      {/* 2. STICKY HEADER 
          - title: matches page intent
          - variant: "search" provides the search icon as per your component logic
      */}
      <header className="sticky top-0 z-10">
        <SearchHeader 
          title="ACCEPT" 
          variant="search" 
          onProfileClick={() => console.log("Profile clicked")}
        />
      </header>

      {/* 3. OVERLAPPING BODY 
          - -mt-10: Pulls the white card up to overlap the header's padding
          - rounded-t-[80px]: Creates the deep curved "app-style" transition
          - z-20: Ensures the body sits on top of the header background
      */}
      <main className="
        flex-grow 
        bg-white 
        rounded-t-[80px] 
        -mt-10 
        z-20 
        relative 
        shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.4)]
        pb-36
      ">
        
        {/* The Mobile Grabber Bar (Pill) */}
        <div className="w-16 h-1 bg-gray-200 rounded-full mx-auto mt-6 mb-10"></div>

        <div className="
          w-[92%] 
          md:w-[85%] 
          max-w-[1200px] 
          mx-auto 
          flex flex-col
        ">
          <CallList />
        </div>
      </main>

      {/* 4. FLOATING NAV FOOTER 
          - pointer-events-none: Ensures clicks pass through to the list 
          - pointer-events-auto: Re-enables clicks for the buttons specifically
      */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none flex justify-center pb-10 px-4">
        <div className="pointer-events-auto w-full max-w-[650px]">
          <NavButton />
        </div>
      </footer>

    </div>
  );
}

export default Accept;