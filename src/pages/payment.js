/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import OrderSummary from "../components/OrderSummary";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/uiSlice";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";

const Payment = () => {
  const [users, setUsers] = useState();
  const auth = getAuth();
  const [selectedItem, setSelectedItem] = useState(false);
  const [items, setItems] = useState([]);
  console.log("Mypayment items is here----------->", items)
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);
  const products = useSelector((state) => state.cart.items);
console.log("products in cart---------------->",)
  const user = auth.currentUser;
  const dispatch = useDispatch();

  useEffect(() => {
    
    const getData = async () => {
      dispatch(uiActions.toggleLoading(true));
      setIsLoading(true);
      await getDocs(collection(db, "orders"))
        .then((querySnapshot) => {
          const loadedItems = [];
          querySnapshot.forEach((doc) => {
            loadedItems.push(doc.data());
            setIsLoading(false);
          });
          setItems(loadedItems);
          dispatch(uiActions.toggleLoading(false));
        })
        .catch((error) => {
          setHttpError(error.message);
          dispatch(uiActions.toggleLoading());
          setIsLoading(false);
        });
    };

    getData();
  }, []);
console.log("summary data",items)
  return (
    <Layout>
      <div className="container h-full py-6 mx-auto">
        <div className="w-[80%] mx-auto">
          {/* <img className='w-full h-auto' src='/images/pay.jpg'/> */}

          {/* <p className="text-blue-400 font-bold text-5xl w-full mt-10 mb-8">
            Order Confirm Successful
          </p> */}
          <OrderSummary data= {items}/>
          <Link to="/home">
          <button className="flex items-center text-xl text-white justify-center md:py-3 bg-[#a95414] py-2 md:px-12 px-8 focus:outline-none  border rounded  mt-7 md:mt-14   focus:ring-2 focus:ring-offset-2 focus:ring-[#a95414]">Back to shopping</button>
        </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
