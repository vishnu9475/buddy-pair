import StoryHeader from "../comp_neja/StoryHeader";
import StoryActions from "../comp_neja/StoryActions";
import UpgradeAlertBox from "../comp_neja/UpgradeAlertBox";
import { useNavigate } from "react-router-dom";

const ViewStory = () => {
  const navigate = useNavigate();
  const isPremiumUser = true;
  const DATA = {
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
    <div
        className={`w-full h-full ${
          !isPremiumUser
            ? "blur-md pointer-events-none select-none scale-[0.98] opacity-80"
            : ""
        }`}
      >
      <StoryHeader
        name="Stone Stellar"
        avatar={DATA.avatar}
        status="Online"
        onBack={() => navigate(-1)}
      />

      <StoryActions
        image={DATA.image}
        tag="# Tea Time"
        showNew
      />

    </div>
    {/* 🔒 UPGRADE OVERLAY */}
      {!isPremiumUser && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-md bg-black/30">
          <UpgradeAlertBox
            title={"Upgrade to\nview Story"}
            onUpgrade={() => navigate("/upgrade")}
            onBackClose={() => navigate(-1)}
          />
        </div>
      )}
    </div>
  );
};

export default ViewStory;
