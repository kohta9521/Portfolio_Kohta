import Link from 'next/link';
import React from 'react';

// scss import
import styles from './styles/Logo.module.scss';

// props type
export type LogoProps = {
  id: number;
  link: string;
  color?: 'black' | 'white' | 'blue';
  size?: 'small' | 'medium' | 'large';
};

const Logo = ({ id, link, color = 'black', size = 'medium' }: LogoProps) => {
  return (
    <Link key={id} className={`${styles.logoBox}`} href={link}>
      <h1 className={`${styles.text} ${styles[color]} ${styles[size]}`}>LOGO</h1>
    </Link>
  );
};

export default Logo;
