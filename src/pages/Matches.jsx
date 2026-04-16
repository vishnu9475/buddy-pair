import React, { useState } from "react";
import NavHeader from "../compo_sanjo/NavHeader";
import MatchList from "../compo_sanjo/MatchList";
import UpgradeAlertBox from "../compo_sanjo/UpgradeAlertBox";
import AppFooter from "../comp_vishnu/AppFooter";
import Modal from "../compo_sanjo/modal";
import { useNavigate } from "react-router-dom";

const Matches = () => {
  const navigate = useNavigate();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const handleCardClick = () => {
    setShowUpgradeModal(true);
  };

  const closeUpgradeModal = () => {
    setShowUpgradeModal(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 relative overflow-hidden flex flex-col">
      {/* Header Area */}
      <div className="px-5 pt-4">
        <NavHeader
          title=""
          onBack={() => navigate(-1)}
          onFilter={() => navigate("/filter")}
        />
      </div>

      {/* Scrollable list area */}
      <div className="relative flex-1 px-5 pb-32">
        <MatchList onCardClick={handleCardClick} />
      </div>

      {/* MODAL UPGRADE ALERT - Appears on card click */}
      {showUpgradeModal && (
        <UpgradeAlertBox
          position="bottom"
          onUpgrade={() => navigate("/payment-methods")}
          onClose={closeUpgradeModal}
        />
      )}

      {/* Bottom Nav Bar */}
      <AppFooter />
    </div>
  );
};

export default Matches;
