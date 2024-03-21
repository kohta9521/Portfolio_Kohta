import React from 'react';

import ContactBtn from '../atoms/ContactBtn';
import List from '../atoms/List';
import Logo from '../atoms/Logo';
import HeaderListBox from '../molecules/HeaderListBox';

import styles from './styles/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo id={1} link="/" color="black" size="medium" />
      <HeaderListBox>
        <List id="1" text="About" link="/about" />
        <List id="2" text="Skill" link="/skill" />
        <List id="3" text="Services" link="/services" />
        <List id="4" text="FAQ" link="/question" />
        <List id="5" text="Blog" link="/blog" />
        <ContactBtn id="contact" link="/contact" />
      </HeaderListBox>
    </div>
  );
};

export default Header;
