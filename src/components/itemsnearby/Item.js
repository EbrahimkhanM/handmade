import React, { useState, useEffect } from "react";
import styles from "./Item.module.css";
import Reactstars from "react-rating-stars-component";

const Item = (props) => {
  const [rating, setRating] = useState(0);

  // Retrieve the rating value from local storage on component mount
  useEffect(() => {
    const storedRating = localStorage.getItem("rating");
    if (storedRating) {
      setRating(parseInt(storedRating));
    }
  }, []);

  // Update the rating value and store it in local storage
  const handleRatingChange = (newRating) => {
    setRating(newRating);
    localStorage.setItem("rating", newRating);
  };

  return (
    <>
      <li className="flex flex-col w-full cursor-pointer shadow-lg  pb-6">
        <div onClick={props.onClick}>
          <div className="w-full hover:translate-y-1 transition ease-in-out delay-150 hover:scale-103">
            <img
              src={props.img}
              alt="#"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="w-full px-2 min-h-[100px]">
            <h3 className="text-[#a95414] text-left text-base w-full mt-2">
              {props.name}
            </h3>
            <p className="text-[#333333] text-base text-left leading-[22px] font-medium mt-2">
              {props.description}
            </p>
            <p className="text-gray-800 text-sm text-left font-semibold mt-2">
              {props.price} pkr
            </p>
          </div>
        </div>
        <Reactstars
          count={5}
          value={rating}
          onChange={handleRatingChange}
          size={30}
          activeColor="#ffd700"
        />
      </li>
    </>
  );
};

export default Item;
