import React from "react";
import { useState } from "react";
import { auth } from "../../firebase";
import { authActions } from "../../store/authSlice";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  const nameRegex = /^[a-zA-Z ]+$/;
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setFormErrors(Validate(formData))
    // if(!emailRegex.test(formData.email)){
    //   toast.error("invalid email!")
    // }
    if (!passRegex.test(formData.pass)) {
      toast.error("invalid password");
    }
    if (!emailRegex.test(formData.email)) {
      toast.error("invalid email");
    }
    if (!nameRegex.test(formData.username)) {
      toast.error("invalid user name ");
    }

    if (
      passRegex.test(formData.pass) &&
      nameRegex.test(formData.name) &&
      nameRegex.test(formData.username)
    ) {
      createUserWithEmailAndPassword(auth, formData.email, formData.pass)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user info", user);
          const setColl = async () => {
            toast.success("your account is created successfully");
            await setDoc(doc(db, "users", userCredential.user.uid), {
              name: formData.name,
              username: formData.username,
              email: formData.email,
              password: formData.pass,
              uid:userCredential.user.uid,
            });
            window.location.href = "/log-in";
          };
          return setColl();
        })
        .catch((error) => {
          const errorCode = error.code;

          toast.error(error.message);
        });
    }
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url('/images/hand_bg.jpg')`,
          webkitFilter: `blur(4px)`,
          filter: `blur(4px)`,
        }}
        className="h-full   bg-center bg-no-repeat bg-cover fixed top-0 bottom-0 w-full py-12 px-4  "
      ></div>
      <div className="w-full container mx-auto inset-0 absolute z-100 flex py-8 justify-center   ">
        <form
          className="lg:w-3/4  md:w-1/2 w-full bg-white backdrop-blur-lg bg-white/60 rounded-xl absolute z-100 "
          onSubmit={handleSubmit}
        >
          <div className="w-full  p-8 md:p-6 lg:p-10">
            <div className="mt-8 md:flex items-center justify-center w-full">
              <div className="flex w-full flex-col">
                <label className="mb-3 text-sm leading-none text-black">
                  Full Name
                </label>
                <input
                  className="w-full  text-sm font-medium focus:outline-none bg-gray-300 leading-none text-gray-900 p-3 border rounded focus:ring-[2px] focus:ring-[#a95414] border-gray-200"
                  type="text"
                  tabIndex={0}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  aria-label="Enter first name"
                />
              </div>
              <div className="flex flex-col md:ml-12 w-full md:mt-0 mt-8">
                <label className="mb-3 text-sm leading-none text-black">
                  User Name
                </label>
                <input
                  className="w-full  text-sm font-medium focus:outline-none leading-none text-gray-900 p-3 border rounded border-gray-200 focus:ring-[2px] bg-gray-300 focus:ring-[#a95414]"
                  type="text"
                  value={formData.username}
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                  }}
                  tabIndex={0}
                  aria-label="Enter last name"
                />
              </div>
            </div>
            <div className="mt-12 md:flex items-center justify-center">
              <div className="flex flex-col w-full ">
                <label className="mb-3 text-sm leading-none text-black">
                  Email Address
                </label>
                <input
                  className="w-full bg-gray-300 text-sm font-medium leading-none focus:outline-none text-gray-900 p-3 border rounded focus:ring-[2px] focus:ring-[#a95414] border-gray-200"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  tabIndex={0}
                  aria-label="Enter email Address"
                />
              </div>
              <div className="flex flex-col md:ml-12 w-full md:mt-0 mt-8">
                <label className="mb-3 text-sm leading-none text-black">
                  Password
                </label>
                <input
                  className="w-full bg-gray-300 text-sm font-medium leading-none text-gray-900 p-3 focus:outline-none border rounded focus:ring-[2px] focus:ring-[#a95414] border-gray-200"
                  type="password"
                  value={formData.pass}
                  onChange={(e) => {
                    setFormData({ ...formData, pass: e.target.value });
                  }}
                  tabIndex={0}
                  aria-label="Enter email Address"
                />
              </div>
            </div>

            <button
              type="submit"
              // role="button"
              className="flex items-center text-xl text-white justify-center md:py-3 bg-[#a95414] py-2 md:px-12 px-8 focus:outline-none border rounded  mt-7 md:mt-14   focus:ring-2 focus:ring-offset-2 focus:ring-[#a95414]"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
