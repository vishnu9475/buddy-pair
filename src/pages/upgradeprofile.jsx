import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UpgradeCard from "../comp_arjun/UpgradeCard";
import Accept from './accept';             

const ProfileViewer = () => {
  const [hasSubscription, setHasSubscription] = useState(false);
  const navigate = useNavigate();

  const handleUpgrade = () => {
    navigate("/sub");
  };

  return (
    <div className="relative min-h-screen">
      
      {/* CONTENT */}
      <div className={!hasSubscription ? "blur-lg pointer-events-none select-none" : ""}>
        <Accept/>
      </div>

      {/* OVERLAY */}
      {!hasSubscription && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
         
          <UpgradeCard 
            title="Upgrade to view Profile"
            buttonText="Upgrade"
            onClick={handleUpgrade}
          />
          
        </div>
      )}

    </div>
  );
};

export default ProfileViewer;