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
        <div className={styles.container}>
          {/* header componets内にlogo componentを作成認め不要 */}
          {/* <LogoImg /> */}
          <List />
          <SnsBox />
        </div>
      </div>
    </>
  )
}

export default Sidebar;