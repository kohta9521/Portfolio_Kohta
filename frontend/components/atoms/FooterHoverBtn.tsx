import Link from 'next/link';

import styles from './styles/FooterHoverBtn.module.scss';

export type FooterHoverBtnProps = {
  id: number;
  title: string;
  desc: string;
  link: string;
};

const FooterHoverBtn = ({ id, title, desc, link }: FooterHoverBtnProps) => {
  return (
    <Link key={id} href={link} className={styles.hoverBtn}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </Link>
  );
};

export default FooterHoverBtn;
