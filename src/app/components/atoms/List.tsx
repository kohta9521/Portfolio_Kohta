import React, { FC } from "react";

// css import
import styles from "./styles/List.module.css";
import { calculateSizeAdjustValues } from "next/dist/server/font-utils";


// props type
interface ListProps {
  id:number;
  text: string;
  link: string;
  color?: "white" | "gray";
  size?: "small" | "medium";
}

const List: React.FC<ListProps> = ({ id, text, link, color = 'white', size = "medium" }) => {
  return (
    <li className={styles.list} key={id}>
      <a className={`${styles.link} ${styles[color]} ${styles[size]}`} href={link}>
      {text}
      </a>
    </li>
  )
}

export default List;