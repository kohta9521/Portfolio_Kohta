import React, { FC } from "react";

// css import
import styles from "./styles/Hero.module.css";


const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
     <div className={styles.container}>
        <div className={styles.wrapper}>
        <p className={styles.typingtext}>
          → Portfolio_Kohta git:(develop) : npm run dev
        </p>
        {/* <h1 className={styles.typingtext2}>
          →Welcome to my Portfolio Site!!
        </h1> */}
        </div>
     </div>
    </div>
  )
}

export default Hero;