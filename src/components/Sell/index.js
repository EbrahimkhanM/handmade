import React from "react";

function index({ steps, heading, image, para, textorder, imgorder, btntext }) {
  return (
    <>
      <div className="container flex flex-col justify-center items-center  w-full mx-auto  ">
        <div className={` flex justify-center items-center w-full  `}>
          <div className={`${textorder} w-[50%] px-24`}>
            <h1 className="font-bold text-[#8c0327] text-2xl justify-center items-center mx-auto mx-24">{steps}</h1>
            <h1 className="font-medium  text-3xl mt-6">{heading}</h1>
            <p className="mt-4">{para}</p>
          </div>
          <div className={`${imgorder} w-[50%]`}>
            <img src={image} className="w-full" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default index;
