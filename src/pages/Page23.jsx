import React from "react";
import SpinMatch from "../comp_anurag/SpinMatch";

const Page23 = () => {
  return (
    <SpinMatch      
      name="Priya"
      age={22}
      distance="2 km near you"
      image="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
      onBack={() => window.history.back()}
      onSpin={() => console.log("Spinning... 2km away")}
    />
  );
};

export default Page23;