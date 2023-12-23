'use client';
import React, { useState } from 'react'


// scss import
import styles from './styles/Header.module.scss'
import Logo from '../atoms/Logo'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    return (
        <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <a href="#">
              <img src="logo.svg" alt="Your Company Logo" />
            </a>
          </div>
  
          <div className={`${styles.navLinks} ${isMenuOpen ? styles.show : ''}`}>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>Product</button>
              <div className={styles.dropdownContent}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <a href="#">Features</a>
            <a href="#">Marketplace</a>
            <a href="#">Company</a>
          </div>
  
          <div className={styles.login}>
            <a href="#">Log in</a>
          </div>
  
                {/* ハンバーガーメニューアイコン */}
                <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
          {/* アイコンの表示切り替え */}
          {isMenuOpen ? (
            <img src="close.svg" alt="Close Menu" />
          ) : (
            <img src="menu.svg" alt="Open Menu" />
          )}
        </div>
        </nav>

      {/* モバイルメニュー */}
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.show : ''}`}>
        {/* メニュー項目 */}
        {/* ... */}
      </div>
      </header>
    )
}

export default Header