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
          heading="Coppersmithing!"
          image="/images/copper.jpg"
          para="Copper objects have become an established art form, and copperwork is now cited among the most renowned handicrafts of Türkiye. Every year, thousands of functional and decorative objects are produced using copper. The practice originates in Central Asia, and it’s thought to have been brought to Anatolia by the Seljuk Turks.!"
        />
        <Sell
          steps="Step 2"
          heading="Khavda Pottery Craft!"
          image="/images/istockphoto.jpg"
          textorder="order-2"
          imgorder="order-1"
          para="Khavda Pottery Craft is from North Kutch, Gujarat. Earlier people used to make domestic items such as cooking pots, plates, castles and so forth.It is said men bring mud from the lakeside and give it a shape. Then, ladies do all the decorations on it.!"
        />
        <Sell
          steps="Step 3"
          heading="Balinese handmade rattan eco bags!"
          image="/images/istockphoto2.jpg"
          textorder="order-1"
          imgorder="order-2"
          para="Balinese handmade rattan eco bags in a local souvenir market in Bali, Indonesia!"
        />
         <Sell
          steps="Step 4"
          heading="Handmade Indian Bags!"
          image="/images/istockphoto3.jpg"
          textorder="order-2"
          imgorder="order-1"
          para="Handmade Indian Vintage Traditional Style Women Shopping Banjara Bag , Women Fashion Look Ibiza Style Outdoor Shoulder bag!"
        />
         <Sell
          steps="Step 5"
          heading="ETHNIC JEWELLERY!"
          image="/images/jewellery.jpg"
          textorder="order-1"
          imgorder="order-2"
          para="From minimalist to heavy wedding-themed goodies, you can find a range of hand-made jewellery items in Pakistan.Jewellery is prepared by melting the metal and shaping it in different designs with the help of moulds. Different types of jewels are then fixed with the help of hands and machines to prepare beautiful ornaments.!"
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
