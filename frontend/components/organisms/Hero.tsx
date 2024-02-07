'use client';
import useAOS from '@/hooks/useAOS';

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
        <div className={styles.centerBox}>
          <h1 className={styles.heroMainText} data-aos="fade-up">
            THIS IS KOHTAS
          </h1>
          <h1 className={styles.heroMainText} data-aos="fade-up">
            PORTFOLIO SITE AS
          </h1>
          <h1 className={styles.heroMainText} data-aos="fade-up">
            ENGINEERING
          </h1>
          <span className={styles.box}></span>
          <h1 className={styles.heroMainTextWhite} data-aos="fade-up">
            MY ACTIVITIES
          </h1>
          <h1 className={styles.heroMainTextWhite} data-aos="fade-up">
            AS AN ENGINEER{' '}
          </h1>
          <h1 className={styles.heroMainTextWhite} data-aos="fade-up">
            AND DAILY STUDY
          </h1>
        </div>
        <div className={styles.rightBox}></div>
      </div>
    </div>
  );
};

export default Hero;
