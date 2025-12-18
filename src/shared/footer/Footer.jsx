import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <div className='container mx-auto  font-[poppins] py-10 lg:py-15  '>
                <div className='flex flex-col items-center gap-5'>
                    <div className= 'flex items-center gap-4 lg:gap-9 text-[12px] lg:text-[17px] text-white'>
                        <NavLink ><p className=' duration-300'>Home</p></NavLink>
                        <NavLink to="/about"><p className='hover:text-gray-300 duration-300'>About</p></NavLink>
                        <NavLink><p className='hover:text-gray-300 duration-300'>Service</p></NavLink>
                        <NavLink><p className='hover:text-gray-300 duration-300'>Project</p></NavLink>
                        <NavLink><p className='hover:text-gray-300 duration-300'>Contact</p></NavLink>
                    </div>
                    <div className='flex  items-center gap-2.5 lg:gap-4 mt-2 lg:mt-3'>
                    <Link to="https://github.com/Nazmul-Hasan-18">
                    <div className='bg-[#00adb5] text-white box cursor-pointer duration-300 lg:p-3 p-2.5  rounded-full text-sm lg:text-lg'>
                        <FaGithub />
                    </div>
                    </Link>
                    <Link>
                    <div className='bg-[#00adb5] text-white box cursor-pointer duration-300  lg:p-3 p-2.5 hover:main-color rounded-full text-sm lg:text-lg'>
                        <FaLinkedinIn />
                    </div>
                    </Link>
                    <Link to="https://www.facebook.com/share/14UhohosREW/">
                    <div className='bg-[#00adb5] text-white box cursor-pointer duration-300  lg:p-3 p-2.5  hover:main-color rounded-full text-sm lg:text-lg'>
                        <FaFacebookF />
                    </div>
                    </Link>
                    <Link to="https://www.instagram.com/nazmul__18?igsh=d2FhNG10dDNrdzFy">
                    <div className='bg-[#00adb5] text-white box cursor-pointer duration-300  lg:p-3 p-2.5  hover:main-color rounded-full text-sm lg:text-lg'>
                        <FaInstagram />
                    </div>
                    </Link>
                </div>
                </div>
            </div>
            <div className='py-4 text-center  border-t border-gray-400 font-[poppins] bg-gray-900 text-[13px] lg:text-[16px]'>
                <p className='text-gray-300'>Copyright @ <span className='main_color  font-semibold '>NAZMUL</span></p>
            </div>
            </div>
    );
};

export default Footer;