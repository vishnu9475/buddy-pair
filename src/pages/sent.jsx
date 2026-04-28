// import { useEffect, useState } from "react";
// import ProfileList from "../comp_arjun/ProfileList";
// import NavButton from "../comp_vishnu/AppFooter"; 
// import SearchHeader from "../compo_sanjo/SearchHeader";
// import ProfileSidebar50 from "../comp_saranya/ProfileSidebar50";

// function Sent() {
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//     /* 1. WRAPPER: bg-[#4B164C] ensures the status bar area matches the header exactly */
//     <div className="min-h-screen w-full flex flex-col bg-[#4B164C] font-sans overflow-x-hidden">
      
//       {/* 2. THE SEARCH HEADER */}
//       <header className="sticky top-0 z-10">
//         <SearchHeader 
//           title="SENT" 
//           variant="search" 
//           onProfileClick={() => setIsSidebarOpen(true)}
//         />
//       </header>

//       {/* 3. THE OVERLAPPING BODY */}
//       <main className="
//         flex-grow 
//         bg-white 
//         rounded-t-[80px] 
//         -mt-10 
//         z-20 
//         relative 
//         shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.35)]
//         pb-36
//       ">
        
//         {/* Mobile Grabber Bar */}
//         <div className="w-16 h-1.5 bg-gray-200 rounded-full mx-auto mt-6 mb-8"></div>

//         <div className="
//           w-[92%] 
//           md:w-[85%] 
//           max-w-[1100px] 
//           mx-auto 
//           flex flex-col 
//         ">
//           <ProfileList />
//         </div>
//       </main>

//       {/* 4. FLOATING NAV FOOTER */}
//       <footer className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none flex justify-center pb-10 px-4">
//         <div className="pointer-events-auto w-full max-w-[800px]">
//           <NavButton />
//         </div>
//       </footer>
//       {/* ✅ SIDEBAR */}
//       <ProfileSidebar50
//         open={isSidebarOpen}
//         onClose={() => setIsSidebarOpen(false)}
//       />

//     </div>
//   );
// }

// export default Sent;




import React, { useState } from 'react';
import ProfileList from "../comp_arjun/ProfileList";
import NavButton from "../comp_vishnu/AppFooter"; 
import SearchHeader from "../compo_sanjo/SearchHeader";
import ProfileSidebar50 from "../comp_saranya/ProfileSidebar50";

function Sent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#4B164C] font-sans overflow-x-hidden lg:flex">
      
      {/* ✅ LEFT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <header className="sticky top-0 z-10">
          <SearchHeader 
            title="SENT" 
            variant="search" 
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
            <ProfileList />
          </div>
        </main>

      </div>

      {/* ✅ RIGHT SIDE (DESKTOP ONLY) */}
      <div className="hidden lg:block w-[320px]">
        <ProfileSidebar50 inline inline sidebarBg="bg-[#4B164C]" />
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
}

export default Sent;