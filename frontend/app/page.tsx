import React from 'react';

import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';

import styles from '../styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
