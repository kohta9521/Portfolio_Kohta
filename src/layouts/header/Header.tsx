import React from "react";

// css import
import styles from "./Header.module.css";
import Logo from "@/features/header/Logo";
import ContactButton from "@/features/header/ContactButton";


const Header: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <Logo />
        <ContactButton />
      </div>
    </>
  )
}

export default Header;