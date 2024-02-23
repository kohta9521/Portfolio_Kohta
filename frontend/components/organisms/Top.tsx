import React from 'react';

// sass import
import styles from './styles/Top.module.scss';

// components import
import Header from './Header';

const Top = () => {
  return (
    <div className={styles.top}>
      <Header />
    </div>
  );
};

export default Top;
