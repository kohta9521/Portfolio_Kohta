'use client';
import React from 'react';

// components import

import LanguageSwitcher from '@/components/molecules/LanguageSwitcher';
import Header from '@/components/organisms/Header';
import Sidebar from '@/components/organisms/Sidebar';

import { useLanguage } from '@/hooks/LanguageContext';

import translation from '../data/translation.json';
import styles from '../styles/page.module.scss';

export default function Home() {
  const { language } = useLanguage();
  return (
    <main className={styles.main}>
      <Sidebar />
      <Header />
      <LanguageSwitcher />
      <h1 className={styles.text}>{translation.home.title[language]}</h1>
    </main>
  );
}
