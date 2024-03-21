import React from 'react';

import ContactBtn from '../atoms/ContactBtn';
import Logo from '../atoms/Logo';
import HeaderListBox from '../molecules/HeaderListBox';

import styles from './styles/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo id={1} link="/" color="black" size="medium" />
      <HeaderListBox>
        <ContactBtn id="contact" link="/contact" />
      </HeaderListBox>
    </div>
  );
};

export default Header;
