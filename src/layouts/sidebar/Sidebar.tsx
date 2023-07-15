import React from "react";

// css import
import styles from "./Sidebar.module.css";
import LogoImg from "@/features/sidebar/LogoImg";
import List from "@/features/sidebar/List";
import SnsBox from "@/features/sidebar/SnsBox";


const Sidebar: React.FC = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <LogoImg />
        <List />
        <SnsBox />
      </div>
    </>
  )
}

export default Sidebar;