import React from 'react';
import { FaFacebookF } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='w-full h-700 bg-[#222831] absolute top-0 text-white'>
        <div className='container mx-auto px-46 mt-20'>
            <div className=''>
                <p>hello,</p>
                <h1>I am <span>Nazmul Hasan</span></h1>
                <h2>Front-End Developer</h2>
                <div>
                    <div>
                        <FaFacebookF />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;