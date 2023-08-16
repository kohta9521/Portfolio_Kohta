'use client';
import React, { FC } from "react";

// css import
import styles from "./styles/BesideScroll.module.css";


const BesideScroll:React.FC = () => {
  return (
    <div className={styles.beside}>
      <h1 className={styles.text}>
        KOHTA ENGINEER PORTFOLIO SITE
      </h1>
    </div>
  )
}

export default BesideScroll;