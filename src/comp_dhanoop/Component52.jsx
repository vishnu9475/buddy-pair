import React from 'react'
import { IoKeyOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { LuArrowDownUp } from "react-icons/lu";
import { FaUserGroup } from "react-icons/fa6";
import {
  
  HiOutlineBell,
  HiOutlineQuestionMarkCircle,
  
} from "react-icons/hi2";


import Component53 from './Component53'
import Component54 from './Component54';
const menu= [ {
                id:1,
                t1:"Account",
                t2:"privacy,accounts,change number",
                 icon:<IoKeyOutline size={20}/>
                    },
             {
                id:2,
                t1:"Chat",
                t2:"Chat history,Theme,Wallpaper",
                 icon:<AiOutlineMessage size={20}/>
             }, 
             {
                id:3,
                t1:"Notification",
                t2:"Messages,Group and Others",
                 icon:<HiOutlineBell size={20}/>
             }, 
             {
                id:4,
                t1:"Help",
                t2:"Help center, contact us, privacy policy",
                 icon:<HiOutlineQuestionMarkCircle size={20}/>
             },
              {
                id:5,
                t1:"Storage",
                t2:"Network usage, storage usage",
                 icon:<LuArrowDownUp size={20}/>
            }, 
            {
                id:1,
                t1:"Invite Friend",
                t2:"",
                 icon:< FaUserGroup size={20}/>
           },]

const  Component52 = () => {
  return (
    <div className=''>
      <div>
        <Component53/>
      </div>
      <div >
        {
           menu.map((item,index)=>(
           <div key={item.index}>
                 <Component54 icon={item.icon}
                               text1={item.t1}
                                text2={item.t2}/>

                {/* divider */}
                {index!== menu.length-1 && ( <div className='h-px bg-gray-50 '></div>)}
                
           </div>
           ))
        }
      </div>
    </div>
  )
}

export default Component52
