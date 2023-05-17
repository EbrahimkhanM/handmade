import React from "react";
import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <>
      <li className="flex flex-col w-full cursor-pointer shadow-lg  pb-6" onClick={props.onClick}>
        <div className="w-full hover:translate-y-1 transition ease-in-out delay-150 hover:scale-103">
          <img src={props.img} alt="#" className="w-full h-[400px] object-cover" />
        </div>
        <div className="w-full px-2">
          <h3 className="text-[#a95414] text-left text-base w-full mt-2">{props.name}</h3>
          <p className="text-[#333333] text-base text-left leading-[22px] font-medium mt-2">{props.description}</p>
          <p className="text-gray-800 text-sm text-left font-semibold mt-2">{props.price} pkr</p>
        </div>
      </li>
    </>
  );
};

export default Item;
