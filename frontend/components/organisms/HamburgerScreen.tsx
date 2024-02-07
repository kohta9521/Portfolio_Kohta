import styles from './styles/HamburgerScreen.module.scss';

export type HamburgerScreenProps = {
  isOpen: boolean;
};

const HamburgerScreen = ({ isOpen }: HamburgerScreenProps) => {
  if (!isOpen) return null;
  return (
    <div className={`${styles.screen} ${isOpen ? styles.open : ''}`}>
      <div className={styles.leftBox}></div>
      <div className={styles.rightBox}></div>
    </div>
  );
};

export default HamburgerScreen;
