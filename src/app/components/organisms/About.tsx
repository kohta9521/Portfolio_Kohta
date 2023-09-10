import React, { FC} from 'react';

// css import
import styles from "./styles/About.module.css";
import SectionTitle from '../atoms/SectionTitle';

// components import



const About: React.FC = () => {
  return (
    <div className={styles.about} id='about'>
      <div className={styles.container}>
        <SectionTitle id={1} fill={true} text='ABOUT' />
        <SectionTitle id={1} fill={false} text='THIS PORTFOLIO SITE' />
      </div>
    </div>
  )
}

export default About;