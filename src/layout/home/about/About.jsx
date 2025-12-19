import React from 'react';
import img from "/src/img/doodle items.png"
import img1 from "/src/img/Group 78.png"
const About = () => {
    return (
        <div className='bg-[#222831]'>
            <div className='container mx-auto lg:px-46  lg:grid grid-cols-2 gap-32 items-center py-10'>
                <div className='px-6' data-aos="fade-up"
                    data-aos-duration="3000">
                    <h2 className='lg:text-[50px] text-[30px] mt-2 font-bold  font-[poppins] text-white'>About <span className='main_color'>Me</span></h2>
                    <p className='font-[poppins] mt-2 lg:mt-3 text-gray-400 text-[14px] lg:text-[16px]'>Hello! I’m Nazmul Hasan, a passionate MERN stack and front-end developer. I love turning ideas into interactive and user-friendly web applications. I enjoy solving challenging problems and continuously learning new technologies to improve my skills. When I’m not coding, I explore UI/UX trends and experiment with creative designs to make every project visually appealing. I’m always excited to collaborate on innovative projects and bring ideas to life.</p>
                </div>
                <div className='flex flex-col items-center mt-5 lg:mt-0' data-aos="fade-up"
     data-aos-duration="3000">
                    <div className='bg- relative'>
                        <img src={img} alt="" />
                        <div className='top-0 left-13 absolute'>
                            <img className='w-[80%] lg:w-[90%]' src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;