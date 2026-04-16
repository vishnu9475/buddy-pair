import React from "react";
import { useNavigate } from "react-router-dom";
import InterestedCard from "../comp_vishnu/InterestedCard";

function Page09() {
  const navigate = useNavigate();

  const handleDating = () => {
    navigate("/interestedinPage");
  }
  const handleMatrimony = () => {
    navigate("/addInfoMatrimonyPage");
  }
  return (
    <div>
      <InterestedCard handleDating={handleDating}
      handleMatrimony={handleMatrimony}
      />
    </div>
  );
}

export default Page09;


