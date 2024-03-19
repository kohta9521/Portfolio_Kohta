import React from 'react';

// components import

import Header from '@/components/organisms/Header';

import styles from '../styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
