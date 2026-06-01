import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavHeader from "../compo_sanjo/NavHeader";
import MatchList from "../compo_sanjo/MatchList";
import UpgradeAlertBox from "../compo_sanjo/UpgradeAlertBox";
import AppFooter from "../comp_vishnu/AppFooter";
import ProfileSidebar50 from "../comp_saranya/ProfileSidebar50";

const Matches = () => {
  const navigate = useNavigate();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCardClick = () => {
    setShowUpgradeModal(true);
  };

  const closeUpgradeModal = () => {
    setShowUpgradeModal(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 overflow-hidden flex flex-col pb-32">

      {/* MAIN LAYOUT */}
      <div className="flex w-full flex-1">

        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col">
          <div className="px-5 pt-4">
            <NavHeader
              title=""
              onBack={() => navigate(-1)}
              onFilter={() => navigate("/filter")}
              onProfileClick={() => setIsSidebarOpen(true)}
            />
          </div>

          <div className="flex-1 px-5">
            <MatchList onCardClick={handleCardClick} />
          </div>
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

      {/* MODAL UPGRADE ALERT - Appears on card click */}
      {showUpgradeModal && (
        <UpgradeAlertBox
          position="bottom"
          onUpgrade={() => navigate("/payment-methods")}
          onClose={closeUpgradeModal}
        />
      )}

      {/* FOOTER */}
      <AppFooter />
    </div>
  );
};

export default Matches;
