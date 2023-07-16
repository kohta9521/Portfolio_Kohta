import React from "react";

// css import
import styles from "./MainLayout.module.css";
import About from "../about/About";


const MainLayout: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <About />
      </div>
    </>
  )
}

export default MainLayout;