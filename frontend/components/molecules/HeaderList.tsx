'use client';
import { useState } from 'react';

import useAOS from '@/hooks/useAOS';

// components
import HamburgerBtn from '../atoms/HamburgerBtn';
import ListItem from '../atoms/ListItem';
import HamburgerScreen from '../organisms/HamburgerScreen';

import styles from './styles/HeaderList.module.scss';

const HeaderList = () => {
  useAOS();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.headerList} data-aos="fade-up">
      <ListItem id={1} text={'Home'} link={'/'} size={'medium'} color={'white'} />
      <ListItem id={1} text={'About'} link={'/'} size={'medium'} color={'white'} />
      <ListItem id={1} text={'Services'} link={'/'} size={'medium'} color={'white'} />
      <ListItem id={1} text={'Works'} link={'/'} size={'medium'} color={'white'} />{' '}
      <ListItem id={1} text={'Blog'} link={'/'} size={'medium'} color={'white'} />{' '}
      <ListItem id={1} text={'Contact'} link={'/'} size={'medium'} color={'white'} />{' '}
      <HamburgerBtn isOpen={false} toggle={toggle} />
      <HamburgerScreen isOpen={isOpen} />
    </div>
  );
};

export default HeaderList;
