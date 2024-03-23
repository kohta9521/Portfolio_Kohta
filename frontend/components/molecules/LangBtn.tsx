'use client';
import React from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';

import styles from './styles/LangBtn.module.scss';

const LangBtn = () => {
  return (
    <div className={styles.btn}>
      <div className={styles.btnCircle}>
        <AiOutlineGlobal className={styles.btnIcon} />
      </div>
      <div className={styles.jaCircle}>
        <p className={styles.jaText}>Ja</p>
      </div>
      <div className={styles.enCircle}>
        <p className={styles.enText}>En</p>
      </div>
    </div>
  );
};

export default LangBtn;
