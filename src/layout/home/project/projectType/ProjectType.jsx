import React, { useState } from 'react';
import ProjectDetails from '../ProjectDeatails.jsx/ProjectDetails';

const ProjectType = () => {
    const items = [
        {
            id: 1,
            name: "E-commarse"
        },
        {
            id: 2,
            name: "Learning MT."
        },
        {
            id: 3,
            name: "Car Booking"
        },
    ]

    const [data, setData] = useState(null)
    const evenHandler = (id) => {
        setData(id)
    }
    return (
        <div data-aos="fade-up"
            data-aos-duration="3000">
            <div className='container mx-auto px-6 lg:px-46  flex lg:flex-row flex-col lg:justify-between lg:items-center '>
                <div className='font-[poppins]'>
                    <h2 className='lg:text-[45px] text-[32px] text-white font-semibold'>My Recent <span className='main_color'>Works</span></h2>
                </div>
                <div className=' font-[Quicksand] text-white flex flex-wrap items-center lg:gap-5 gap-3 lg:text-sm  text-[12px] mt-4 lg:mt-0'>
                    <p className={`${data == null ? 'bg-[#00adb5]' : 'bg-white/20 py-2.5 px-5 lg:py-2.5 lg:px-6'}   cursor-pointer py-2 px-6 rounded-full`} onClick={() => evenHandler(null)}>All</p>
                    {
                        items.map(item => (
                            <div className={`${data == item.id ? 'bg-[#00adb5]' : 'bg-white/20 '}  cursor-pointer py-2.5 px-5 lg:py-2.5 lg:px-6 rounded-full`} onClick={() => evenHandler(item.id)}>
                                <p>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <ProjectDetails data={data} ></ProjectDetails>
            </div>
        </div>
    );
};

export default ProjectType;