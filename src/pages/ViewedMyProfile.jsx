import { useState } from "react";
import NavHeader from "../compo_sanjo/NavHeader";
import MatchList from "../compo_sanjo/MatchList";
import Navbar from "../comp_vishnu/AppFooter";
import ProfileSidebar50 from "../comp_saranya/ProfileSidebar50";

const ViewedMyProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#FDF7FF] font-sans pb-32">

      {/* MAIN LAYOUT */}
      <div className="flex w-full">

        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-2">
          <NavHeader
            title="Viewed my Profile"
            onBack={() => console.log("Back")}
            onFilter={() => console.log("Filter")}
            onProfileClick={() => setIsSidebarOpen(true)}
          />

          <div className="mt-4 mb-6">
            <p className="text-[#E996D1] md:text-xl font-aldrich text-lg font-medium tracking-wide">
              47 new profile views
            </p>
          </div>

          <MatchList hideHeader={true} />
        </div>

        {/* RIGHT SIDEBAR (DESKTOP ONLY) */}
        <div className="hidden lg:block w-[320px]">
          <ProfileSidebar50 inline />
        </div>
      </div>

      {/* ✅ MOBILE SIDEBAR (OVERLAY) */}
      <div className="lg:hidden">
        <ProfileSidebar50
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none">
        <div className="w-full max-w-md pointer-events-auto">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default ViewedMyProfile;
