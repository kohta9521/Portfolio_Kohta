import React from 'react';

// components import
import GrayHeroBg from '@/components/molecules/GraryHeroBg';
import About from '@/components/organisms/About';
import Footer from '@/components/organisms/Footer';
import News from '@/components/organisms/News';
import Top from '@/components/organisms/Top';
import Work from '@/components/organisms/Work';

import styles from '../styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <GrayHeroBg />
      <Top />
      <News />
      <About />
      <Work />
      <Footer />
    </main>
  );
}
