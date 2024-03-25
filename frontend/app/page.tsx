'use client';
import React from 'react';

// components import

import Top from '@/components/organisms/Top';

import { useLanguage } from '@/hooks/LanguageContext';

import styles from '../styles/page.module.scss';

export default function Home() {
  const { language } = useLanguage();
  return (
    <main className={styles.main}>
      <Top />
    </main>
  );
}
