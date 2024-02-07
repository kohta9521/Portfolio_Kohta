'use client';
import styles from './styles/HamburgerBtn.module.scss';

export type HamburgerBtnProps = {
  isOpen: boolean;
  toggle: () => void;
};

const HamburgerBtn = ({ isOpen, toggle }: HamburgerBtnProps) => {
  return (
    <button className={`${styles.hamburgerBtn} ${isOpen ? styles.open : ''}`} onClick={toggle}>
      <div className={styles.icon}>
        <span className={`${styles.line}`}></span>
        <span className={`${styles.line}`}></span>
      </div>
    </button>
  );
};

export default HamburgerBtn;
