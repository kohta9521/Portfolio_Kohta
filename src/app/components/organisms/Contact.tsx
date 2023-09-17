import React, { FC } from 'react';

// css import
import styles from './styles/Contact.module.css';
import SectionTitle from '../atoms/SectionTitle';

const Contact: React.FC = () => {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.container}>
        <SectionTitle id={3} fill={true} text="CONTACT" align="left" />
      </div>
    </div>
  );
};

export default Contact;
