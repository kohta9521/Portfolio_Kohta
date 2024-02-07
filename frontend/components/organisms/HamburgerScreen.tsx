import Link from 'next/link';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaSquareGithub } from 'react-icons/fa6';

import ScreenListItem from '../atoms/ScreenListItem';
import ScreenTitle from '../atoms/ScreenTitle';
import ScreenListBox from '../molecules/ScreenListBox';

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
        <div className={styles.container}>
          <ScreenListBox id={1}>
            <ScreenTitle id={1} text={'TOP'} />
            <ScreenListItem id={1} text={'トップ'} link={'/'} />
          </ScreenListBox>
          <ScreenListBox id={2}>
            <ScreenTitle id={2} text={'ABOUT'} />
            <ScreenListItem id={2} text={'会社概要'} link={'/'} />
            <ScreenListItem id={3} text={'サービス'} link={'/'} />
            <ScreenListItem id={4} text={'会社理念'} link={'/'} />
          </ScreenListBox>
        </div>
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
            <FaSquareXTwitter className={styles.icon} />
          </Link>
          <Link href={'/'} className={styles.snsLink}>
            <FaSquareGithub className={styles.icon} />
          </Link>
          <Link href={'/'} className={styles.snsLink}>
            <FaInstagramSquare className={styles.icon} />
          </Link>
          <Link href={'/'} className={styles.snsLink}>
            <FaLinkedin className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HamburgerScreen;
