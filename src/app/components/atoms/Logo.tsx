import React, { FC } from "react";

// css import
import styles from "./styles/Logo.module.css";

// props type
interface LogoProps {
  link: string;
  size?: "small" | "medium" | "large";
}


const Logo: React.FC<LogoProps> = ({ link= "/",  size = "medium" }) => {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      <a className={styles.container} href={link}>
        <img className={styles.logoimg} src="img/logo.png" alt="ロゴ画像" />
      </a>
    </div>
  )
}

export default Logo;