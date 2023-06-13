import React, { useRef, useState } from "react";
import Backdrop from "../UI/Backdrop";
import styles from "./ItemsModal.module.css";
import SizePicker from "./SizePicker";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { cartActions } from "../../store/cartSlice";

const ItemsModal = (props) => {
  const dispatch = useDispatch();
  const [wrongSize, setWrongSize] = useState(false);
  // const sizeRef = useRef();
  // const itemsInCart = useSelector((state) => state.cart.items);

  const submitHandler = (e) => {
    e.preventDefault();

    // const enteredSize = sizeRef.current.value;

    // if (enteredSize === "select") {
    //   setWrongSize(true);
    //   return;
    // } else {
    //   setWrongSize(false);
    // }

    dispatch(
      cartActions.addItemToCart({
        id: props.item.id,
        name: props.item.name,
        img: props.item.img,
        // size: enteredSize,
        price: props.item.price,
        userName: props.item.userName,
      })
    );

    dispatch(uiActions.toggleModal());
    dispatch(uiActions.toggleCart());
  };

  const closeModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h3 className="item-name text-[24px] font-[600]">{props.item.name}</h3>
        <p className="text-[#4b5563] text-[18px]">{props.item.description}</p>
        <p className="text-[#a95414]">pkr:{props.item.price}</p>
        <p className="font-[600]">{props.item.userName}</p>
        <p>{props.item.city}</p>
        <form className={styles["item-modal-form"]} onSubmit={submitHandler}>
          <button className={styles["add-btn"]}>Add to cart</button>
          <button
            className={styles["close-modal-btn"]}
            onClick={closeModalHandler}
          >
            Close
          </button>
        </form>
        <Backdrop />
      </div>
      <div className="w-[48%] h-[350px]">
        <img className="w-full h-full object-cover rounded-[10px]" src={props.item.img} alt="" />
      </div>
    </div>
  );
};

export default ItemsModal;
