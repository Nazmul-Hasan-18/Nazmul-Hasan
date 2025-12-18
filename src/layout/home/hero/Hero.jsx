import React, { useEffect, useState } from 'react';
import { AiOutlineRetweet } from 'react-icons/ai';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { LuSquareArrowOutDownRight } from 'react-icons/lu';
import { Link } from 'react-router';
import img from "/src/img/Img.jpg";
const Hero = () => {
    const text = "Nazmul Hasan";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(text.slice(0, index + 1));
                setIndex(index + 1);

                if (index === text.length) {
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            } else {
                setDisplayText(text.slice(0, index - 1));
                setIndex(index - 1);

                if (index === 0) {
                    setIsDeleting(false);
                }
            }
        }, 120);

        return () => clearTimeout(timeout);
    }, [index, isDeleting]);

    return (
        <div className='w-full relative top-0 bg-black text-white pt-10 pb-15 lg:py-20'>
            <div className='container mx-auto lg:px-46 px-6 mt-20 lg:grid grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div className=''>
                    <p className='uppercase font-semibold font-[Quicksand]  text-gray-100'>hello,</p>
                    <h1 className='lg:text-[58px] text-[33px] font-bold mt-3 font-[poppins]'>
                        I'm <span className='main_color'>{displayText}</span>
                        <span className="animate-pulse  text-[34px] font-semibold lg:text-5xl">|</span>
                    </h1>
                    <div class="loader font-[Quicksand] text-[20px] lg:text-[34px] font-bold flex items-center gap-2 lg:gap-4">
                        <p>Jr.</p>
                        <div class="words  lg:py-1 py-0">
                            <span className="word ">MERN Stack Development</span>
                            <span className="word">Front-End Development</span>
                            <span className="word">MERN Stack Development</span>
                        </div>
                    </div>
                    <div className='flex  items-center gap-2.5 lg:gap-4 mt-4 lg:mt-8'>
                        <Link to="https://github.com/Nazmul-Hasan-18">
                            <div className='hover:bg-[#00adb5] bg-gray-900 text-[#00adb5] hover:text-white box cursor-pointer duration-300 lg:p-3 p-2.5  rounded-full text-md lg:text-xl'>
                                <FaGithub />
                            </div>
                        </Link>
                        <Link>
                            <div className='hover:bg-[#00adb5] bg-gray-900 text-[#00adb5] hover:text-white box cursor-pointer duration-300  lg:p-3 p-2.5 hover:main-color rounded-full text-md lg:text-xl'>
                                <FaLinkedinIn />
                            </div>
                        </Link>
                        <Link to="https://www.facebook.com/share/14UhohosREW/">
                            <div className='hover:bg-[#00adb5] bg-gray-900 text-[#00adb5] hover:text-white box cursor-pointer duration-300  lg:p-3 p-2.5  hover:main-color rounded-full text-md lg:text-xl'>
                                <FaFacebookF />
                            </div>
                        </Link>
                        <Link to="https://www.instagram.com/nazmul__18?igsh=d2FhNG10dDNrdzFy">
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