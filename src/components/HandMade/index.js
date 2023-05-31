import React from "react";
import Slider from "react-slick";
import { ChevronLeft } from "../Icon/chevron-left";
import { ChevronRight } from "../Icon/chevron-right";
import { useSelector } from "react-redux";
const myData = [
  {
    image: "/images/slider.jpg",
  },
  {
    image: "/images/slider2.jpg",
  },
  {
    image: "/images/hand_bg.jpg",
  },
];
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <section
      className="z-30 absolute  top-[40%] right-4 sm:right-6 md:right-10"
      onClick={onClick}
    >
      <button className="opacity-80 border-gray-100 border rounded-xl bg-white text-white  p-2 sm:p-4">
        <ChevronRight />
      </button>
    </section>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <section
      className="z-30 absolute  top-[40%] left-4 sm:left-6 md:left-10"
      onClick={onClick}
    >
      <button className="opacity-80 text-white border-gray-100 border rounded-xl p-2 bg-white sm:p-4">
        <ChevronLeft />
      </button>
    </section>
  );
}

const HandMade = (props) => {
  const data = useSelector((state) => state);

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      {/* <div className={` w-full relative py-20 px-4 bg-cover bg-no-repeat bg-center `} style={{ backgroundImage: `url('/images/circlebg.jpg')` }}>
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
      </div> */}
      <div>
        <div className="grid grid-cols-2 border border-b-[#B7B4AB]">
          <Slider {...settings}>
            {myData?.map((item, idx) => {
              return (
                <div key={idx} className="max-h-[420px] w-full">
                  <img
                    src={item?.image}
                    className="h-full w-full object-cover"
                  />
                </div>
              );
            })}
          </Slider>
          <div className=" items-center mx-6 flex flex-col justify-center">
            <p className="md:text-4xl lg:text-[40px] tracking-[3px] text-3xl text-[#A95414] font-semibold">
              HANDICRAFTS
            </p>
            <p className="md:text-2xl text-[#A95414] tracking-[8px] text-2xl leading-7 mt-2 font-normal">
              MADE SOLID
            </p>
            <div className="max-w-[400px] w-full bg-[#A95414] h-[2px] "></div>
            <div>
              <button
                className="flex mx-auto items-center text-xl justify-center md:py-3 py-2 md:px-12 px-8 focus:outline-none text-white  mt-4 bg-[#a95414]  "
                onClick={() => {
                  data?.auth
                    ? (window.location.href = "/store")
                    : (window.location.href = "./log-in");
                }}
              >
                Sale Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandMade;
