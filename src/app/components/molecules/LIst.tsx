import React, { FC } from "react";

// components import


// css import
import styles from "./styles/List.module.css";
import ListItem from "../atoms/ListItem";


const List: React.FC = () => {
  return (
    <div className={styles.list}>
      <ListItem listNumber={1} />
      <ListItem listNumber={2} />
      <ListItem listNumber={3} />
      <ListItem listNumber={4} />
      <ListItem listNumber={5} />
      <ListItem listNumber={6} />
      <ListItem listNumber={7} />
    </div>
  )
}

export default List;