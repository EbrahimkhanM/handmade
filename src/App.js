import { useEffect, Suspense, useState } from "react";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartData, sendCartData } from "./store/cart-actions";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Products from "./pages/products";
import LogIn from "./pages/log-in";
import SignUp from "./pages/sign-up";
import "./index.css";
import Users from "./pages/users";
import Verify from "./pages/verify";
import Home from "./pages/home";
import Store from "./pages/store";
import Sell from "./pages/sell";
import Blog from "./pages/blog";
import Payment from "./pages/payment";
import axios from "axios";
import ContactUs from "./pages/contact-us";
import About from "./pages/about";

const Checkout = React.lazy(() => import("./pages/checkout"));
const NotFound = React.lazy(() => import("./pages/notFound"));

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <> 
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/users" element={<Users />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
