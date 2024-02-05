import Link from 'next/link';

import styles from './styles/ListContactBtn.module.scss';

export type ListContactBtnProps = {
  id: number;
  text: string;
  link: string;
};

const ListContactBtn = ({ id, text, link }: ListContactBtnProps) => {
  return (
    <Link key={id} href={link} className={styles.link}>
      <p className={styles.btnText}>{text}</p>
    </Link>
  );
};

export default ListContactBtn;
