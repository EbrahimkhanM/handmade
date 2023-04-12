import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/home">
        {/* <span>SHARE TO WEAR</span> */}
        <div className="max-w-[180px] ">
          <img src="/images/Handmade_Products_logo.jpg" className="max-h-[100px]" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
