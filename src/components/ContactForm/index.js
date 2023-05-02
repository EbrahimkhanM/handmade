import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
  const [dis, setDis] = useState({
    name: "",
    message: "",
    email: "",
  });
  const [btnDis, setBtnDis] = useState(false);
  useEffect(() => {
    if (dis.email.length && dis.name.length && dis.message.length) {
      setBtnDis(true);
      document.getElementById("mySubmit").disabled = false;
    } else {
      setBtnDis(false);
      document.getElementById("mySubmit").disabled = true;
    }
  }, [dis]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.name.trim().length === 0) {
      toast("Please Enter a correct Name");
      return;
    } else if (data.message.length > 800) {
      toast("write a correct message");
    } else {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          // console.log("Response received", res);
          if (res.status === 200) {
            // console.log("Response succeeded!");
            toast("Thank you for contacting us!");
          } else {
            // console.log("Email/Password is invalid.");
            toast("Something is wrong.");
          }
        })
        .catch((e) => console.log(e));
      reset();
    }
  };
  return (
    <div className=" bg-white ">
      <div className="max-w-[710px] py-2  mx-auto  px-4">
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
            <div className="flex flex-col w-full  ">
              <label className="text-[18px] leading-[20px] font-[600] text-[#a95414] Roboto">
                Name <span className="text-[#a95414]">*</span>
              </label>
              <input
                {...register("name", { required: true })}
                // placeholder="Name"
                id="name"
                name="name"
                required
                onChange={(e) => setDis({ ...dis, name: e.target.value })}
                tabIndex={0}
                arial-label="Please input your name"
                type="text"
                  className="bg-gray-300 border rounded focus:outline-none focus:ring-[2px] focus:ring-[#a95414] text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                // className="Roboto text-[#4b5563] p-3 mt-4 text-base leading-none bg-white border-[1px] border-solid border-[#808090] focus:outline outline-[#a95414]"
              />
            </div>
            <div className="w-full flex flex-col  mt-4">
              <label className="text-[18px] leading-[20px] font-[600] text-[#a95414] Roboto">
                Email <span className="text-[#a95414]">*</span>
              </label>
              <input
                {...register("email", { required: true })}
                tabIndex={0}
                // placeholder="Email"
                id="email"
                name="email"
                onChange={(e) => setDis({ ...dis, email: e.target.value })}
                required
                role="input"
                arial-label="Please input your email"
                type="email"
                // className="Roboto text-[#4b5563]  p-3  mt-4 text-base leading-none bg-white border-[1px] border-solid border-[#808090] focus:outline outline-[#a95414] "
                className="bg-gray-300 border rounded focus:outline-none focus:ring-[2px] focus:ring-[#a95414] text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
          <div>
            <div className="flex flex-col w-full mt-4 ">
              <label className="text-[18px] leading-[20px] font-[600] text-[#a95414] Roboto">
                Message <span className="text-[#a95414]">*</span>
              </label>
              <textarea
                defaultValue={""}
                {...register("message", { required: true })}
                // placeholder="Message"
                id="message"
                name="message"
                tabIndex={0}
                required
                onChange={(e) => setDis({ ...dis, message: e.target.value })}
                aria-label="leave a message"
                role="textbox"
                type="name"
                className="bg-gray-300 border rounded focus:outline-none focus:ring-[2px] focus:ring-[#a95414] text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 h-36"
              />
            </div>
          </div>
          <div className="flex items-center justify-end w-full">
            <button
              id="mySubmit"
              type="submit"
              className={`Roboto px-8 py-3 text-base font-semibold leading-none text-white bg-[#a95414] mt-9 hover:bg-[#93480f] focus:ring-2 focus:ring-offset-2  duration-300 focus:outline-none ${
                !btnDis && "cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
      <hr />
    </div>
  );
};
