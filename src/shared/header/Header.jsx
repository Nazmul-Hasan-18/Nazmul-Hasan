import React, { useState } from 'react';
import { FaAccusoft, } from 'react-icons/fa';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { NavLink } from 'react-router';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='font-[poppins] fixed w-full z-40'>
      <div className='py-4 lg:py-3 shadow-gray-600 bg-white/10 backdrop-blur-md'>
        <div className='container mx-auto px-4 md:px-46 flex items-center justify-between'>

          {/* Logo */}
          <div className='flex items-center gap-1 text-white'>
            <div className='text-[35px] md:text-[48px]'>
              <FaAccusoft />
            </div>
            <h2 className='text-2xl md:text-4xl  xl font-bold'>NH.DEV</h2>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-9 text-[17px] text-white'>
            <NavLink><p className='hover:text-gray-300 duration-300'>Home</p></NavLink>
            <NavLink><p className='hover:text-gray-300 duration-300'>About</p></NavLink>
            <NavLink><p className='hover:text-gray-300 duration-300'>Service</p></NavLink>
            <NavLink><p className='hover:text-gray-300 duration-300'>Project</p></NavLink>
            <NavLink>
              <p className='bg-[#00adb5] text-white px-4 rounded-sm py-2 button'>
                Contact me
              </p>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden text-white text-2xl cursor-pointer' onClick={() => setOpen(!open)}>
            {open ? <RxCross2 /> : <HiOutlineMenuAlt1 />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden bg-white/10 backdrop-blur-lg text-white transition-all duration-300 overflow-hidden ${
            open ? 'max-h-196 py-4' : 'max-h-0'
          }`}
        >
          <div className='flex flex-col gap-4 px-6 text-sm'>
            <NavLink><p className='hover:text-gray-300 duration-300'>Home</p></NavLink>
            <NavLink><p className='hover:text-gray-300 duration-300'>About</p></NavLink>
            <NavLink><p className='hover:text-gray-300 duration-300'>Service</p></NavLink>
            <NavLink><p className='hover:text-gray-300 duration-300'>Project</p></NavLink>
            <NavLink>
              <p className='bg-[#00adb5] text-white w-max px-5 rounded-sm py-2 button'>
                Contact me
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
