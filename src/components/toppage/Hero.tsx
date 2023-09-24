import React from 'react'

// css import
import styles from './styles/Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>
          Kohta Software Engineering Portfolio Site
        </h1>
        <p className={styles.heroSubTitle}>
          On this site, you can view Kohta productions and daily studies as an
          engineer. Kohta is studying every day in order to work as a software
          engineer in the future!
        </p>
        <div className={styles.heroImgBox}>
          <img
            src="/images/HeroImg.png"
            width={2000}
            height={700}
            alt="heroTopPageImg"
            className={styles.heroImg}
          />
        </div>
        <div className={styles.scrolldown3}>
          <span>Scroll</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
