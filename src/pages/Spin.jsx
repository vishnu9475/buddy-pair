
import React from "react";
import SpinMatchScreen35 from "../comp_neja/SpinMatchScreen35";
import { useNavigate } from "react-router-dom";

const Spin = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-neutral-100">
    <div className="w-full">

      
        <SpinMatchScreen35
          name="Sona"
          age={27}
          distance="1 km near you"
          image="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
          onSpin={() => alert("Spin clicked")}
          onBack={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default Spin;
