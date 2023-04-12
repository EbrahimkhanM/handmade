import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import MoneyIcon from '@material-ui/icons/Money';
// import LocalShippingIcon from '@material-ui/icons/LocalShipping';
// import GroupWorkIcon from '@material-ui/icons/GroupWork';

function Index( ) {
  const data = useSelector((state) => state);
  return (
    <>
      <div className="container flex mx-auto w-full flex-col">
        <div className="flex mx-auto w-full justify-center items-center "></div>
        <div className="flex justify-center w-full mx-auto ">
          <button className="flex mx-auto items-center text-xl justify-center md:py-3 py-2 md:px-12 px-8 focus:outline-none  rounded text-white  mt-4 bg-[#8c0327]  " onClick={()=>{
data?.auth ? (window.location.href="/store") : (window.location.href = "./log-in");
          }}>Start Selling</button>
        </div>
      </div>
     
    </>
  );
}

export default Index;
