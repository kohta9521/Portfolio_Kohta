'use client';

import React from 'react';

import SectionTitle from '../molecules/SectionTitle';

import styles from './styles/Work.module.scss';

const Work = () => {
  return (
    <div className={styles.work}>
      <div className={styles.container}>
        <SectionTitle id={4} idName="work" number="04" jaTitle="仕事" enTitle="Work" color="white" />
      </div>
    </div>
  );
};

export default Work;
