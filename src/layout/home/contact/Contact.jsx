import React from "react";
import { IoCall } from "react-icons/io5";
import { MdAddLocationAlt, MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="py-12 bg-[#222831]" >
      <div className='container mx-auto px-6 lg:px-46 font-["Poppins"] ' data-aos="fade-up"
     data-aos-duration="3000">
        <h3 className="text-3xl lg:text-4xl font-semibold text-white text-center">
          Here <span className="main_color">Me</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 pt-10 lg:pt-0">
          <div className=" lg:py-10  ">
            <div className="lg:flex flex flex-col lg:flex-row items-center gap-4 ">
              <input
                className="border  border-[#00adb5] text-white outline-none duration-300 text-sm lg:text-[16px] py-3 px-3 w-[99%] rounded-md boxh"
                type="text"
                placeholder="First Name"
              />
              <input
                className="border border-[#00adb5] text-white outline-none w-[99%] duration-300 text-sm lg:text-[16px]  py-3 px-3 rounded-md boxh"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <input
              className="border border-[#00adb5] outline-none w-full lg:mt-7 mt-4  text-white py-3 px-4 text-sm lg:text-[16px] rounded-md duration-300 boxh"
              type="Email"
              placeholder="Email Address"
            />
            <textarea
              className="border border-[#00adb5] text-white outline-none rounded-md py-2 mt-7 w-full h-25 lg:h-35 text-sm lg:text-[16px] px-4 boxh duration-300"
              name=""
              id=""
              placeholder="Message...."
            ></textarea>
            <p className="btn-anim text-center cursor-pointer bg-[#00adb5] font-semibold text-sm lg:text-[17px] py-3 button rounded-md duration-500 mt-5 text-white">
              Submit
            </p>
          </div>
          <div className="py-10 px-4 lg:px-8 bg-gradient-to-b from-[#1e1533] to-[#00adb5] rounded-md">
            <h2 className="text-2xl lg:text-3xl text-white font-semibold">Contact <span className="main_color">Us</span></h2>
            <p className="text-gray-200 text-sm lg:text-[16px] mt-2">
              Don't hesitate to ask for a consultation or ask any type of
              questions directly, just contact us
            </p>
            <div className="flex flex-col gap-4 mt-6 text-gray-300 ">
              <div className="flex items-center gap-4 ">
                <div className=" lg:text-3xl text-2xl bg-gradient-to-r from-[#00adb5] to-[#7ff4fa] py-[9px] px-2.5 rounded-md text-white">
                  <MdAddLocationAlt />
                </div>
                <p className="text-[14px] lg:text-[15px] font-semibold">
                  Purbo Rampura , Banasree <br />
                   <span className="font-medium">Dhaka , Bangladesh</span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="lg:text-2xl text-xl bg-gradient-to-r from-[#00adb5] to-[#7ff4fa] py-2.5 px-3 rounded-md text-white">
                  <MdEmail />
                </div>
                <p className="text-[14px] lg:text-[15px] font-semibold">
                  Email Address <br />
                   <span className="font-medium text-[14px] lg:text-[15px]">nazmulhasan.official98@gmail.com</span>
                </p>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="lg:text-2xl text-xl bg-gradient-to-r from-[#00adb5] to-[#7ff4fa] py-[11px] px-3 rounded-md text-white">
                  <IoCall />
                </div>
                <p className="text-[14px] lg:text-[15px] font-semibold">
                  Telephone <br />
                   <span className="font-medium">01756-966372</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
