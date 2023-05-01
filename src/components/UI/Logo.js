import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/home">
        <div className="max-w-[150px] ">
          <img src="/images/Handmade_Products_logo.jpg" className="max-h-[85px]" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
