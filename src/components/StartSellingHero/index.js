import React from 'react';
import styles from "./style.module.css"
import Button from '../Button';

const StartSellingHero = (props) => {
  return (
    <div className='container mx-auto mb-5'>
        <div className={`w-full h-auto  pt-80 pb-20 text-center ${styles["tart-hero-bg-image"]}`}>
            <Button btntext="Start Selling"/>

        </div>
    </div>

  ) ;
};

export default StartSellingHero;
