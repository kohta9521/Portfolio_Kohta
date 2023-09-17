import React, { FC } from 'react';

// css import
import styles from './styles/SubTitle.module.css';

// props type
type Props = {
  id: number;
  text: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'gray' | 'black' | 'white';
};

const SubTitle: React.FC<Props> = ({
  id,
  text,
  size = 'medium',
  color = 'white',
}) => {
  return (
    <div className={styles.titleBox}>
      <h2 className={styles.text}></h2>
    </div>
  );
};

export default SubTitle;
