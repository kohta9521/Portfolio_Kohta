import React from 'react'
import Image from 'next/image'

// css import
import styles from './styles/Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>
          Kohta s Software Engineering Portfolio Site
        </h1>
        <p className={styles.heroSubTitle}>
          On this site, you can view Kohta s productions and daily studies as an
          engineer. Kohta is studying every day in order to work as a software
          engineer in the future!
        </p>
        <div className={styles.heroImgBox}>
          <Image
            src="/images/HeroImg.png"
            quality={100}
            width={2000}
            height={700}
            priority={true}
            alt="heroTopPageImg"
            className={styles.heroImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
