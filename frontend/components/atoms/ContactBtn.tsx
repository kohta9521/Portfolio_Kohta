import Link from 'next/link';
import React from 'react';

import styles from './styles/ContactBtn.module.scss';

export type ContactBtnProps = {
  id: string;
  link: string;
};

const ContactBtn = ({ id, link }: ContactBtnProps) => {
  return (
    <Link href={link} id={id} className={styles.btn}>
      <p className={styles.text}>Contact</p>
    </Link>
  );
};

export default ContactBtn;
