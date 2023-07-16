import React from "react";

// css import
import styles from "./MainLayout.module.css";
import About from "../about/About";


const MainLayout: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.topBox}>
        <About />
        </div>
        <div className={styles.bottomBox}>
          sample code
        </div>

      </div>
    </>
  )
}

export default MainLayout;