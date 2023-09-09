import React, { FC } from "react";

// css import
import styles from "./styles/MainLayout.module.css";


const MainLayout: React.FC = () => {
  return (
    <>
    <h1>sample code</h1>
    <a  className={styles.sampleButton} href="/">sample button</a>

    <h1 className={styles.sample1}>sample color code</h1>
    <h1 className={styles.sample2}>sample color code</h1>
    <h1 className={styles.sample3}>sample color code</h1>
    <h1 className={styles.sample4}>sample color code</h1>
    </>
  )
}

export default MainLayout;