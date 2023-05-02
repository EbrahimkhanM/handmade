import { React, useState } from "react";

function index() {
  const data = [
    {
      id: "1",
      img: "/images/pexels.jpg",
      heading: "ETHICAL FASHION! ",
      para: "What is ethical fashion? There are a lot of ways of explaining what’s ethical about fashion. At Handicrafts Collection, our products are handmade by women in Kenya using locally sourced natural fibers, beads and leather.",
     
    },
    {
      id: "2",
      img: "/images/woodcraving.jpg",
      heading: "HORN CARVING ACCESSORIES",
      para: "Horn carving is an ancient form of art and communication in African cultures.We have partnered with a group in Nairobi, Kenya that has continued the art form.",
    },
    {
      id: "3",
      img: "/images/handmadebag.avif",
      heading: "HANDCRAFTED SISAL BEACH KIONDO BAGS",
      para: "Handicrafts market and/or beach bags are handmade by artisan women in Kenya in an ancient weaving technique. ",
     
    },
    {
      id: "4",
      img: "/images/image4.jpg",
      heading: "How the pressure of keeping up with fashion a burden on your finances",
      para: "Do you feel pressured by society always to look good and wear the latest fashion? Are you always looking out for the latest designs just",
      Readmore: "",
    },
    {
      id: "5",
      img: "/images/wool.jpg",
      heading: "Is spending a fortune on a dress worth it?",
      para: "'I have nothing to wear' - Khala Rukhsana on opening her full wardrobe Brands are springing up like wild grass. Each brand wants to be",
      Readmore: "",
    },
    {
      id: "6",
      img: "/images/image6.jpg",
      heading: "Life in Full Colour Exhibition",
      para: "Join us at the Woza Moya upstairs Gallery, project of the Hillcrest AIDS centre Trust, for a celebration of vibrant colour. The exhibition made possible by funding from the National Art Council, features work by local artists and crafters.",
      Readmore: "",
    },
    {
      id: "7",
      img: "/images/image7.webp",
      heading: "Ivory Jewellery",
      para: "Ivory is a hard cream shade material that comes from an elephant trunk. It continues to compare with other expensive stuff like pearl or sliver.Jaipur, Rajasthan is like a hub for Ivory. The ivory bangles are a piece of traditional jewellery, with Rajasthani women wearing them on every important occasion.",
    
    },
    {
      id: "8",
      img: "/images/image8.jpg",
      heading: "Dhurrie",
      para: "Dhurrie is a thick and flat handwoven rug, that Indians use to cover the floor to sit or sleep on.They are used for large political or social gatherings and are quite comfortable. Most importantly, they have low maintenance.",
    },
    {
      id: "9",
      img: "/images/image9.jpg",
      heading: "Tangaliya Work",
      para: "Tangaliya Work or Daana weaving specialises in shawls and creating textiles for dress material.Dangassia is the native community of Gujarat who began this craft 700 years back. Surendranagar district of Gujarat is the home of Tangaliya Work.",
    
    },
    // {
    //   id: "10",
    //   img: "/images/indigenous.jpg",
    //   heading: "How to be the Perfect Bride-to-be",
    //   para: "A Pakistani wedding isn't anything less than going into war starting from preparing your ammo i.e. the décor, the dresses, the invites moving to the ",
    //   Readmore: "",
    // },
  ];
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center gap-6 flex-wrap mt-6">
          {data.map((blog) => {
            const { id, img, heading, para, Readmore } = blog;
            return (
              <div className="mt-10" key={id}>
                 
                <img className="w-[370px] h-[370px] object-cover" src={img} alt="img1" />
                <h2 className="font-bold text-slate-500 text-lg mt-4 w-[370px]">{heading}</h2>
                <p className="text-xs text-slate-400 w-[370px] mt-2">{para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default index;
