import React, { useState } from 'react';
import { IoShareSocialOutline, IoMailOutline, IoSend } from "react-icons/io5";
import Component54 from './Component54';

const InviteFriendsContent = () => {
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [email, setEmail] = useState('');

    const inviteOptions = [
        {
            id: 1,
            t1: "Share Invite Link",
            t2: "Share your unique link with friends",
            icon: <IoShareSocialOutline size={22} />,
            action: () => console.log("Share link clicked")
        },
        {
            id: 2,
            t1: "Invite via Email",
            t2: "Send an invitation to their inbox",
            icon: <IoMailOutline size={22} />,
            action: () => setShowEmailInput(!showEmailInput)
        }
    ];

    const handleSendEmail = () => {
        if (email) {
            console.log(`Sending invite to: ${email}`);
            // Reset state
            setEmail('');
            setShowEmailInput(false);
        } else {
            alert("Please enter an email address");
        }
    };

    return (
        <div className="w-full bg-white pt-6 flex flex-col gap-4">
            {inviteOptions.map((item, index) => (
                <div key={item.id}>
                    <Component54
                        icon={item.icon}
                        text1={item.t1}
                        text2={item.t2}
                        onClick={item.action}
                    />

                    {item.id === 2 && showEmailInput && (
                        <div className="px-6 py-4 flex flex-col gap-3 bg-gray-50 mx-4 rounded-xl mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-transparent transition-all">
                                <IoMailOutline className="text-gray-400" size={20} />
                                <input
                                    type="email"
                                    placeholder="Enter friend's email"
                                    className="flex-1 bg-transparent border-none outline-none text-gray-800 font-aldrich text-sm md:text-base"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    onClick={handleSendEmail}
                                    className="bg-[#44034f] text-white p-2 rounded-full hover:bg-[#5a0467] transition-all flex items-center justify-center shadow-md active:scale-95"
                                    title="Send Invitation"
                                >
                                    <IoSend size={18} />
                                </button>
                            </div>
                        </div>
                    )}

                    {index !== inviteOptions.length - 1 && (
                        <div className="h-px bg-gray-50 mx-4"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default InviteFriendsContent;
