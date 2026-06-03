import NavHeader from "../compo_sanjo/NavHeader";
import MatchList from "../compo_sanjo/MatchList";
import AppFooter from "../comp_vishnu/AppFooter";
import StatItemList from "../compo_sanjo/StatItemList";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#FDF7FF] font-sans pb-32">
      <div className="w-full px-4 md:px-6 pt-2">
        <NavHeader
          title="Location"
          onBack={() => navigate(-1)}
          onFilter={() => console.log("Filter")}
        />

        <StatItemList />
        <MatchList />
      </div>

      {/* FOOTER */}
      <AppFooter />
    </div>
  );
};

export default Location;
