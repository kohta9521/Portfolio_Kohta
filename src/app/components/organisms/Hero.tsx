import React, { FC } from 'react';

// css import
import styles from "./styles/Hero.module.css";
import HeroTitleBox from '../molecules/HeroTitleBox';
import Image from 'next/image';

// components import



const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <HeroTitleBox />
        <div className={styles.imgBox}>
          <img className={styles.img} src="/img/hero.jpg" alt="" />
        </div>
        <div className={styles.scrolldown3}><span>Scroll</span></div>
      </div>
    </div>
  )
}

export default Hero;