import React from 'react';

import GrayHeroBg from '@/components/molecules/GraryHeroBg';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';

import styles from '../styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <GrayHeroBg />
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
