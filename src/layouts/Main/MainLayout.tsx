import React from "react";

// css import
import styles from "./MainLayout.module.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";


const MainLayout: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <Header />
        <Sidebar />
      </div>
    </>
  )
}

export default MainLayout;