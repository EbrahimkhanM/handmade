import React from "react";

function index({ header, para }) {
  return (
    <>
      <div className=" container flex flex-col justify-center items-center mx-auto  w-full mt-24 mb-8">
        <h1 className=" items-center justify-center text-4xl ">{header}</h1>
        <p className="pt-4 ">{para}</p>
      </div>
    </>
  );
}

export default index;
