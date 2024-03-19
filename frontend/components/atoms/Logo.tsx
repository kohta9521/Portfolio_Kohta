'use client';
import Link from 'next/link';

import useAOS from '@/hooks/useAOS';

import styles from './styles/Logo.module.scss';

export type LogoProps = {
  id: number;
  link: string;
  color?: 'black' | 'white' | 'blue';
  size?: 'small' | 'medium' | 'large';
};

const Logo = ({ id, link, color = 'white', size = 'medium' }: LogoProps) => {
  useAOS();
  return (
    <Link key={id} className={`${styles.logoBox}`} href={link} data-aos="fade-up">
      <h1 className={`${styles.text} ${styles[color]} ${styles[size]}`}>Kohta Engineer Portfolio</h1>
    </Link>
  );
};

export default Logo;
