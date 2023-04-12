import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import { cartActions } from "../../store/cartSlice";
import CardSection from "./CardSection";
import "./CardSection.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutForm = (props) => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { stripe, elements } = props;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    // console.log("results", result)

    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log("Token is here ===>>>> ", result.token);
      await fetch("http://localhost:5000/payment", {
        method: "POST",
        body: JSON.stringify({
          stripeToken: { ...result.token },
          price: totalPrice,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((resData) => {
          let resp = resData
          console.log(">>> resp", resp);
          if(resp.charge){
            console.log(">>> resp", resp);
            dispatch(cartActions.clearCart());
            toast.success("payment succesfull");
            window.location.href="/payment";
          }else if(resp.error){
            toast.error("payment failed");
          }
          
        })
        .catch((err) => {
          console.log(">>>> error", err);
          toast.error("payment failed");
        });
    }
  };

  return (
    <div className="w-full ">
      <form className="w-full flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <CardSection />
        <button disabled={!props.stripe} className=" py-3 ">
          pay Now
        </button>
      </form>
    </div>
  );
};

export default function InjectedCheckoutForm() {
  return (
    <>
    <ToastContainer/>
      <ElementsConsumer>
        {({ stripe, elements }) => (
          <CheckoutForm stripe={stripe} elements={elements} />
        )}
      </ElementsConsumer>
    </>
  );
}
