import React from 'react'
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { ChevronLeft } from '../Icon/chevron-left';
import { ChevronRight } from '../Icon/chevron-right';
const myData = [
  {
    image: "/images/slider.jpg",
    title: "HANDICRAFTS",
    tagline: "MADE SOLID",
    btn: "Find Crafts"
  },
  {
    image: "/images/slider2.jpg",
    title: "HANDICRAFTS",
    tagline: "MADE SOLID",
    btn: "Find Crafts"
  },
  {
    image: "/images/hand_bg.jpg",
    title: "HANDICRAFTS",
    tagline: "MADE SOLID",
    btn: "Find Crafts"
  },
]


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <section className="z-30 absolute  top-[40%] right-4 sm:right-6 md:right-10" onClick={onClick}>
      <button className="  border-gray-100 border rounded-xl bg-white text-white  p-2 sm:p-4">
        <ChevronRight />
      </button>
    </section>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <section className="z-30 absolute  top-[40%] left-4 sm:left-6 md:left-10" onClick={onClick}>
      <button className=" text-white border-gray-100 border rounded-xl p-2 bg-white sm:p-4">
        <ChevronLeft />
      </button>
    </section>
  );
}

const HomeHeroSlider = () => {
  const data = useSelector((state) => state);

  const authHandler = () => {
    data?.auth ? window.location.href = './products' : window.location.href = './log-in'
  };

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div >
      <Slider {...settings}>
        {myData?.map((item, idx) => {
          return (
            <div key={idx}>
              <div className="bg-center bg-cover bg-no-repeat py-20 mb-10  w-full relative " style={{ backgroundImage: `url(${item?.image})` }}>
                <div className="absolute top-0 bottom-0 right-0 left-0 bg-gray-900 bg-opacity-60 "></div>
                <div className={`flex flex-col justify-center items-center ${'/home' ? 'relative z-1' : ''} `}>
                  <div className="first-letter: ">
                    <p className="md:text-5xl lg:text-6xl tracking-[3px] text-4xl text-white font-semibold">{item.title}</p>
                    <p className="md:text-3xl text-white tracking-[10px] text-2xl leading-7 mt-2 text-center font-normal">{item.tagline}</p>
                    <div className="w-[100%] bg-white h-[2px] "></div>

                    <button onClick={authHandler} className="flex mx-auto items-center text-xl justify-center md:py-3 py-2 md:px-12 px-8 focus:outline-none  rounded text-white  mt-4 bg-[#A95414]  ">
                      {item.btn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
export default HomeHeroSlider;