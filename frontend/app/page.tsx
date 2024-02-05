import React from 'react';

import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';

import styles from '../styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Footer />
    </main>
  );
}
