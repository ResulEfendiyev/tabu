import React from "react";
import About from "../components/About";
import Device from "../components/Device";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Trailer from "../components/Trailer";
import Feedback from "../components/Feedback";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.home}>
      <About />
      {window.innerWidth > 1000 && <Device />}
      <Features />
      <Trailer />
      <Feedback />
      <Footer />
    </div>
  );
}

export default Home;
