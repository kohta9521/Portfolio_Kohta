import React, { FC } from "react";

// css import
import styles from "./styles/Title.module.css";

// props type
type Props = {
  id: number;
  idtext: string;
  text: string;
  align: string;
}


const Title: React.FC<Props> = ({ id, idtext, text, align = "left" }) => {
  return (
    <div className={`${styles.titleBox} ${styles[align]}`} key={id} id={idtext}>
      <h1 className={styles.title}>
        {text}
      </h1>
      <h1 className={styles.title2}>
        {text}
      </h1>
    </div>
  )
}

export default Title;