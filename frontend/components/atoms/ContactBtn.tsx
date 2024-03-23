'use client';
import Link from 'next/link';
import React from 'react';

import useAOS from '@/hooks/useAOS';

import styles from './styles/ContactBtn.module.scss';

export type ContactBtnProps = {
  id: string;
  link: string;
};

const ContactBtn = ({ id, link }: ContactBtnProps) => {
  useAOS();
  return (
    <Link href={link} id={id} className={styles.btn} data-aos="fade-up">
      <p className={styles.text}>Contact</p>
    </Link>
  );
};

export default ContactBtn;
