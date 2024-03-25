import React from 'react';

import { useLanguage } from '@/hooks/LanguageContext';

import styles from './styles/LanguageSwitcher.module.scss';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className={styles.box}>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('jp')}>日本語</button>
    </div>
  );
};

export default LanguageSwitcher;
