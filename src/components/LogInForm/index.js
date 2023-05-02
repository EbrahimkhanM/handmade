/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { authActions } from "../../store/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogInForm = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;




  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(formData.email)) {
      toast.error("invalid email!")
    }
    if (!passRegex.test(formData.pass)) {
      toast.error("invalid password")
    }
    if (emailRegex.test(formData.email) && passRegex.test(formData.pass)) {
      signInWithEmailAndPassword(auth, formData.email, formData.pass).then((userCredential) => {
        const user = userCredential.user;
        dispatch(authActions.logIn());
        window.location.href = "/home";

      });
    }


  };

  return (
    <>
      <div
        style={{ backgroundImage: `url('/images/hand_bg.jpg')`, webkitFilter: `blur(4px)`, filter: `blur(4px)` }}
        className="h-full   bg-center bg-no-repeat bg-cover fixed top-0 bottom-0 w-full py-12 px-4  "
      ></div>
      <div className="w-full container mx-auto inset-0 absolute z-100 flex py-8 justify-center">
        <div className="  px-6 lg:px-0 w-full lg:w-3/4">
          <div className="bg-white shadow-2xl rounded  backdrop-blur-lg bg-white/60  w-full py-8 mt-12">
            <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl text-center font-extrabold leading-6 text-[#a95414]">
              Login to your account
            </p>
            <p className="text-sm mt-4 text-center font-medium leading-none text-gray-900">
              Dont have account?{" "}
              <Link to="/sign-up">
                {" "}
                <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-blue-600 cursor-pointer">
                  {" "}
                  Sign up here
                </span>
              </Link>
            </p>
            <form className="flex flex-col mb-2 mt-12 justify-center" onSubmit={handleSubmit}>
              <div className="flex ">
                <div className="w-1/4 border-r border-gray-400 text-center ">
                  <Link to='/'>
                    <img src="/images/logo.jpg" className="w-[80%] mx-auto hover:cursor-pointer" />
                  </Link>


                </div>
                <div className="w-3/4 px-8">
                  <div className="w-full">
                    <lable className="text-sm font-medium leading-none text-gray-900">Email</lable>
                    <input
                      aria-label="enter email address"
                      type="text"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                      }}
                      className="bg-gray-300 border rounded focus:outline-none focus:ring-[2px] focus:ring-[#a95414] text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    />

                  </div>

                  <div className="mt-6  w-full">
                    <lable className="text-sm font-medium leading-none text-gray-900">Password</lable>
                    <div className="relative flex flex-col items-center justify-center">
                      <input
                        aria-label="enter Password"
                        type="text"
                        value={formData.pass}
                        onChange={(e) => {
                          setFormData({ ...formData, pass: e.target.value });
                        }}
                        className="bg-gray-300 border rounded focus:outline-none focus:ring-[2px] focus:ring-[#a95414]  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                      />

                    </div>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      aria-label="create my account"
                      className=" text-lg font-semibold leading-none text-white  focus:outline-none bg-[#a95414]  rounded-lg  py-4 w-full"
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LogInForm;
