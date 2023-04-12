import React from "react";
import Blog from "../components/Blog";
import Cart from "../components/Cart/Cart";
import Layout from "../components/Layout";
import Menu from "../components/Menu/Menu";

function blog() {
  return (
    <Layout>
      <div>
        <Blog />
      </div>
      <aside>
        <Menu />
        <Cart />
      </aside>
    </Layout>
  );
}

export default blog;
