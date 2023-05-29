import React, { useEffect, useState } from "react";
import axios from 'axios';
import { db } from '../../firebase'; 

const LocationMap = (props) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [cityName, setCityName] = useState('');
  const [products, setProducts] = useState([]);
  console.log("currentLocation------->",currentLocation)
  console.log("cityName------->",cityName)
  console.log("products------->",products)
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
  
          // Send request to Geocoding API
          axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=<YOUR_API_KEY>`)
            .then(response => {
              if (response.data && response.data.results.length > 0) {
                const addressComponents = response.data.results[0].address_components;
                const city = addressComponents.find(component =>
                  component.types.includes('locality')
                );
                if (city) {
                  setCityName(city.long_name);
                }
              }
            })
            .catch(error => {
              console.error('Error geocoding coordinates:', error);
            });
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  const fetchProducts = async (city) => {
    console.log("city-------------------->",city)
    try {
      const productsRef = db.collection('products');
      console.log("productsRef-------------------->")
      const snapshot = await productsRef.where('city', '==', city).get();
      const productsData = [];
      snapshot.forEach(doc => {
        const product = doc.data();
        productsData.push(product);
      });
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  useEffect(() => {
    getCurrentLocation();
  }, []);  
  useEffect(() => {
    // Assuming you have the city name available in a state variable named 'cityName'
    fetchProducts('abbottabad');
  }, []);

  return (
    <>
      <div className="container mx-auto mt-12 mb-20">
<button>Test</button>
      </div>
    </>
  );
};

export default LocationMap;
