import React, { FC } from 'react';

// css import
import styles from "./styles/Header.module.css";

// components import
import Logo from '../atoms/Logo';
import List from '../molecules/LIst';


const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo id={1} size='medium' />
        <List />
      </div>
    </div>
  )
}

export default Header;