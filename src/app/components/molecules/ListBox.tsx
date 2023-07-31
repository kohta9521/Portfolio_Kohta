import React, { FC } from "react";

// css import
import styles from "./styles/ListBox.module.css";
import List from "../atoms/List";


const ListBox: React.FC = () => {
  return (
    <div className={styles.listBox}>
      <List  id={0} text="Home" link="/" color="white" size="medium" />
    </div>
  )
}

export default ListBox;