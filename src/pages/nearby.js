import React from "react";
import ItemsList from "../components/itemsnearby/ItemsList";
import {auth} from "../firebase"
import Menu from "../components/Menu/Menu";
import Cart from "../components/Cart/Cart";
import { useSelector } from "react-redux";
import styles from "./Home.module.css";
import Layout from '../components/Layout'

const Nearby = () => {

  return (
    <>
      <Layout>
        <main>
          <div className="container mx-auto px-4 mb-10">
            
            <div style={{ backgroundImage: `url('/images/product.jpg')` }} className="w-full relative py-20 bg-cover bg-center bg-no-repeat">
              <div className="absolute z-0 inset-0 bg-gray-900 bg-opacity-40"></div>
              <p className="text-5xl text-center text-white relative z-1 font-semibold">Products Nearby to your Location</p>
            </div>
          </div>
          <ItemsList />
          <aside>
            <Menu />
            <Cart />
          </aside>
        </main>
      </Layout>
    </>
  );
};

export default Nearby;
