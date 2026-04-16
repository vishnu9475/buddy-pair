import React from "react";
import SearchHeader from "../compo_sanjo/SearchHeader";
import ChangePassword60 from "../compo_sanjo/ChangePassword60";

const ChangePassword = () => {
  return (
    <div className="bg-[#4B164C] min-h-screen">
      <SearchHeader title="Change Password" variant="back" />
      <div className="relative z-10 w-full flex justify-center">
        <ChangePassword60 primaryColor="#44034f" />
      </div>
    </div>
  );
};

export default ChangePassword;
