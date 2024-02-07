'use client';
import styles from './styles/HamburgerBtn.module.scss';

export type HamburgerBtnProps = {
  isOpen: boolean;
  toggle: () => void;
};

const HamburgerBtn = ({ isOpen, toggle }: HamburgerBtnProps) => {
  return (
    <button className={styles.hamburgerBtn} onClick={toggle}>
      <div className={styles.icon}>
        <span className={`${styles.line} ${isOpen ? styles.open : ''}`}></span>
        <span className={`${styles.line} ${isOpen ? styles.open : ''}`}></span>
      </div>
    </button>
  );
};

export default HamburgerBtn;
