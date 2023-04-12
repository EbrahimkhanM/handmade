import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";

const Hero = () => {
  const data = useSelector((state) => state);

  const authHandler = () => {
    data?.auth ? window.location.href='./products' : window.location.href='./log-in'
  };
  return (
    <>
      <div className="bg-center bg-cover bg-no-repeat py-20 mb-10 relative" style={{ backgroundImage: `url('/images/buy.jpg')` }}>
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-gray-900 bg-opacity-60 z-0"></div>
        <div className="flex flex-col justify-center items-center relative z-1 ">
          <div className="first-letter:">
            <p className="md:text-5xl lg:text-6xl tracking-[3px] text-4xl text-white font-semibold">HANDICRAFTS</p>
            <p className="md:text-3xl text-white tracking-[10px] text-2xl leading-7 mt-2 text-center font-normal">MADE SOLID</p>
            <div className="w-[100%] bg-white h-[2px] "></div>

            <button onClick={authHandler} className="flex mx-auto items-center text-xl justify-center md:py-3 py-2 md:px-12 px-8 focus:outline-none  rounded text-white  mt-4 bg-[#A95414]  ">
              Find Crafts
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
