import React from 'react';
import { AiFillFileText, AiFillFund, AiFillProduct } from "react-icons/ai";
import { FaBoxTissue, FaCloudRain, FaCoins } from 'react-icons/fa';
const items = [
    {
        icon:<AiFillFund />,
        name:"Web Aplication",
        descriotion:"Designing and developing interactive and web applications using React"
    },
    {
        icon:<AiFillFileText />,
        name:"Single Page Applications",
        descriotion:"Building SPAs that provide a seamless and fluid user experience"
    },
    {
        icon:<FaCoins />,
        name:"Custom Component",
        descriotion:"Developing reusable and modular UI components using React'sre."
    },
    {
        icon:<FaCloudRain />,
        name:"Integration with APIs",
        descriotion:"Designing and developing interactive and web applications using React"
    },
    {
        icon:<FaBoxTissue />,
        name:"State Management",
        descriotion:"Implementing state management using React's built-in state or external"
    },
    {
        icon:<AiFillProduct />,
        name:"UI Design and Optimization",
        descriotion:"Creating visually appealing user interfaces with a focus on usability"
    },
]
const Bottom = () => {
    return (
        <div className='lg:grid grid grid-cols-1 lg:grid-cols-3 gap-7  container mx-auto lg:px-46 px-6 py-12 font-["Rajdhani"] '>
            {
                items.map(item=>(
                    <div className=' bg-gradient-to-b from-[#1e1533] to-[#00adb5] hover:scale-110 px-8 py-6 rounded-lg border duration-500  border-[#00adb5] hover:bg-[#27194C] backdrop-blur-2xl '>
                        <div className='flex '>
                            <p className='bg-white py-2.5 px-3 rounded-md bg-gradient-to-r from-[#00adb5] to-[#2af2fd] text-xl lg:text-3xl text-white'>{item.icon}</p>
                        </div>
                        <h2 className=' text-[22px] lg:text-[27px] font-bold text-white mt-6'>{item.name}</h2>
                        <p className='text-gray-300 text-sm lg:text-[16px] mt-1 lg:mt-2'>{item.descriotion}</p>
                    </div>
                    
                ))
            }
        </div>
    );
};

export default Bottom;