import React from "react";
import styles from "./Device.module.css";
import img from '../images/img1.jpeg'

function Device() {
  return (
    <div className={styles.container}>
      <div className={styles.device}>
        <div className={styles.before}></div>
        <div className={styles.imageContainer}>
          <img src={img} alt="img" className={styles.img}/>
        </div>
        <div className={styles.after}></div>
      </div>
    </div>
  );
}

export default Device;
