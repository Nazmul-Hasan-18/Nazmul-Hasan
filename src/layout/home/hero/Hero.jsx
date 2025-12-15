import React from 'react';
import { AiOutlineExport, AiOutlineRetweet } from 'react-icons/ai';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { LuSquareArrowOutDownRight } from 'react-icons/lu';
import { Link, Links } from 'react-router';
import img from "/src/img/Img.jpg"
const Hero = () => {
    return (
        <div className='w-full relative top-0 bg-black text-white pt-10 pb-15 lg:py-20'>
        <div className='container mx-auto lg:px-46 px-6 mt-20 lg:grid grid grid-cols-1 lg:grid-cols-2 items-center'>
            <div className=''>
                <p className='uppercase font-semibold font-[Quicksand]  text-gray-300'>hello,</p>
                <h1 className='lg:text-[58px] text-[34px] font-bold mt-3 font-[poppins]'>I,m <span className='main_color'>Nazmul Hasan</span></h1>
                <h2 className='font-[Quicksand] text-2xl lg:text-4xl font-bold'>Jr. Front-End Developer</h2>
                <div className='flex  items-center gap-2.5 lg:gap-4 mt-4 lg:mt-8'>
                    <Link>
                    <div className='hover:bg-[#00adb5] bg-gray-900 text-[#00adb5] hover:text-white box cursor-pointer duration-300 lg:p-3 p-2.5  rounded-full text-md lg:text-xl'>
                        <FaGithub />
                    </div>
                    </Link>
                    <Link>
                    <div className='hover:bg-[#00adb5] bg-gray-900 text-[#00adb5] hover:text-white box cursor-pointer duration-300  lg:p-3 p-2.5 hover:main-color rounded-full text-md lg:text-xl'>
                        <FaLinkedinIn />
                    </div>
                    </Link>
                    <Link>
                    <div className='hover:bg-[#00adb5] bg-gray-900 text-[#00adb5] hover:text-white box cursor-pointer duration-300  lg:p-3 p-2.5  hover:main-color rounded-full text-md lg:text-xl'>
                        <FaFacebookF />
                    </div>
                    </Link>
                    <Link>
                    <div className='hover:bg-[#00adb5] bg-gray-900 text-[#00adb5] hover:text-white box cursor-pointer duration-300  lg:p-3 p-2.5  hover:main-color rounded-full text-md lg:text-xl'>
                        <FaInstagram />
                    </div>
                    </Link>
                </div>
                <div className='flex items-center py-5 gap-4 lg:gap-5 mt-3 lg:mt-6'>
                    
                        <Link>
                        <div className='btn-anim relative z-1 bg-transparent overflow-hidden flex text-white items-center gap-1.5 lg:gap-2 font-[poppins] backg py-2 px-4 lg:px-6 lg:py-2.5 rounded-sm boxh duration-500'>
                            <p className='text-sm lg:text-[16px]'>Here Me</p>
                            <div className='font-bold text-lg lg:text-[22px]'>
                             <AiOutlineRetweet />
                            </div>
                        </div>
                        </Link>
                        <Link>
                        <div className='btn-anim relative z-1 bg-transparent overflow-hidden flex text-white items-center gap-1.5 lg:gap-2 font-[poppins] backg py-2 px-4 lg:px-6 lg:py-2.5 rounded-sm boxh duration-500'>
                            <p className='text-sm lg:text-[16px]'>Contact</p>
                            <div className='font-bold text-sm lg:text-lg'>
                             <LuSquareArrowOutDownRight />
                            </div>
                        </div>
                        </Link><br />
                        
                </div>
            </div>
            <div className=' flex  flex-col lg:flex-row items-center mt-10 lg:mt-0'>
                <img className='lg:w-106 w-66 ml-0 lg:ml-20 rounded-full img_box bg-white' src={img} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Hero;