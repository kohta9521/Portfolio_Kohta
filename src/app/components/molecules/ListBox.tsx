import React, { FC } from "react";

// css import
import styles from "./styles/ListBox.module.css";
import List from "../atoms/List";


const ListBox: React.FC = () => {
  return (
    <div className={styles.listBox}>
      <List />
    </div>
  )
}

export default ListBox;