import React, { FC } from 'react';

// css import
import styles from './styles/About.module.css';

// components import
import SectionTitle from '../atoms/SectionTitle';
import Button from '../atoms/Button';

const About: React.FC = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        <SectionTitle id={1} fill={true} text="ABOUT" align="left" />
        <SectionTitle
          id={2}
          fill={false}
          text="THIS PORTFOLIO SITE"
          align="left"
        />
        <div className={styles.flexbox}>
          <div className={styles.textbox}>
            <p className={styles.text}>
              Nice to meet you, and thank you for visiting kohta engineer
              portfolio site.
              <br />
              I am a second-year student at a university in Tokyo. I am a member
              of the law department of the Faculty of Law, and I am improving my
              technical skills through internships and books in order to become
              an engineer in the future. Currently I am working mainly as a
              front-end engineer while also doing freelance work.
              <br />I also run ENTER, an engineering club for university
              students only. Recently, I have been studying web 3.0 and other
              fields of interest. I hope you enjoy your time here!
            </p>
            <Button id={1} toLink="/" text={1} />
          </div>
          <div className={styles.imgbox}>
            <img className={styles.img} src="/img/hero.jpg" alt="aboutImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
