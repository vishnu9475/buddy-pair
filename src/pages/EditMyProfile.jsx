import SearchHeader from "../compo_sanjo/SearchHeader";
import ProfileForm57 from "../compo_sanjo/ProfileForm57";
import NavButton from "../comp_vishnu/AppFooter";
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
    <div className="min-h-screen w-full flex flex-col bg-[#4B164C] font-sans overflow-x-hidden">
      
      {/* HEADER */}
      <header className="sticky top-0 z-10">
        <SearchHeader 
          title="Edit My Profile" 
          variant="back"
        />
      </header>

      {/* MAIN */}
      <main className="
        flex-grow 
        bg-white 
        rounded-t-[80px] 
        -mt-10 
        z-20 
        relative 
        shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.35)]
        pb-36
      ">
        <div className="w-16 h-1.5 bg-gray-200 rounded-full mx-auto mt-6 mb-8"></div>

        <div className="w-[92%] md:w-[85%] max-w-[1100px] mx-auto flex flex-col">
          <ProfileForm57
            onChangePassword={() => navigate("/changePassword")}
            onAddImage={handleAddImage}
            onProfileImageChange={handleAddImage}
            onUpdate={() => alert("Profile updated successfully")}
          />
        </div>
      </main>

      {/* FLOATING NAV FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none flex justify-center pb-10 px-4">
        <div className="pointer-events-auto w-full max-w-[800px]">
          <NavButton />
        </div>
      </footer>
    </div>
  );
};

export default EditMyProfile;
