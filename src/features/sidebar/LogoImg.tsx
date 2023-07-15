import React from "react";

// css import
import styles from "./LogoImg.module.css";


const LogoImg: React.FC = () => {
  return (
    <>
      <div className={styles.logo}>
        <img className={styles.logoItem} src="" alt="ロゴ画像" />
      </div>
    </>
  )
}
export default LogoImg;