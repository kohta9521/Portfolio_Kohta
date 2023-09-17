import React, { FC } from 'react';

// css import
import styles from './styles/Logo.module.css';

// propt type
type Props = {
  id: number;
  size?: 'small' | 'medium' | 'large';
};

const Logo: React.FC<Props> = ({ id, size = 'medium' }) => {
  return (
    <a className={styles.logoLink} href="/" key={id}>
      <img
        className={`${styles.logoImg} ${styles[size]}`}
        src="/img/logo.png"
        alt="ウェブサイトロゴ画像"
      />
    </a>
  );
};

export default Logo;
