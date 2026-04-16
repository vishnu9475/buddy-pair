import NavHeader from "../compo_sanjo/NavHeader";
import MatchList from "../compo_sanjo/MatchList";
import AppFooter from "../comp_vishnu/AppFooter";
import StatItemList from "../compo_sanjo/StatItemList";
import { useNavigate } from "react-router-dom";

const Designation = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-[#FDF7FF] font-sans relative pb-32">
      <div className="w-full px-4 md:px-6 pt-2">
        {/* Header */}
        <NavHeader
          title="Designation"
          onBack={() => navigate(-1)}
          onFilter={() => console.log("Filter")}
        />

        {/* Stats Section */}
        <StatItemList />

        {/* Matches List */}
        <MatchList />
      </div>

      {/* Footer Navigation */}
      <AppFooter />
    </div>
  );
};

export default Designation;
