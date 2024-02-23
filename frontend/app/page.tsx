import React from 'react';

// components import
import GrayHeroBg from '@/components/molecules/GraryHeroBg';
import About from '@/components/organisms/About';
import News from '@/components/organisms/News';
import Skill from '@/components/organisms/Skill';
import Top from '@/components/organisms/Top';

import styles from '../styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <GrayHeroBg />
      <Top />
      <News />
      <About />
      <Skill />
    </main>
  );
}
