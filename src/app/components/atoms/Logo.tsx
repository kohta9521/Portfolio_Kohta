import React, { FC } from "react";

// css import
import styles from "./styles/Logo.module.css";

// props type
interface LogoProps {
  size?: "small" | "medium" | "large";
}


const Logo: React.FC<LogoProps> = ({ size = "medium" }) => {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      <div className={styles.container}>
        <img className={styles.logoimg} src="" alt="ロゴ画像" />
      </div>
    </div>
  )
}

export default Logo;