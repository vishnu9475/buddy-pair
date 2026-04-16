import React from "react";

const ChatList33 = ({ onChatClick }) => {
  const chats = [
    {
      id: 1,
      name: "Alfredo Calzoni",
      message: "What about that new jacket if I ...",
      time: "09:18",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      online: true,
    },
    {
      id: 2,
      name: "Clara Hazel",
      message: "I know right 😏",
      time: "12:44",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      online: true,
    },
    {
      id: 3,
      name: "Brandon",
      message: "Aminify registered, can’t wai...",
      time: "08:05",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      online: true,
    },
    {
      id: 4,
      name: "Amina Mina",
      message: "It will have two lines of heading ...",
      time: "09:32",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      online: false,
    },
    {
      id: 4,
      name: "Amina Mina",
      message: "It will have two lines of heading ...",
      time: "09:32",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      online: false,
    },
    {
      id: 4,
      name: "Amina Mina",
      message: "It will have two lines of heading ...",
      time: "09:32",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      online: false,
    },
    {
      id: 4,
      name: "Amina Mina",
      message: "It will have two lines of heading ...",
      time: "09:32",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      online: false,
    },
  ];

  return (
   
      <div className="w-full bg-white rounded-t-3xl overflow-hidden xl:px-15">
        {chats.map((chat, index) => (
          <div
            key={index}
            onClick={onChatClick}
            className="flex gap-4 px-4 py-4 border-b border-gray-200 last:border-b-0"
          >
            {/* Avatar */}
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-14 h-14 rounded-full object-cover flex-shrink-0"
            />

            
            <div className="flex-1 min-w-0">
              <h3 style={{ fontFamily: "Aldrich" }} className="text-gray-900 text-base mb-1">
                {chat.name}
              </h3>

              <p style={{ fontFamily: "Aldrich" }} className="text-sm text-gray-600 line-clamp-2">
                {chat.message}
              </p>
            </div>

           
            <div className="flex flex-col items-end">
              {chat.online && (
                <span className="w-3 h-3 bg-purple-500 rounded-full" />
              )}

              <span style={{ fontFamily: "Aldrich" }} className="text-sm text-gray-400 mt-2">
                {chat.time}
              </span>
            </div>
          </div>
        ))}
      </div>
  
  );
};

export default ChatList33;
