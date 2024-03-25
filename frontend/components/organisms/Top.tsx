import React from 'react';

import styles from './styles/Top.module.scss';

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.leftBox}></div>
      <div className={styles.rightBox}></div>
    </div>
  );
};

export default Top;
