import React from 'react';

import Logo from '../atoms/Logo';

import styles from './styles/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo id={1} link="/" color="black" size="medium" />
    </div>
  );
};

export default Header;
