import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavHeader from "../compo_sanjo/NavHeader";
import MatchList from "../compo_sanjo/MatchList";
import UpgradeAlertBox from "../compo_sanjo/UpgradeAlertBox";
import AppFooter from "../comp_vishnu/AppFooter";

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
    <div className="min-h-screen bg-neutral-50 overflow-hidden flex flex-col pb-32">
      <div className="px-5 pt-4">
        <NavHeader
          title=""
          onBack={() => navigate(-1)}
          onFilter={() => navigate("/filter")}
        />
      </div>

      <div className="flex-1 px-5">
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

      {/* FOOTER */}
      <AppFooter />
    </div>
  );
};

export default Matches;
