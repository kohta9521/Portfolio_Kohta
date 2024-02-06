import Link from 'next/link';

import styles from './styles/ViewMoreBtn.module.scss';

export type ViewMoreBtnProps = {
  id: number;
  text?: string;
  link: string;
  color?: 'black' | 'white';
};

const ViewMoreBtn = ({ id, text = 'View More', link, color = 'white' }: ViewMoreBtnProps) => {
  return (
    <Link className={`${styles.linkBox} ${styles[color]}`} href={link} key={id}>
      <p className={`${styles.logoText}`}>{text}</p>
      <span className={styles.arrow}></span>
    </Link>
  );
};

export default ViewMoreBtn;
