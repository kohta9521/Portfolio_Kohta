'use client';
import React from 'react';

// components import

import LangBtn from '@/components/molecules/LangBtn';

import { useLanguage } from '@/hooks/LanguageContext';

import translation from '../data/translation.json';
import styles from '../styles/page.module.scss';

export default function Home() {
  const { language } = useLanguage();
  return (
    <main className={styles.main}>
      <LangBtn />
      <h1 className={styles.text}>{translation.home.title[language]}</h1>
      <p className={styles.text}>{translation.home.description[language]}</p>
    </main>
  );
}
