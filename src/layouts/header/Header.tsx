import React from "react";

// css import
import styles from "./Header.module.css";
import Logo from "@/features/header/Logo";


const Header: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <Logo />
      </div>
    </>
  )
}

export default Header;