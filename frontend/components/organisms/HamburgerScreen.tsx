import Link from 'next/link';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaSquareGithub } from 'react-icons/fa6';

import styles from './styles/HamburgerScreen.module.scss';

// react icons

export type HamburgerScreenProps = {
  isOpen: boolean;
};

const HamburgerScreen = ({ isOpen }: HamburgerScreenProps) => {
  if (!isOpen) return null;
  return (
    <div className={`${styles.screen} ${isOpen ? styles.open : ''}`}>
      <div className={styles.leftBox}>
        <Link className={styles.hoverLink} key={1} href={'/'}>
          <p className={styles.hoverTitle}>Download</p>
          <p className={styles.hoverSubTitle}>資料ダウンロード</p>
        </Link>
        <Link className={styles.hoverLink} key={2} href={'/'}>
          <p className={styles.hoverTitle}>Contact</p>
          <p className={styles.hoverSubTitle}>各種お問い合わせ</p>
        </Link>
      </div>
      <div className={styles.centerBox}>
        <div className={styles.container}></div>
      </div>
      <div className={styles.rightBox}>
        <p className={styles.title}>Kohta Portfolio Site</p>
        <p className={styles.address}>
          〒150 - 0041
          <br />
          東京都渋谷区神南1-3-4 神南ビル 1F
          <br />
        </p>
        <div className={styles.snsBox}>
          <Link href={'/'} className={styles.snsLink}>
            <FaSquareXTwitter />
          </Link>
          <Link href={'/'} className={styles.snsLink}>
            <FaSquareGithub />
          </Link>
          <Link href={'/'} className={styles.snsLink}>
            <FaInstagramSquare />
          </Link>
          <Link href={'/'} className={styles.snsLink}>
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HamburgerScreen;
