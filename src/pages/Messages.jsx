import { useNavigate } from "react-router-dom";
import SearchHeader from "../compo_sanjo/SearchHeader";
import ImageSlider31 from "../comp_neja/ImageSlider31";
import ChatList33 from "../comp_neja/ChatList33";
import BottomNavigation from "../comp_vishnu/AppFooter";

const Messages = () => {
 const navigate = useNavigate();
 const handleChatClick = () => {
    navigate("/chat"); 
  };
  return (
    <div className="min-h-screen bg-neutral-100">
      
      {/* Page Container */}
      <div className="w-full">
        {/* Header */}
        <SearchHeader
          title="Messages"
          variant="back"
        />

        {/* Recent Matches Slider */}
        <ImageSlider31 />

         <div className="relative z-20 bg-white rounded-t-3xl -mt-4 pt-4 pb-24 lg:px-3">
          <ChatList33 onChatClick={handleChatClick}/>
          </div>
        <BottomNavigation/> 
        
      </div>
    </div>
  );
};

export default Messages;
