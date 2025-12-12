import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div className='w-full h-700  absolute top-0 bg-black text-white py-15'>
        <div className='container mx-auto lg:px-46 px-6 mt-20'>
            <div className=''>
                <p className='uppercase font-semibold font-[Quicksand]  text-gray-300'>hello,</p>
                <h1 className='lg:text-[66px] text-[45px] font-bold mt-3 font-[Rajdhani]'>I,m <span className='main_color'>Nazmul Hasan</span></h1>
                <h2 className='font-[Quicksand] text-2xl lg:text-3xl font-semibold'>Front-End Developer</h2>
                <div className='flex  items-center gap-4 mt-5'>
                    <Link>
                    <div className='bg-[#00adb5] hover:scale-115 box cursor-pointer duration-300  p-2.5 hover:main-color rounded-full text-lg'>
                        <FaGithub />
                    </div>
                    </Link>
                    <Link>
                    <div className='bg-[#00adb5] hover:scale-115 box cursor-pointer duration-300  p-2.5 hover:main-color rounded-full text-lg'>
                        <FaLinkedinIn />
                    </div>
                    </Link>
                    <Link>
                    <div className='bg-[#00adb5] hover:scale-115 box cursor-pointer duration-300  p-2.5 hover:main-color rounded-full text-lg'>
                        <FaFacebookF />
                    </div>
                    </Link>
                    <Link>
                    <div className='bg-[#00adb5] hover:scale-115 box cursor-pointer duration-300  p-2.5 hover:main-color rounded-full text-lg'>
                        <FaFacebookF />
                    </div>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;