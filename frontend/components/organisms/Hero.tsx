'use client';
import React from 'react';

// hooks import
import useAOS from '@/hooks/useAOS';

// sass import
import styles from './styles/Hero.module.scss';

const Hero = () => {
  useAOS();
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <div className={styles.scrollBox}>
            <span className={styles.scrollTitle}>Scroll down</span>
            <span className={styles.arrowDown} />
          </div>
        </div>
        <div className={styles.centerBox}></div>
        <div className={styles.rightBox}></div>
      </div>
    </div>
  );
};

export default Hero;
