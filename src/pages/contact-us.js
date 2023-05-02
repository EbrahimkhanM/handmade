import React from "react";
import Layout from "../components/Layout";
import { ContactForm } from "../components/ContactForm";
import Menu from "../components/Menu/Menu";
import Cart from "../components/Cart/Cart";

export default function ContactUs() {
  return (
    <Layout>
      <div className="container mx-auto pb-6 bg-[#F9F9F9]">
        <div className="px-6 lg:px-8 pt-6 pb-10 mb-10 w-3/4 mx-auto bg-[#FFFFFF] shadow-sm rounded-b-sm">
          <div className=" mt-6 mb-4">
            <p className="text-5xl text-[#A95414] font-semibold leading-10 text-center w-full ">
              Contact Us
            </p>
          </div>
            <hr />
          <div>
            <p className="text-[16px] leading-[26px] font-[300] Roboto tracking-[0.02em] mt-4">
              Welcome to Handmade.com's contact page! We're always happy to hear
              from our customers and visitors, and we strive to make it easy for
              you to get in touch with us whenever you need. Whether you have a
              question about a product, need help with an order, or just want to
              say hello, we're here to help.
            </p>
            <p className="text-[16px] leading-[26px] font-[300] Roboto tracking-[0.02em]">
              To get in touch with us, you can use the contact form on this page,
              which will send your message directly to our support team.
              Alternatively, you can email us at support@handmade.com or reach out
              to us on social media. Our team is available to answer your
              questions and address any concerns you may have, and we'll do our
              best to respond to you as quickly as possible.
            </p>
            <p className="text-[16px] leading-[26px] font-[300] Roboto tracking-[0.02em]">
              Thank you for choosing Handmade.com for your handmade product needs,
              and we look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
      <aside>
        <Menu />
        <Cart />
      </aside>
    </Layout>
  );
}
