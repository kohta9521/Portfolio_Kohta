import React, { FC } from "react";

// css import
import styles from "./styles/Hero.module.css";


const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
     <div className={styles.container}>
        <div className={styles.wrapper}>
        <h1 className={styles.typingtext}>
          Welcome to my Portfolio Site
        </h1>
        </div>
     </div>
    </div>
  )
}

export default Hero;