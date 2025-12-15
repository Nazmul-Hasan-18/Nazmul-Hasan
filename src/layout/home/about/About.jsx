import React from 'react';

const About = () => {
    return (
        <div className='bg-[#222831]'>
            <div className='container mx-auto lg:px-46  lg:grid grid-cols-2 gap-32 items-center py-10'>
                <div className='px-6'>
                    <h2 className='lg:text-[50px] text-[30px] mt-2 font-bold  font-[poppins] text-white'>About <span className='main_color'>Me</span></h2>
                    <p className='font-[poppins] text-gray-400 text-[14px] lg:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci possimus ratione fuga doloremque, illo animi necessitatibus dolore doloribus corrupti?</p>
                </div>
                <div className='flex flex-col items-center mt-5 lg:mt-0'>
                    <div className='bg- relative'>
                        <img  src="/src/img/doodle items.png" alt="" />
                        <div className='top-0 left-13 absolute'>
                            <img className='w-[80%] lg:w-[90%]' src="/src/img/Group 78.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;