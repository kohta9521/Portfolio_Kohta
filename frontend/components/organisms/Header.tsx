import React from 'react';

import Logo from '../atoms/Logo';

import styles from './styles/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <Logo id="1" link="/" color="white" size="medium" />
        </div>
        <div className={styles.rightBox}></div>
      </div>
    </div>
  );
};

export default Header;
