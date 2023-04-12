import React, { useEffect } from "react";
import Cart from "../components/Cart/Cart";
import Layout from "../components/Layout";
import Menu from "../components/Menu/Menu";

import PostForm from "../components/PostForm";

const Store = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="container mx-auto ">
          <div style={{ backgroundImage: `url('/images/product.jpg')` }} className="w-full relative py-20 bg-cover bg-center bg-no-repeat">
            <div className="absolute z-0 inset-0 bg-gray-900 bg-opacity-40"></div>
            <p className="text-5xl text-center text-white relative z-1 font-semibold">Post Your Product From Here</p>
          </div>

          <PostForm />
        </div>
        <aside>
          <Menu />
          <Cart />
        </aside>
      </div>
    </Layout>
  );
};

export default Store;
