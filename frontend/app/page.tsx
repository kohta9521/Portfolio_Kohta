import React from 'react';

// components import
import GrayHeroBg from '@/components/molecules/GraryHeroBg';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import News from '@/components/organisms/News';

import styles from '../styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <GrayHeroBg />
      <Header />
      <Hero />
      <News />
    </main>
  );
}
