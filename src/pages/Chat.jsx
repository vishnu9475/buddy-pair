import AppHeader from "../compo_sanjo/SearchHeader";
import ChatBox from "../comp_neja/ChatBox";
import SearchHeader from "../compo_sanjo/SearchHeader";



const ChatPage = () => {
  

  return (
    <div className="w-full h-screen bg-[#4b145f] flex flex-col">

      {/* HEADER */}
      <SearchHeader
         title="Messages"
         variant="back"
      />

      {/* CHAT BODY */}
      <div className="flex-1 bg-[#EDEDED] rounded-t-[30px] overflow-hidden">
        <ChatBox />
      </div>

    </div>
  );
};

export default ChatPage;