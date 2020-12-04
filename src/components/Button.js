import React from "react";
import styles from "./Button.module.css";

function Button({ logo, text, heading }) {
  return (
    <>
      <button className={styles.btn}>
        <div className={styles.contentContainer}>
          <div className={text=== 'Download on the' ? styles.apple : styles.logo}>
            {logo}
          </div>
          <div>
            <p className={styles.btnText}>{text}</p>
            <h4 className={styles.btnHeading}>{heading}</h4>
          </div>
        </div>
      </button>
    </>
  );
}

export default Button;
