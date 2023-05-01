import React from "react";
import Logo from "../UI/Logo";
import { Login } from "../Icon/login";
import { Logout } from "../Icon/logout";
import { getAuth, signOut } from "firebase/auth";
import { authActions } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
const Footer = () => {
  const dispatch = useDispatch();
  const signOutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(authActions.logOut());
        window.alert("SignOut Successfully");
        window.location.href = "./home";
      })
      .catch((error) => {
        // An error happened.
      });
  };
  
  return (
    <>
      <div className="">
        {/* <hr /> */}
        <div className=" mt-2">
          <div className="max-w-[1440px] px-4 py-8 mx-auto text-center">
            <div className=" my-2">
              <p className="text-[14px] text-[#4b5563]">
                Handicrafts is a unique marketplace with a vision to surface
                beautiful handmade hidden treasures of the world on this
                exclusive platform for buying and selling handmade, handcrafted
                & hand-curated products. A customer who shops online on
                Handicrafts gets many handmade items created by some highly
                passionate handicrafts. These artisans work with various
                materials like Ceramic/Clay, Wood, Paper, Wrought Iron, Glass,
                Cork, Leather, Metals, upcycled art (Recycled), etc.
              </p>
            </div>
            <div className="flex items-center gap-x-[18px] md:gap-x-[28px] justify-center mt-4">
              <ol className="flex gap-x-[18px] md:gap-x-[28px] font-[500] ">
                <li className="text-[#808080] hover:text-[#a95414]">
                  <a href="./sell">How To Sell</a>
                </li>
                <li className="text-[#808080] hover:text-[#a95414]">
                  <a href="./blog">Blogs</a>
                </li>
                <li className="text-[#808080] hover:text-[#a95414]">
                  <a href="./contact-us">Contact Us</a>
                </li>
                <li className="text-[#808080] hover:text-[#a95414] ">
                  <a href="/log-in" className="inline-flex">
                    Login <Login />
                  </a>
                </li>
              </ol>
              <button
                onClick={signOutHandler}
                className="text-[#808080] flex gap-x-1 items-center group hover:text-[#a95414] "
              >
                <Logout /> logout
              </button>
            </div>
          </div>
          <hr />
          <div className=" text-center py-5 ">
            <p className="text-base text-gray-600">
              Copyright 2023 © Handicrafts.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
