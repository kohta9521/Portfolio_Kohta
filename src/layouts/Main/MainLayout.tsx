import React from "react";

// css import
import styles from "./MainLayout.module.css";
import Sidebar from "../sidebar/Sidebar";


const MainLayout: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <Sidebar />
      </div>
    </>
  )
}

export default MainLayout;