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
import { useSelector } from "react-redux";
import "./DiveComponent.css"; // Import the CSS file
import { Route } from "react-router-dom";

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
  const data = useSelector((state) => state);

  return (
    <>
      <div className="max-w-full mx-auto my-11">
        <div className="dive-container relative z-[-30]">
          <div className="bg-slate-900 w-full h-full absolute bg-opacity-60 z-[-20]"></div>
          <div className="text-center">
            <p className="text-white text-2xl ">Handicrafts near to your area!</p>
            <a href="/nearby">
            <button
              className=" text-xl w-auto py-[10px] cursor-pointer   md:px-8 px-6 focus:outline-none  text-white  mt-4 bg-[#A95414]  "
            >
              Nearby Crafts
            </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationMap;
