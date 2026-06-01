import { useState } from 'react';
import PricingCard from "../comp_arjun/sub"; 
import NavButton from "../comp_vishnu/AppFooter"; 
import SearchHeader from "../compo_sanjo/SearchHeader";
import ProfileSidebar50 from "../comp_saranya/ProfileSidebar50";

function Subscription() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <div className="min-h-screen w-full bg-[#4B164C] font-sans overflow-x-hidden lg:flex">
      
      {/* ✅ LEFT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <header className="sticky top-0 z-10">
          <SearchHeader 
            title="Subscription Plan" 
            variant="search"
            onProfileClick={() => setIsSidebarOpen(true)}
          />
        </header>

        {/* MAIN */}
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
          <div className="w-16 h-1.5 bg-zinc-800 rounded-full mx-auto mt-6 mb-8"></div>

          <div className="w-[92%] md:w-[85%] max-w-[1100px] mx-auto flex flex-col">
            <PricingCard data={planData} />
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
}

export default Subscription;