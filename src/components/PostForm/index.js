import React from "react";
import { useState } from "react";
import { db, storage, storageRef } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { v4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CurrencyInput from "react-currency-input-field";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PostForm = () => {
  const [formData, setFormData] = useState([]);
  const [productImg, setProductImg] = useState(null);
  const [error, setError] = useState("");
  const [formError, setFromError] = useState({});
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const phoneRegex =
      /^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{3,6}$/;

    if (!values.userName) {
      errors.userName = "This field is required";
    } else if (!nameRegex.test(values.userName)) {
      errors.userName = "Invalid name pattern";
    }
    if (!values.email) {
      errors.email = "This field is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "invalid email";
    }
    if (!values.phone) {
      errors.phone = "This field is required";
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = "invalid phone number";
    }

    return errors;
  };
  3;
  const types = ["image/png", "image/jpeg"];

  const handleImg = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError("");
    } else {
      setProductImg(null);
      setError("please select a valid image type");
    }
  };
  console.log("formData>>>", formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFromError(validate(formData));
    if (productImg == null) return;
    const imageRef = ref(storage, ` images/${productImg.name + v4()}`);
    uploadBytes(imageRef, productImg).then(() => {
      getDownloadURL(ref(imageRef)).then((url) => {
        const setColl = async () => {
          await setDoc(doc(db, "products", "product" + v4()), {
            id: "product" + v4(),
            img: url,
            price: formData.price,
            name: formData.productName,
            // availableSize: formData.size,
            description: formData.description,
            userEmail: formData.email,
            userName: formData.userName,
            phoneNumber: formData.phone,
          })
            .then((res) => {
              toast.success("Post submitted");
              setFormData({
                price: "",
                productName: "",
                // size: "",
                email: "",
                userName: "",
                phone: "",
              });
              setTimeout(() => {
                navigate("/home");
              }, 3000);
            })
            .catch((err) => {
              toast.error(err);
            });
        };
        return setColl();
      });
    });
  };

  useEffect(() => {
    setFormData({ ...formData, productName: "Ajrak" });
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="w-full container mx-auto  flex  justify-center   ">
        <form
          className="lg:w-4/6  md:w-1/2 w-full bg-[#F9FAFB] backdrop-blur-lg  border-gray-300 border shadow-md rounded-xl  "
          onSubmit={handleSubmit}
        >
          <div className="w-full  p-8 md:p-6 lg:p-10">
            <div className="mt-8 flex flex-col items-center justify-center w-full">
              <div className="flex w-full flex-col mb-2">
                <label className="mb-3 text-sm leading-none text-black">
                  User Name
                </label>
                <input
                  className="w-full  text-sm font-medium focus:outline-none bg-gray-300 leading-none text-gray-900 p-3 border rounded focus:ring-[2px] focus:ring-[#a95414] border-gray-200"
                  type="text"
                  tabIndex={0}
                  value={formData.userName}
                  onChange={(e) => {
                    setFormData({ ...formData, userName: e.target.value });
                  }}
                  aria-label="Enter first name"
                />
                <p className="text-xs text-right w-full font-bold text-red-600 mt-1">
                  {formError.userName}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 w-full gap-x-[30px]">
                <div className="flex flex-col ">
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
                  <p className="text-xs text-right w-full font-bold text-red-600 mt-1">
                    {formError.email}
                  </p>
                </div>
                <div className="flex flex-col  mt-2 sm:mt-0 ">
                  <label className="mb-3 text-sm leading-none text-black">
                    Product Name
                  </label>
                  <select
                    className="w-full  text-sm font-medium focus:outline-none leading-none text-gray-900 p-[11px] border rounded border-gray-200 focus:ring-[2px] bg-gray-300 focus:ring-[#a95414]"
                    type="text"
                    value={formData.productName}
                    defaultValue={formData.productName}
                    onChange={(e) => {
                      setFormData({ ...formData, productName: e.target.value });
                    }}
                    tabIndex={0}
                    aria-label="Enter last name"
                  >
                    <option className="font-medium text-base">Ajrak</option>
                    <option className="font-medium text-base">Jewellery</option>
                    <option className="font-medium text-base">Carpet</option>
                    <option className="font-medium text-base">Toys</option>
                    <option className="font-medium text-base">Shawls</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 w-full gap-x-[30px]">
              <div className="flex flex-col w-full ">
                <label className="mb-3 text-sm leading-none text-black">
                  Price
                </label>
                <CurrencyInput
                  id="input-example"
                  name="input-name"
                  className="focus:ring-[2px] focus:ring-[#a95414] focus:outline-none bg-gray-300 border-gray-200 border rounded"
                  placeholder="Please enter price"
                  value={formData.price}
                  decimalsLimit={8}
                  // onValueChange={(e) => {
                  //   setFormData({ ...formData, price: e.target.value });
                  // }}
                  onValueChange={(value, name) =>
                    setFormData({ ...formData, price: value })
                  }
                />
              </div>
              <div className="flex flex-col  md:mt-0 mt-6 ">
                <label className="mb-3 text-sm leading-none text-black">
                  Phone Number
                </label>
                <input
                  className="w-full bg-gray-300 text-sm font-medium leading-none focus:outline-none text-gray-900 p-3 border rounded focus:ring-[2px] focus:ring-[#a95414] border-gray-200"
                  type="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                  }}
                  tabIndex={0}
                  aria-label="Enter email Address"
                />
                <p className="text-xs text-right w-full font-bold text-red-600 mt-1">
                  {formError.phone}
                </p>
              </div>
              {/* <div className="flex flex-col  md:mt-0 mt-6">
                <label className="mb-3 text-sm leading-none text-black">
                  Size
                </label>
                <select
                  className="w-full  text-sm font-medium focus:outline-none leading-none text-gray-900 p-3 border rounded border-gray-200 focus:ring-[2px] bg-gray-300 focus:ring-[#a95414]"
                  type="text"
                  value={formData.size}
                  onChange={(e) => {
                    setFormData({ ...formData, size: e.target.value });
                  }}
                  tabIndex={0}
                  aria-label="Enter last name"
                >
                  <option className="font-medium text-base">S</option>
                  <option className="font-medium text-base">M</option>
                  <option className="font-medium text-base">L</option>
                  <option className="font-medium text-base">XL</option>
                  <option className="font-medium text-base">XXL</option>
                </select>
              </div> */}
            </div>
            <div className="flex flex-col  w-full  mt-8">
              <div className="flex justify-center items-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                      className="mb-3 w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">
                        Click to upload Image
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    onChange={handleImg}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <div className="flex mt-6 justify-center">
              <div className="mb-3 w-full">
                <textarea
                  className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-[#a95414] focus:outline-none
      "
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your product description"
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                  }}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center text-xl text-white justify-center md:py-3 transition-all duration-300 bg-[#a95414] hover:bg-[#9d4d10] py-2 md:px-12 px-8   mt-4 md:mt-6 rounded"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostForm;
