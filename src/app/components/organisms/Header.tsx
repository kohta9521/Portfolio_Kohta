import React, { FC } from "react";

// css import
import styles from "./styles/Header.module.css";
import Logo from "../atoms/Logo";


const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo link="/" size="medium" />
      </div>
    </div>
  )
}

export default Header;