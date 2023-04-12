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
  const sizeRef = useRef();
  const itemsInCart = useSelector((state) => state.cart.items);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredSize = sizeRef.current.value;

    if (enteredSize === "select") {
      setWrongSize(true);
      return;
    } else {
      setWrongSize(false);
    }

    dispatch(
      cartActions.addItemToCart({
        id: props.item.id,
        name: props.item.name,
        img: props.item.img,
        size: enteredSize,
        price: props.item.price,
        userName: props.item.userName
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
        <div className={styles.image}>
          <img src={props.item.img} alt="" />
        </div>
        <h3 className="item-name">{props.item.name}</h3>
        <p>pkr:{props.item.price}</p>
        <p>{props.item.userName}</p>
      </div>
      <form className={styles["item-modal-form"]} onSubmit={submitHandler}>
        <SizePicker
          labelFor="size"
          labelText="Choose a size"
          availableSize={props.item.availableSize}
          ref={sizeRef}
          wrongSize={wrongSize}
          wrongSizeStyles={styles.wrong_size_info}
          selectStyles={styles.size_picker__select}
        />
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
  );
};

export default ItemsModal;
