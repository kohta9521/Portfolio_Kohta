import React, { FC } from 'react';

// css import
import styles from "./styles/Headet.module.css";
import Logo from '../atoms/Logo';


const Header: React.FC = () => {
  return (
    <div className={styles.header}>
    <Logo id={1} size='medium' />
    </div>
  )
}

export default Header;