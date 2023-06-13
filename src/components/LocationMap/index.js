import React, { useEffect, useState } from "react";
import axios from "axios";
import { db } from "../../firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const LocationMap = (props) => {
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
              console.log("resss data", data);
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
      const firestore = getFirestore();
      const productsCollection = collection(firestore, "products");
      console.log("PPPPPPPPPPProducts", productsCollection);
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

        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className="container mx-auto mt-12 mb-20">
        <h2>Products Nearby You {suburb}</h2>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>suburb: {product.suburb}</p>
            <img src={product.img}></img>
          </div>
        ))}
      </div>
    </>
  );
};

export default LocationMap;
