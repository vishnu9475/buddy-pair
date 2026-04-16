import React from 'react';
import { LuArrowDownUp } from "react-icons/lu";
import { MdOutlineStorage } from "react-icons/md";
import Component54 from './Component54';

const Storage = () => {
    const storageItems = [
        {
            id: 1,
            t1: "Network usage",
            t2: "2.4 GB sent • 1.2 GB received",
            icon: <LuArrowDownUp size={20} />,
        },
        {
            id: 2,
            t1: "Storage usage",
            t2: "1.5 GB used • 10.5 GB free",
            icon: <MdOutlineStorage size={20} />,
        }
    ];

    return (
        <div className="w-full bg-white pt-6 flex flex-col gap-4">
            {storageItems.map((item, index) => (
                <div key={item.id}>
                    <Component54
                        icon={item.icon}
                        text1={item.t1}
                        text2={item.t2}
                        onClick={() => console.log(`${item.t1} clicked`)}
                    />
                    {index !== storageItems.length - 1 && (
                        <div className="h-px bg-gray-50 mx-4"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Storage;
