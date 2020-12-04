import React from "react";
import styles from "./About.module.css";
import Button from "./Button";
import { FaGooglePlay } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '../images/logo-png-2.png'

function About() {
  return (
    <div className={styles.textContainer}>
      
      <div className={styles.contentContainer}>
        <div className={styles.logo}><img src={logo} alt="" className={styles.img} /></div>
        <h1 className={styles.heading}>Tabu</h1>
        <p>Burda slogan ola biler</p>
      </div>
      <div className={styles.btnContainer}>
        <Link to="/" className={styles.btn}>
          <Button
            logo={<AiOutlineApple />}
            text="Download on the"
            heading="Apple Store"
          />
        </Link>
        <Link to="/" className={styles.btn}>
          <Button
            logo={<FaGooglePlay />}
            text="Get it on"
            heading="Google Play"
          />
        </Link>

        <div className={styles.qr}></div>
        <div className={styles.qr}></div>
      </div>
    </div>
  );
}

export default About;
