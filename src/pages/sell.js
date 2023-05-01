import React from "react";
import Sell from "../components/Sell";
import SellHeader from "../components/SellHeader"
import SellFooter from "../components/SellFooter"
import Layout from "../components/Layout";
import Menu from "../components/Menu/Menu";
import Cart from "../components/Cart/Cart";

function sell() {
  return (
    <Layout>
      <div>
        <SellHeader header="Hello Handicrafts fam !" para="You are one step closer to having your own virtual wardrobe!" />

        <Sell
          steps="Step 1"
          heading="Cleaning out my closet!"
          image="/images/indigenous.jpg"
          para="Sort through your closet and look for items that you don’t wear very often but make sure these dresses are in good condition and also in fashion!"
        />
        <Sell
          steps="Step 2"
          heading="Bring out the photographer in you!"
          image="/images/istockphoto.jpg"
          textorder="order-2"
          imgorder="order-1"
          para="Hang the dress against a white background. Make sure the lighting brings out the print, work and colors of the dress so you can use sunlight or a well lit room will also do the trick! Use a good quality camera. All this will help your dress find a new home quickly!"
        />
        <Sell
          steps="Step 3"
          heading="Tell everyone the worth of your dress!"
          image="/images/istockphoto2.jpg"
          textorder="order-1"
          imgorder="order-2"
          para="Tell in detail all the measurements, fabric and any other details that will help the buyer make a purchase decision!"
        />
         <Sell
          steps="Step 4"
          heading="Bring out the photographer in you!"
          image="/images/istockphoto3.jpg"
          textorder="order-2"
          imgorder="order-1"
          para="Hang the dress against a white background. Make sure the lighting brings out the print, work and colors of the dress so you can use sunlight or a well lit room will also do the trick! Use a good quality camera. All this will help your dress find a new home quickly!"
        />

        <SellHeader
          header="Your wardrobe is now virtual!"
          para="Last but the most important of all, make sure the dresses you put up are something that you would still wear yourself! And are not something which is useless."
        />

        <SellFooter />
      </div>

      <aside>
        <Menu />
        <Cart />
      </aside>
    </Layout>
  );
}

export default sell;
