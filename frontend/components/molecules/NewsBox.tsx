import Image from 'next/image';
import Link from 'next/link';

import styles from './styles/NewsBox.module.scss';

export type NewsBoxProps = {
  id: number;
  link: string;
  image: string;
  title: string;
  date: string;
  desc: string;
};

const NewsBox = ({ id, link, image, title, date, desc }: NewsBoxProps) => {
  return (
    <Link key={id} href={link} className={styles.newsBox}>
      <Image className={styles.image} src={image} width={290} height={200} alt="newsBoxImage" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.date}>{date}</p>
      <p className={styles.desc}>{desc}</p>
    </Link>
  );
};

export default NewsBox;
