import React, { useEffect } from "react";
import { doc, setDoc, } from "firebase/firestore";
import { db } from "../firebase";
import Menu from "../components/Menu/Menu";
import Cart from "../components/Cart/Cart";
import HandMade from '../components/HandMade'
import TopSeller from "../components/TopSeller"
import Layout from "../components/Layout";
import CatagoriesList from "../components/Items/CatagoriesList";
import HomeHeroSlider from "../components/HomeHeroSlider";
import LocationMap from "../components/LocationMap"
export default function Home() {
  
  return (
    <Layout>
      <div className="container mx-auto pb-6 ">
        <HomeHeroSlider />
        <div className=" mt-6 mb-4">
          <p className="text-5xl text-[#A95414] font-semibold leading-10 text-center w-full "> Discover unique hand-picked items</p>
        </div>
        <CatagoriesList />
        <TopSeller title="Featured Artisans" para="Start selling and become our Top Artisans" />
        <LocationMap />
        <HandMade />
        <aside>
          <Menu />
          <Cart />
        </aside>
      </div>
    </Layout>
  ); 
}
