'use client';
import Link from 'next/link';

import useAOS from '@/hooks/useAOS';

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
  useAOS();
  return (
    <Link key={id} className={`${styles.logoBox}`} href={link} data-aos="fade-up">
      <h1 className={`${styles.text} ${styles[color]} ${styles[size]}`}>Kohta Engineer Portfolio</h1>
    </Link>
  );
};

export default Logo;
