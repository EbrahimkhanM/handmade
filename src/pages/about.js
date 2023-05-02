import React from "react";
import Layout from "../components/Layout";
import Menu from "../components/Menu/Menu";
import Cart from "../components/Cart/Cart";

export default function About() {
  return (
    <div>
      <Layout>
        <div className="container mx-auto pb-6 bg-[#F9F9F9]">
          <div className="px-6 lg:px-8 pt-6 pb-10 mb-10 w-3/4 mx-auto bg-[#FFFFFF] shadow-sm rounded-b-sm">
            <p className="text-5xl text-[#A95414] pb-5 font-semibold leading-10 text-center w-full ">
              About
            </p>
            <hr />
            <div className="">
              
              <div className="pt-5 ">
                <p className="text-[16px] leading-[26px] font-[300] Roboto tracking-[0.02em]">
                  Welcome to Handmade, the online marketplace where you can buy
                  and sell unique, handmade products from around the world! Our
                  platform was launched in 2022 with the mission of providing a
                  space for artisans and crafters to showcase and sell their
                  one-of-a-kind creations. We understand the value of handmade
                  goods and the skill and dedication that goes into creating
                  each item. That's why we are committed to connecting buyers
                  with talented makers and providing a platform that supports
                  small businesses and independent creators. At Handmade, you'll
                  find a wide range of categories, from jewelry and clothing to
                  home decor and art, all made with care and attention to
                  detail. Whether you're looking for a special gift for a loved
                  one or a unique item to add to your collection, we have
                  something for everyone.
                </p>
                <div className="">
                <img src="/images/aboutbg.jpg" className="h-[420px] mx-auto my-5"></img>
              </div>
                <p className="text-[16px] leading-[26px] font-[300] Roboto tracking-[0.02em] pt-2">
                  Our platform is easy to use, whether you're a buyer looking to
                  browse and purchase handmade products, or a seller looking to
                  create your own online shop. We provide tools and resources to
                  help you set up your shop, manage your inventory, and connect
                  with customers. At Handmade, we are passionate about promoting
                  sustainable and ethical practices in the world of commerce.
                  That's why we encourage our sellers to use
                  environmentally-friendly materials and methods, and why we
                  prioritize fair compensation for our artisans and crafters.
                </p>
                <p className="text-[16px] leading-[26px] font-[300] Roboto tracking-[0.02em] pt-2">
                  Thank you for choosing Handmade as your destination for
                  unique, handmade products. We hope you enjoy exploring our
                  platform and discovering the many beautiful and high-quality
                  items our makers have to offer.
                </p>
              </div>
              
            </div>
          </div>
        </div>
        <aside>
          <Menu />
          <Cart />
        </aside>
      </Layout>
    </div>
  );
}
