import React, { FC } from "react";

// css import
import styles from "./styles/Title.module.css";

// props type
type Props = {
  id: number;
  idtext: string;
  text: string;
}


const Title: React.FC<Props> = ({ id, idtext, text }) => {
  return (
    <div className={styles.titleBox} key={id} id={idtext}>
      <h1 className={styles.title}>
        {text}
      </h1>
    </div>
  )
}

export default Title;