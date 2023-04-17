import React from "react";
import { uiActions } from "../../store/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import Navlink from "../UI/Navlink";
import Logo from "../UI/Logo";
import styles from "./Navbar.module.css";
import { getAuth, signOut } from "firebase/auth";
import { ShoppigCart } from "../Icon/shopping-cart";
import { Logout } from "../Icon/logout";
import { Login } from "../Icon/login";
import { Link } from "react-router-dom";


const Navbar = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  const toggleMenuHandler = () => {
    dispatch(uiActions.toggleMenu());
  };

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
  }
  return (
    <section className={styles.nav_shadow}>
      <nav className={styles.nav}>
        <Logo />
        <div className="hidden ml-48 md:block my-auto">
          <div className='flex items-center gap-x-[40px] '>
            <ol className='flex gap-x-6 font-[500] '>
              <li className="hover:text-[#a95414]">
                <a href="./sell">How To Sell</a>
              </li>
              <li className="hover:text-[#a95414]">
                <a href="./blog">Blogs</a>
              </li>
            </ol>
          </div>
        </div>
        <div className="my-auto flex items-center gap-x-5 md:gap-16">
          <div className="md:hidden pt-[5px]">
            <Navlink onClick={toggleMenuHandler}>
              <i class="ri-function-line "></i>
            </Navlink>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-x-4">
              <button className="hover:text-[#a95414] ">
                <Link to="/log-in" className="flex gap-x-1 items-center">Login <Login/> </Link>
              </button>
              <button onClick={signOutHandler} className="flex gap-x-1 items-center group hover:text-[#a95414] ">
                <Logout/> logout
              </button>
            </div>
          </div>
          <Navlink onClick={toggleCartHandler}>
            <div className={styles["nav__btn-wrapper"]}>
             <ShoppigCart className="hover:fill-[#a95414]"/>
              {totalQuantity > 0 && <span className={styles.nav__counter}>{totalQuantity}</span>}
            </div>
          </Navlink>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
