import React, { FC } from "react";

// css import
import styles from "./styles/HeroTitleBox.module.css";

// components import



const HeroTitleBox: React.FC = () => {
  return (
    <div className={styles.heroTitleBox}>
      <h1 className={styles.title}>
      Kohta's Software Engineering Portfolio Site
      </h1>
      <p className={styles.subTitle}>
      On this site, you can view Kohta's productions and daily studies as an engineer. Kohta is studying every day in order to work as a software engineer in the future!
      </p>
    </div>
  )
}

export default HeroTitleBox;