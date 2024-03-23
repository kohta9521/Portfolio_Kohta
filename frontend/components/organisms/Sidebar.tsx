import Link from 'next/link';
import React from 'react';
import { FaPhone } from 'react-icons/fa6';

import styles from './styles/Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuBtnBox}></div>
      <div className={styles.arrowBox}></div>
      <div className={styles.contactBtnBox}>
        <Link href={'/contact'} className={styles.contactBtnLink}>
          <p className={styles.contactBtnText}>Contact me</p>
          <FaPhone className={styles.contactBtnIcon} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
