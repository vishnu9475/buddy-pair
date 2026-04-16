import SearchHeader from "../compo_sanjo/SearchHeader";
import ProfileForm57 from "../compo_sanjo/ProfileForm57";
import { useNavigate } from "react-router-dom";
const EditMyProfile = () => {
  const navigate = useNavigate();

  const handleAddImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        // Handle the selected file here
        console.log("Selected file:", file);
      }
    };
  };

  return (
    <div className="bg-[#4B164C] min-h-screen">
      <SearchHeader title="Edit My Profile" variant="back" />
      <div className="relative z-10 w-full flex justify-center">
        <ProfileForm57
          onChangePassword={() => navigate("/changePassword")}
          onAddImage={handleAddImage}
          onProfileImageChange={handleAddImage}
          onUpdate={() => alert("Profile updated successfully")}
        />
      </div>
    </div>
  );
};

export default EditMyProfile;
