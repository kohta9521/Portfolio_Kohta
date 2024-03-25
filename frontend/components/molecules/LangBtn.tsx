'use client';
import React from 'react';

// react icons
import { AiOutlineGlobal } from 'react-icons/ai';

// hooks
import { useLanguage } from '@/hooks/LanguageContext';

import styles from './styles/LangBtn.module.scss';

const LangBtn = () => {
  const { language, setLanguage } = useLanguage();
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };
  return (
    <div className={styles.btnBox}>
      <div className={styles.btnCircle}>
        <AiOutlineGlobal className={styles.btnIcon} />
      </div>
      <div className={styles.jaCircle}>
        <button className={styles.btn} onClick={() => handleLanguageChange('jp')}>
          Ja
        </button>
      </div>
      <div className={styles.enCircle}>
        <button className={styles.btn} onClick={() => handleLanguageChange('en')}>
          En
        </button>
      </div>
    </div>
  );
};

export default LangBtn;
