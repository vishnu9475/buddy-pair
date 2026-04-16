import NavHeader from "../compo_sanjo/NavHeader";
import MatchList from "../compo_sanjo/MatchList";
import Navbar from "../compo_sanjo/footer";

const ViewedMyProfile = () => {
  return (
    <div className="w-full min-h-screen bg-[#FDF7FF] font-sans relative pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-2">
        {/* Header */}
        <NavHeader
          title="Viewed my Profile"
          onBack={() => console.log("Back")}
          onFilter={() => console.log("Filter")}
        />

        {/* Custom Sub-Header for Page 16 */}
        <div className="mt-4 mb-6">
          <p className="text-[#E996D1] md:text-xl font-aldrich text-lg font-medium tracking-wide">
            47 new profile views
          </p>
        </div>

        {/* Matches List (Header hidden since we have a custom one) */}
        <MatchList hideHeader={true} />
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none">
        <div className="w-full max-w-md pointer-events-auto">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default ViewedMyProfile;
