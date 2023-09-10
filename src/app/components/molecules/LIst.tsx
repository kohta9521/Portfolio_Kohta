import React, { FC } from "react";

// components import


// css import
import styles from "./styles/List.module.css";
import ListItem from "../atoms/ListItem";


const List: React.FC = () => {
  return (
    <div className={styles.listBox}>
      <ListItem listNumber={1} />
    </div>
  )
}

export default List;