import Image from 'next/image';

import styles from './styles/Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.leftBox}>
          <div className={styles.topBox}></div>
          <div className={styles.bottomBox}></div>
        </div>
        <div className={styles.rightBox}>
          <Image className={styles.heroImg} src={} width={} height={} alt="heroCoverImage" />
          <p className={styles.imgText}></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
