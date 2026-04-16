import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryBar from "../comp_vishnu/CategoryBar";

function Page11() {
  const navigate = useNavigate();
    const handleClick = (value) => {
      console.log("Selected:", value);
      if (value === "MEN") {
        navigate("/homePage");
      } else if (value === "WOMEN") {
        navigate("/homePage");
      } else {
        navigate("/homePage");
      }
    };
  return (
    <div>
      <CategoryBar handleClick={handleClick}/>
    </div>
  );
}

export default Page11;