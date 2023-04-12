import React from 'react';
import SellerCard from './SellerCard'

const TopSeller = (props) => {
    const {title, para, } = props
  return (
    <>
      <div className="container mx-auto mt-12 mb-20 ">
        <div className="w-full">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-semibold leading-10">{title}</h1>
            <p className="text-base leading-6 font-normal text-gray-600 mt-6 ">{para}</p>
          </div>
          <div  className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-x-8 gap-y-8 justify-center items-center justify-items-center">
            <SellerCard name="Salman" />
            <SellerCard name="Annas" />
            <SellerCard name="Haris" />
            <SellerCard name="Tahir" />
            <SellerCard name="Shahmir" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSeller;
