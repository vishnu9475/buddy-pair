import React from "react";
import CallItem from "./CallItem";

export default function CallList() {
  const calls = [
    { id: 1, name: "Team Align", time: "Today, 09:30 AM", image: "https://i.pravatar.cc/150?u=team", callType: "received" },
    { id: 2, name: "Jhon Abraham", time: "Today, 07:30 AM", image: "https://i.pravatar.cc/150?u=jhon", callType: "received" },
    { id: 3, name: "Sabila Sayma", time: "Yesterday, 07:35 PM", image: "https://i.pravatar.cc/150?u=sabila", callType: "missed" },
    { id: 4, name: "Alex Linderson", time: "Monday, 09:30 AM", image: "https://i.pravatar.cc/150?u=alex", callType: "received" },
    { id: 5, name: "Jhon Abraham", time: "03/07/22, 07:30 AM", image: "https://i.pravatar.cc/150?u=jhon2", callType: "missed" },
    { id: 6, name: "John Borino", time: "Monday, 09:30 AM", image: "https://i.pravatar.cc/150?u=borino", callType: "received" }
  ];

  return (
    /* Removed max-w-5xl to allow true full width */
    <div className="w-full p-4 bg-transparent">
      {calls.map((call) => (
        <CallItem 
          key={call.id} 
          name={call.name} 
          time={call.time} 
          image={call.image} 
          callType={call.callType}
        />
      ))}
    </div>
  );
}