import React, { FC } from "react";

// css import
import styles from "./styles/MainLayout.module.css";


const MainLayout: React.FC = () => {
  return (
    <>
    <h1>sample code</h1>
    <a  className={styles.sampleButton} href="/">sample button</a>
    </>
  )
}

export default MainLayout;