import React, { useState, useEffect } from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";
import ItemsModal from "./ItemsModal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";


const CatagoriesList = () => {
  const [selectedItem, setSelectedItem] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);
  const [status,setStatus] = useState(0);

  const dispatch = useDispatch();
   const data = useSelector((state) => state);
  const modalIsActive = useSelector((state) => state.ui.modalIsVisible);
  // const isLoading = useSelector((state) => state.ui.isLoading);
  useEffect(() => {
    if (modalIsActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalIsActive]);
  
  useEffect(() => {
    const getData = async () => {
      dispatch(uiActions.toggleLoading(true));
      setIsLoading(true);
      await getDocs(collection(db, "products"))
        .then((querySnapshot) => {
          const loadedItems = [];
          querySnapshot.forEach((doc) => {
            loadedItems.push(doc.data());
            setIsLoading(false);
          });
          setItems(loadedItems);
          dispatch(uiActions.toggleLoading(false));
        })
        .catch((error) => {
          setHttpError(error.message);
          dispatch(uiActions.toggleLoading());
          setIsLoading(false);
        });
    };

    getData();

  }, []);

  const toggleModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };

  if (isLoading) {
    return (
      <section className={styles["items-section"]}>
        <div className={styles.loading}>
          Loading <span className="loading dots2"></span>{" "}
        </div>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles["items-section"]}>
        <p className={styles.went_wrong}>{httpError}</p>
      </section>
    );
  }

  const ajrak = items
    .filter((name) => name.name === "Ajrak")
    .map((item) => {
      return (
        <Item
          name={item.name}
          price={item.price}
          description={item.description}
          img={item.img}
          key={item.id}
          size={item.availableSize}
          onClick={() => {
            setSelectedItem(item);
            data?.auth ? toggleModalHandler() : (window.location.href = "./log-in");
          }}
          // onClick={() => {
          //   setSelectedItem(item);
          //   toggleModalHandler();
          // }}
        />
      );
    });
     const jewellery = items
       .filter((name) => name.name === "Jewellery")
       .map((item) => {
         return (
           <Item
             name={item.name}
             price={item.price}
             description={item.description}
             img={item.img}
             key={item.id}
             size={item.availableSize}
             onClick={() => {
               setSelectedItem(item);
               data?.auth ? toggleModalHandler() : (window.location.href = "./log-in");
             }}
             //  onClick={() => {
             //    setSelectedItem(item);
             //    toggleModalHandler();
             //  }}
           />
         );
       });
       const carpet = items
         .filter((name) => name.name === "Carpet")
         .map((item) => {
           return (
             <Item
               name={item.name}
               price={item.price}
               description={item.description}
               img={item.img}
               key={item.id}
               size={item.availableSize}
               onClick={() => {
                 setSelectedItem(item);
                 data?.auth ? toggleModalHandler() : (window.location.href = "./log-in");
               }}
               //  onClick={() => {
               //    setSelectedItem(item);
               //    toggleModalHandler();
               //  }}
             />
           );
         });
          const toys = items
            .filter((name) => name.name === "Toys")
            .map((item) => {
              return (
                <Item
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  img={item.img}
                  key={item.id}
                  size={item.availableSize}
                  onClick={() => {
                    setSelectedItem(item);
                    data?.auth ? toggleModalHandler() : (window.location.href = "./log-in");
                  }}
                  // onClick={() => {
                  //   setSelectedItem(item);
                  //   toggleModalHandler();
                  // }}
                />
              );
            });
              const others = items
                .filter((name) => name.name === "others")
                .map((item) => {
                  return (
                    <Item
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      img={item.img}
                      key={item.id}
                      size={item.availableSize} 
                      onClick={() => {
                        setSelectedItem(item);
                        data?.auth ? toggleModalHandler() : (window.location.href = "./log-in");
                      }}
                      // onClick={() => {
                      //   setSelectedItem(item);
                      //   toggleModalHandler();
                      // }}
                    />
                  );
                });
                
  return (
    <>
      <section className="container mx-auto lg:px-6">
        <div className="flex justify-between items-center flex-wrap hidden sm:block bg-white mt-6 rounded shadow">
          <div className="w-full xl:mx-0 pl-5 pr-5 h-12">
            <ul className="flex flex-row items-start ">
              <li
                onClick={() => setStatus(0)}
                className={
                  status == 0
                    ? "text-sm text-[#A95414] font-[700] flex flex-col justify-between border-indigo-700 pt-3 rounded-t"
                    : "text-sm text-gray-600 py-3  font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">Ajrak</span>
                {status == 0 && <div className="w-full h-1 bg-[#A95414]  rounded-t-md" />}
              </li>
              <li
                onClick={() => setStatus(1)}
                className={
                  status == 1
                    ? "text-sm text-[#A95414] flex flex-col justify-between border-indigo-700 pt-3 rounded-t  font-[700]"
                    : "text-sm text-gray-600 py-3  font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">Jewellery</span>
                {status == 1 && <div className="w-full h-1 bg-[#A95414] rounded-t-md" />}
              </li>
              <li
                onClick={() => setStatus(2)}
                className={
                  status == 2
                    ? "text-sm text-[#A95414] flex flex-col justify-between border-indigo-700 pt-3 rounded-t  font-[700]"
                    : "text-sm text-gray-600 py-3  font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">Carpet</span>
                {status == 2 && <div className="w-full h-1 bg-[#A95414] rounded-t-md" />}
              </li>
              <li
                onClick={() => setStatus(3)}
                className={
                  status == 3
                    ? "text-sm text-[#A95414] flex flex-col justify-between border-indigo-700 pt-3 rounded-t font-[700]"
                    : "text-sm text-gray-600 py-3  font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">Toys</span>
                {status == 3 && <div className="w-full h-1 bg-[#A95414] rounded-t-md" />}
              </li>
              <li
                onClick={() => setStatus(4)}
                className={
                  status == 4
                    ? "text-sm text-[#A95414] flex flex-col justify-between border-indigo-700 pt-3 rounded-t  font-[700]"
                    : "text-sm text-gray-600 py-3  font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">others</span>
                {status == 4 && <div className="w-full h-1 bg-[#A95414] rounded-t-md" />}
              </li>
              
            </ul>
          </div>
        </div>
        {status == 0 && (
          <div className="mt-6">
            <p className="mb-2 text-2xl text-gray-800">Ajrak</p>
            <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 px-6 lg:px-0">{ajrak}</div>
          </div>
        )}
        {status == 1 && (
          <div className="mt-6">
            <p className="mb-2 text-2xl text-gray-800">Jewellery</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 px-6 lg:px-0">{jewellery}</div>
          </div>
        )}
        {status == 2 && (
          <div className="mt-6">
            <p className="mb-2 text-2xl text-gray-800">Carpet</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 px-6 lg:px-0">{carpet}</div>
          </div>
        )}
        {status == 3 && (
          <div className="mt-6">
            <p className="mb-2 text-2xl text-gray-800">Toys</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 px-6 lg:px-0">{toys}</div>
          </div>
        )}
        {status == 4 && (
          <div className="mt-6">
            <p className="mb-2 text-2xl text-gray-800">others</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 px-6 lg:px-0">{others}</div>
          </div>
        )}
       

        {modalIsActive && <ItemsModal item={selectedItem} />}
      </section>
    </>
  );
};

export default CatagoriesList;
