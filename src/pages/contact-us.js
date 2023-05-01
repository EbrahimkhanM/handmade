import React from "react";
import Layout from "../components/Layout";
import { ContactForm } from "../components/ContactForm";
import Menu from "../components/Menu/Menu";
import Cart from "../components/Cart/Cart";

export default function ContactUs() {
  return (
    <Layout>
      <div className="container mx-auto pb-6 ">
        <div className=" mt-6 mb-4">
          <p className="text-5xl text-[#A95414] font-semibold leading-10 text-center w-full ">
            Contact Us
          </p>
        </div>
        <div>For description</div>
      </div>
      <ContactForm />
      <aside>
        <Menu />
        <Cart />
      </aside>
    </Layout>
  );
}
