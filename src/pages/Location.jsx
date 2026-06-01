import { useState } from "react";
import NavHeader from "../compo_sanjo/NavHeader";
import MatchList from "../compo_sanjo/MatchList";
import AppFooter from "../comp_vishnu/AppFooter";
import StatItemList from "../compo_sanjo/StatItemList";
import ProfileSidebar50 from "../comp_saranya/ProfileSidebar50";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#FDF7FF] font-sans pb-32">

      {/* MAIN LAYOUT */}
      <div className="flex w-full">

        {/* LEFT CONTENT */}
        <div className="flex-1 px-4 md:px-6 pt-2">
          <NavHeader
            title="Location"
            onBack={() => navigate(-1)}
            onFilter={() => console.log("Filter")}
            onProfileClick={() => setIsSidebarOpen(true)}
          />

          <StatItemList />
          <MatchList />
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

      {/* FOOTER */}
      <AppFooter />
    </div>
  );
};

export default Location;
