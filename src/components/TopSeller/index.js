import React from "react";
// import SellerCard from './SellerCard'
const myData = [
  {
    img: "/images/26576.jpg",
    name: "Abida",
    skill: "HANDMADE FOOTBALLS",
    city: "ISLAMABAD, ICT",
  },
  {
    img: "/images/img2.png",
    name: " Abdur Rehman Naqash",
    skill: "CAMEL SKIN PRODUCTS",
    city: "MULTAN, PUNJAB",
  },
  {
    img: "/images/chitral.jpg",
    name: "Ameeran",
    skill: "HANDMADE CAPS",
    city: "Chitral, KPK",
  },
  { img: "/images/img1.jpg", name: "Qazi Rayhan", skill: "", city: "Lahore, Punjab" },
];

const TopSeller = (props) => {
  const { title, para } = props;
  return (
    <>
      <div className="container mx-auto mt-12 mb-20 ">
        <div className="w-full">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-semibold leading-10">{title}</h1>
            <p className="text-base leading-6 font-normal text-gray-600 mt-6 ">
              {para}
            </p>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-x-8 gap-y-8 justify-center  justify-items-center mt-10">
            {/* <SellerCard name="Salman" />
            <SellerCard name="Annas" />
            <SellerCard name="Haris" />
            <SellerCard name="Tahir" />
            <SellerCard name="Shahmir" /> */}
            {myData?.map((item, idx) => {
              return (
                <div key={idx} className="text-center">
                  <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] p-1 border-[1px] mx-auto rounded-[50%]">
                    <img
                      className="w-full h-full object-cover rounded-[50%]"
                      src={item.img}
                    />
                  </div>
                  <p className="text-[14px] mt-5 text-[#a95414] font-[400]">{item?.skill}</p>
                  <h3 className="text-[20px] font-bold">{item.name}</h3>
                  <p className="text-[#4b5563] text-[14px]">{item.city}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSeller;
