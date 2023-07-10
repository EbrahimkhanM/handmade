import React, { useState, useEffect } from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";
import ItemsModal from "./ItemsModal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { db } from "../../firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const ItemsList = () => {
  const [selectedItem, setSelectedItem] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);
  console.log("items------->", items);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const modalIsActive = useSelector((state) => state.ui.modalIsVisible);
  // const isLoading = useSelector((state) => state.ui.isLoading);
  useEffect(() => {
    if (modalIsActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalIsActive]);
  // useEffect(() => {

  //   const getData = async () => {
  //     dispatch(uiActions.toggleLoading(true));
  //     setIsLoading(true);
  //     await getDocs(collection(db, "products"))
  //       .then((querySnapshot) => {
  //         const loadedItems = [];
  //         querySnapshot.forEach((doc) => {
  //           loadedItems.push(doc.data());
  //           setIsLoading(false);
  //         });
  //         setItems(loadedItems);
  //         dispatch(uiActions.toggleLoading(false));
  //       })
  //       .catch((error) => {
  //         setHttpError(error.message);
  //         dispatch(uiActions.toggleLoading());
  //         setIsLoading(false);
  //       });
  //   };

  //   getData();
  // }, []);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [suburb, setSuburb] = useState(null);
  console.log("city------>", suburb);
  const [products, setProducts] = useState([]);

  console.log("my retrive products", products);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          // Call the Nominatim API
          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          )
            .then((response) => response.json())
            .then((data) => {
              console.log("resss data-----------", data);
              const city = data.address.suburb;
              console.log("City in city", city);
              setSuburb(city);
            })
            .catch((error) => {
              console.log(error);
            });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(uiActions.toggleLoading(true));
      // setIsLoading(true);
      const firestore = getFirestore();
      const productsCollection = collection(firestore, "products");
      try {
        let q;
        if (suburb) {
          // If you have a specific road name or city, query by 'roadName' field
          q = query(productsCollection, where("suburb", "==", suburb));
        } else {
          // If you have latitude and longitude coordinates, query by 'latitude' and 'longitude' fields
          const latitude = latitude; // Replace with actual latitude
          const longitude = longitude; // Replace with actual longitude
          q = query(
            productsCollection,
            where("latitude", "==", latitude),
            where("longitude", "==", longitude)
          );
        }

        const querySnapshot = await getDocs(q);

        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(productsData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [suburb]);

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
        onClick={() => {
          setSelectedItem(item);
          data?.auth
            ? toggleModalHandler()
            : (window.location.href = "./log-in");
        }}
      />
    );
  });
  console.log('items----------->',items)
  return (
    <>
      <section className="container mx-auto lg:px-6">
        {items !== null && suburb  ? (
          <div className="grid grid-cols-4 gap-x-6 gap-y-6">{list}</div>
        ) : (
          <h2 className="text-2xl text-[#A95414]">No Products Nearby You!</h2>
        )}
        {modalIsActive && <ItemsModal item={selectedItem} />}
      </section>
    </>
  );
};

export default ItemsList;
