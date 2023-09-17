import React, { FC } from 'react';

// css import
import styles from './styles/Button.module.css';

// child components import

// props type
type Props = {
  id: number;
  toLink: string;
  text?: number;
  size?: 'small' | 'medium' | 'large';
  color?: 'bgBlack' | 'bgGreen';
};

// 配列の型定義
type List = {
  id: number;
  textContent: string;
};

const Button: React.FC<Props> = ({
  id,
  toLink,
  text = 1,
  size = 'medium',
  color = 'bgBlack',
}) => {
  // text array
  const TextArray: List[] = [
    {
      id: 1,
      textContent: 'View More',
    },
    {
      id: 2,
      textContent: 'More',
    },
    {
      id: 3,
      textContent: 'Go!',
    },
  ];
  const textNumber = TextArray[text - 1];

  return (
    <a
      key={id}
      className={`${styles.button} ${styles.bgleft} ${styles[size]} ${styles[color]}`}
      href={toLink}
    >
      <span>{textNumber.textContent}</span>
    </a>
  );
};

export default Button;
