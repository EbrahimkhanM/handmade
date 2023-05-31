import React, { useEffect, useState } from "react";
import axios from "axios";
import { db } from "../../firebase";

const LocationMap = (props) => {
  // const [currentLocation, setCurrentLocation] = useState(null);
  // const [cityName, setCityName] = useState("");
  
  // const getCurrentLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setCurrentLocation({ latitude, longitude });
  //         // Send request to Geocoding API
  //         axios
  //           .get(
  //             `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  //           )
  //           .then((response) => {
  //             console.log('Geocoding API response:', response.data);
  //             if (response.data && response.data.results.length > 0) {
  //               const addressComponents =
  //                 response.data.results[0].address_components;
  //               const city = addressComponents.find((component) =>
  //                 component.types.includes("locality")
  //               );
  //               console.log("City in ftn------>", city);
  //               if (city) {
  //                 setCityName(city.long_name);
  //               }
  //             }
  //           })
  //           .catch((error) => {
  //             console.error("Error geocoding coordinates:", error);
  //           });
  //       },
  //       (error) => {
  //         console.error("Error getting user location:", error);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, [cityName]);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState(null);
  console.log("city------>",city)
  console.log("longitude------>",longitude)
  console.log("latitude------>",latitude)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          // Call the Nominatim API
          fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
            .then(response => response.json())
            .then(data => {
              console.log("resss data",data)
              const city = data.address.road;
              console.log("City in city",city);
              setCity(city);
            })
            .catch(error => {
              console.log(error);
            });
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);
  return (
    <>
      <div className="container mx-auto mt-12 mb-20">
        <h2>Products Nearby You {city}</h2>
      </div>
    </>
  );
};

export default LocationMap;


