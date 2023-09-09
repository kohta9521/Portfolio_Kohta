import React, { FC } from 'react';

// css import
import styles from "./styles/Headet.module.css";
import Logo from '../atoms/Logo';
import ListItem from '../atoms/ListItem';


const Header: React.FC = () => {
  return (
    <div className={styles.header}>
    <Logo id={1} size='medium' />
    <ListItem listNumber={1} />
    <ListItem listNumber={2} />
    <ListItem listNumber={3} />
    <ListItem listNumber={4} />
    <ListItem listNumber={5} />
    <ListItem listNumber={6} />
    </div>
  )
}

export default Header;