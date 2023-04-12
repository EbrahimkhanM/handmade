import React, { useEffect } from "react";
import { doc, setDoc, } from "firebase/firestore";
import { db } from "../firebase";
import Menu from "../components/Menu/Menu";
import Cart from "../components/Cart/Cart";
import HomeHero from "../components/HomeHero"
import ShareToWear from '../components/ShareToWear'
import TopSeller from "../components/TopSeller"
import Layout from "../components/Layout";
import ItemsList from "../components/Items/ItemsList";
import CatagoriesList from "../components/Items/CatagoriesList";
export default function Products() {
  
  return (
    <Layout>
      <div className="container mx-auto pb-6 ">
        <HomeHero />
        <div className=" mt-6 mb-4">
          <p className="text-5xl text-[#A95414] font-semibold leading-10 text-center w-full "> Categories</p>
        </div>
        <CatagoriesList />
        <TopSeller title="Featured Artisans" para="Start selling and become our Top Artisans" />
        <ShareToWear />
        <aside>
          <Menu />
          <Cart />
        </aside>
      </div>
    </Layout>
  ); 
}
