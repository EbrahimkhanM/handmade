import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ShippingForm from "../components/Checkout/ShippingForm";
import styles from "./Checkout.module.css";
import CheckoutItems from "../components/Checkout/CheckoutItems";
import Menu from "../components/Menu/Menu";
import { Link } from "react-router-dom";
import { cartActions } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import InjectedCheckoutForm from "../components/PaymentComponent/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { v4 } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Checkout = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const dispatch = useDispatch();
  const orderedItems = useSelector((state) => state.cart);
  console.log("ordered item",orderedItems)
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [state, setState] = useState({
    data: null,
  });
  const stripePromise = loadStripe(
    "pk_test_51NBHJ7DqTIaHg4BaOfnPNr7sN231J1o0GWtHwjAv0qgAi8LEdQ0NpRDMyohSWz8zWyQ4Qtodmt9vjOOAvkInjjJj00zzd4ZA66"
  );
  console.log("test Stripe", stripePromise);

  useEffect(() => {
    callBackendAPI()
      .then((res) => setState({ data: res.express }))
      .catch((err) => console.log(err));
  }, []);
  const callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    // await fetch(
    //   "https://share-to-wear-default-rtdb.firebaseio.com/orders.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       orderedItems,
    //       clientInfo: userData,
    //     }),
    //   }
    // );
    // const db = getDatabase();
    // set(ref(db, 'orders/'), {
    //  orderedItems,
    //  clientInfo:userData
    // });
   

    // dispatch(cartActions.clearCart());
    const setColl = async () => {
      if(orderedItems.items.length){
        await setDoc(doc(db, "orders", "order" + v4()), {
          orderedItem:orderedItems,
          // clientInfo:userData,
        })
          .then((res) => {
            toast.success("success")
            setIsSubmitting(false);
            setDidSubmit(true);
            
          })
          .catch((err) => {
            console.log(err)
          });
      }
      
    };
    return setColl();
    
  };

  const checkoutContent = (
    <>
      <main className={styles.checkout}>
      <ToastContainer/>

        <p>Checkout</p>
        <div className={styles["checkout-container"]}>
          <div className={styles["checkout__address_details"]}>
            <p className={styles["checkout__details-heading"]}>
              Shipping address
            </p>
            <ShippingForm onConfirm={submitOrderHandler} />
          </div>
          <div className={styles["checkout__items_details"]}>
            <p className={styles["checkout__details-heading"]}>Order summary</p>
            <div className={styles["checkout__items-container"]}>
              <CheckoutItems />
            </div>
            <p className={styles["checkout__items-total"]}>
              Total: <span>Pkr{totalPrice}</span>
            </p>
            <div className={styles["checkout__submit-wrapper"]}></div>
          </div>
        </div>

        <button className={styles.checkout__submit} form="shipping_form">
          place order
        </button>
        <aside>
          <Menu />
        </aside>
      </main>
    </>
  );

  const submittedOrder = (
    <div className={styles["submitting__order-container"]}>
      <p className={styles.submitting__text}>
        {didSubmit && !isSubmitting ? (
          <div className="container mx-auto ">
            <div className="w-[60%] mx-auto">
              {
                <Elements stripe={stripePromise}>
                  <InjectedCheckoutForm />
                </Elements>
              }
            </div>
          </div>
        ) : (
          "Submitting..."
        )}
      </p>
      {didSubmit && (
        <Link to="/home">
          <button className={styles.submitting__btn}>Back to shopping</button>
        </Link>
      )}
    </div>
  );

  return (
    <>
      <header>
        <Navbar />
      </header>
      {!isSubmitting && !didSubmit && checkoutContent}
      {isSubmitting && !didSubmit && submittedOrder}
      {!isSubmitting && didSubmit && submittedOrder}
    </>
  );
};

export default Checkout;
