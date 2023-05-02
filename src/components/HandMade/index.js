import React from 'react';
import { useSelector } from 'react-redux';



const HandMade = (props) => {
    const data = useSelector((state) => state);
  return (
    <>
      <div className={` w-full relative py-20 px-4 bg-cover bg-no-repeat bg-center `} style={{ backgroundImage: `url('/images/circlebg.jpg')` }}>
        <div className="absolute top-0 bottom-0 left-0 right-0 z-0 bg-gray-900 bg-opacity-60"></div>
        <div className="w-full flex flex-col justify-center items-center relative z-1 ">
          <div className="first-letter:">
            <p className="md:text-5xl lg:text-6xl tracking-[3px] text-4xl text-white font-semibold">HANDICRAFTS</p>
            <p className="md:text-3xl text-white tracking-[10px] text-2xl leading-7 mt-2 text-center font-normal">MADE SOLID</p>
            <div className="w-[100%] bg-white h-[2px] "></div>
            
              <button
                className="flex mx-auto items-center text-xl justify-center md:py-3 py-2 md:px-12 px-8 focus:outline-none  rounded text-white  mt-4 bg-[#a95414]  "
                onClick={() => {
                  data?.auth ? (window.location.href = "/store") : (window.location.href = "./log-in");
                }}
              >
              Sale Product
              </button>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default HandMade;
