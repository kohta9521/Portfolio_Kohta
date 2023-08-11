import React, { FC } from "react";

// css import
import styles from "./styles/Button.module.css";

// props type
type Props = {
  id: number;
  text: string;
  link: string;
  size?: "small" | "medium" | "large";
}

const Button: React.FC<Props> = ({ id, text, link,  size = "medium" }) => {
  return (
    <a className={`${styles.button} ${styles[size]} `} href={link} key={id} >
      {text}
    </a>
  )
}

export default Button;