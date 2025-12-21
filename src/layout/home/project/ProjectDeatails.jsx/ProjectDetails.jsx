import React from 'react';
import Ecomarse from "./../../../../img/Screenshot.png"
import Ecomarse1 from "./../../../../img/nested.png"
import Learning from "./../../../../img/learning.png"
import { Link } from 'react-router';
const items = [
    {
        id: 1,
        category_id: 1,
        img: Ecomarse,
        name: "Premium Fashion Store",
        tittle: "Minimal & elegant e-commerce UI with fast transitions, product showcase, and luxurious feel. Using HTML CSS Tailwind Javascript and React.",
        live_demo: "https://e-comarche-react-otoq.vercel.app",
        github: "https://github.com/Nazmul-Hasan-18/E-comarche-react.git"

    },
    {
        id: 2,
        category_id: 1,
        img: Ecomarse1,
        name: "Nest Mart E-commarce",
        tittle: "Nest Mart is a modern e-commerce app built with React, Tailwind CSS, and React Router, offering smooth navigation and product filtering.",
        live_demo: "https://nested-e-comarse-kr9r.vercel.app",
        github: "https://github.com/Nazmul-Hasan-18/Nested_E-comarse.git"

    },

    {
        id: 3,
        category_id: 2,
        img: Learning,
        name: "E-learning Platfrom",
        tittle: "A fully responsive e-commerce platform built with React,Tailwind CSS and Next.js, featuring category-based product filtering, dynamic routing, ",
        live_demo: "https://learning-management-next-js.vercel.app/",
        github: "https://github.com/Nazmul-Hasan-18/learning-management-next.js.git"
    },

    // {
    //     id:4,
    //     category_id : 2,

    // },
    // {
    //     id:5,
    //     category_id : 3,

    // },
]

const ProjectDetails = ({ data }) => {
    const match_id = data ? items.filter(item => item.category_id == data) : items
    return (
        <div className='container mx-auto lg:px-46 px-6  grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 pt-10 lg:pt-18 '>
            {
                match_id.map(data =>
                    <div >
                        <div className='group border-2  border-[#00adb5]  rounded-4xl course cursor-pointer duration-500'>
                            <div className=' relative overflow-hidden rounded-t-4xl'>
                                <img className='h-55 w-full  group-hover:scale-110 duration-500 transition-all ease-in-out rounded-t-4xl' src={data.img} alt="" />
                                <div className='bg-gradient-to-t from-black/10 to-white/2  w-full absolute top-0 h-full rounded-t-4xl'></div>
                            </div>
                            <div className='text-white px-4 py-7 bg-white/10  backdrop-blur-[50px] rounded-b-4xl'>
                                <h2 className='lg:text-[27px] text-[20px] text font-[Quicksand] font-bold '>{data.name}</h2>
                                <p className='font-[poppins] text-[12px]  lg:text-[15px] lg:mt-2 text-gray-300'>{data.tittle}</p>

                                <div className='flex justify-between mt-8  '>
                                    <Link to={data.github}>
                                        <div className='btn-anim relative z-1 bg-transparent overflow-hidden  text-white items-center  font-[poppins] backg py-2 px-4 lg:px-6 lg:py-2.5 rounded-md boxh duration-500'>
                                            <p className='text-[13px] lg:text-[16px]'>GitHub</p>
                                        </div>
                                    </Link>
                                    <Link to={data.live_demo}>
                                        <div className='btn-anim relative z-1 bg-transparent overflow-hidden text-white items-center  font-[poppins] backg py-2 px-4 lg:px-6 lg:py-2.5 rounded-md boxh duration-500'>
                                            <p className='text-[13px] lg:text-[16px]'>Live Demo</p>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ProjectDetails;