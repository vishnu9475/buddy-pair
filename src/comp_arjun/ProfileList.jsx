import React from "react";
import ProfileItem from "./ProfileItem";

export default function ProfileList() {
  const users = [
    { id: 1, name: "Afrin Sabila", status: "Life is beautiful", image: "https://i.pravatar.cc/150?u=afrin" },
    { id: 2, name: "Adil Adnan", status: "Be your own hero", image: "https://i.pravatar.cc/150?u=adil" },
    { id: 3, name: "Bristy Haque", status: "Keep working", image: "https://i.pravatar.cc/150?u=bristy" },
    { id: 4, name: "John Borino", status: "Make yourself proud", image: "https://i.pravatar.cc/150?u=john" },
    { id: 5, name: "Borsha Akther", status: "Flowers are beautiful", image: "https://i.pravatar.cc/150?u=borsha" },
    { id: 6, name: "sheik Sadi", status: "Keep going", image: "https://i.pravatar.cc/150?u=sadi" },
  ];

  // Alphabetical Sort and Grouping
  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
  const groupedUsers = sortedUsers.reduce((groups, user) => {
    const letter = user.name[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(user);
    return groups;
  }, {});

  const handleRemove = (id) => console.log("Deleted:", id);

  return (
    <div className="w-full p-4 bg-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
      {Object.keys(groupedUsers).map((letter) => (
        <div key={letter} className="mb-2"> {/* Minimal spacing between sections */}
          
          {/* Lighter, tech-style section letter */}
          <h2 className="text-[14px] font-bold text-gray-700 mb-1 px-1 uppercase tracking-widest">
            {letter}
          </h2>
          
          {/* Tight list spacing */}
          <div className="flex flex-col gap-0.5">
            {groupedUsers[letter].map((user) => (
              <ProfileItem 
                key={user.id} 
                name={user.name} 
                status={user.status} 
                image={user.image}
                onRemove={() => handleRemove(user.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}