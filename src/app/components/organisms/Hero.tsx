import React, { FC } from "react";

// css import
import styles from "./styles/Hero.module.css";


const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>
          Kohta's Software Engineering Portfolio Site
        </h1>
        <p className={styles.subtitle}>
        On this site, you can view Kohta's productions and daily studies as an engineer. Kohta is studying every day in order to work as a software engineer in the future!
        </p>
      </div>
      <div className={styles.imgBox}>
        <img className={styles.img} src="/img/hero.jpg" alt="heroImg" />
      </div>
    </div>
  )
}

export default Hero;