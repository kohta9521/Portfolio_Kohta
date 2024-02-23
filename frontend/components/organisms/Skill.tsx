'use client';
import React from 'react';

import SectionTitle from '../molecules/SectionTitle';

import styles from './styles/Skill.module.scss';


const Skill = () => {
  return (
    <div className={styles.skill}>
      <div className={styles.container}>
        <SectionTitle id={3} idName="skill" number="03" jaTitle="保有技術" enTitle="Skill Set" color="white" />
      </div>
    </div>
  );
};

export default Skill;
