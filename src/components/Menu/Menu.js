import React from "react";
import styles from "./Menu.module.css";
import Backdrop from "../UI/Backdrop";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { getAuth, signOut } from "firebase/auth";
import { log } from "react-modal/lib/helpers/ariaAppHider";
import { authActions } from "../../store/authSlice";

const Menu = (props) => {
  const dispatch = useDispatch();
  const menuIsActive = useSelector((state) => state.ui.menuIsVisible);

  const closeMenuHandler = () => {
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
  };

  return (
    <>
      <div className={`${styles.menu} ${menuIsActive ? styles.active : ""}`}>
        <form>
          <input type="text" placeholder="search" />
          <button>
            <i class="ri-search-line"></i>
          </button>
        </form>
        <button className={styles["close-menu"]} onClick={closeMenuHandler}>
          <i class="ri-close-line"></i>
        </button>
        <ul className={styles["dropdown_links"]}>
          {/* <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li> */}
          <li>
            <a href="./sell">How To Sell</a>
          </li>
          <li>
            <a href="./blog">Blogs</a>
          </li>
          <li>
            <a href="/log-in">Login</a>
          </li>
        </ul>
        <button onClick={signOutHandler} className={styles.logout}>
          <i class="ri-logout-box-line"></i> logout
        </button>
      </div>
      {menuIsActive && <Backdrop onClick={closeMenuHandler} />}
    </>
  );
};

export default Menu;
