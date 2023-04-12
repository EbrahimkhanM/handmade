import React, { useState, useEffect } from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";
import ItemsModal from "./ItemsModal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";


const ItemsList = () => {
  const [selectedItem, setSelectedItem] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  const dispatch = useDispatch();
  const data = useSelector((state) => state);
console.log("items<>",items);
  const modalIsActive = useSelector((state) => state.ui.modalIsVisible);
  // const isLoading = useSelector((state) => state.ui.isLoading);
  useEffect(() => {
    
    const getData = async () => {
      dispatch(uiActions.toggleLoading(true));
      setIsLoading(true);
      await getDocs(collection(db, "products"))
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

  const toggleModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };

  if (isLoading) {
    return (
      <section className={styles["items-section"]}>
        <div className={styles.loading}>
          Loading <span className="loading dots2"></span>{" "}
        </div>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles["items-section"]}>
        <p className={styles.went_wrong}>{httpError}</p>
      </section>
    );
  }

  const list = items.map((item) => {
    return (
      <Item
        name={item.name}
        price={item.price}
        description={item.description}
        img={item.img}
        key={item.id}
        size={item.availableSize}
        onClick={()=>{
          setSelectedItem(item);
          data?.auth ? (
            toggleModalHandler()) : (window.location.href = "./log-in");
        }}
        
      />
    );
  });
  return (
    <>
      <section className="container mx-auto lg:px-6">
        <div className="grid grid-cols-4 gap-x-6 gap-y-6">{list}</div>

        {modalIsActive && <ItemsModal item={selectedItem} />}
      </section>
    </>
  );
};

export default ItemsList;
