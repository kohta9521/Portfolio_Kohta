import React, { FC} from 'react';

// css import
import styles from "./styles/About.module.css";
import SectionTitle from '../atoms/SectionTitle';
import Button from '../atoms/Button';

// components import



const About: React.FC = () => {
  return (
    <div className={styles.about} id='about'>
      <div className={styles.container}>
        <SectionTitle id={1} fill={true} text='ABOUT' align='left' />
        <SectionTitle id={2} fill={false} text='THIS PORTFOLIO SITE' align='left' />
        {/* <Button id={1} toLink='/' text={1} /> */}
      </div>
    </div>
  )
}

export default About;