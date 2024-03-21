import Link from 'next/link';
import React from 'react';

import styles from './styles/List.module.scss';

export type ListProps = {
  id: string;
  text: string;
  link: string;
};

const List = ({ id, text, link }: ListProps) => {
  return (
    <Link href={link} id={id} className={styles.link}>
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default List;
