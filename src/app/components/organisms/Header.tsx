import React, { FC } from 'react';

// css import
import styles from "./styles/Headet.module.css";

// components import
import Logo from '../atoms/Logo';
import List from '../molecules/LIst';


const Header: React.FC = () => {
  return (
    <div className={styles.header}>
    <Logo id={1} size='medium' />
    <List />
    </div>
  )
}

export default Header;