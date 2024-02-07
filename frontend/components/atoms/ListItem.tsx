import Link from 'next/link';

import styles from './styles/ListItem.module.scss';

// props type
export type ListItemProps = {
  id: number;
  text: string;
  link: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'black' | 'white';
};

const ListItem = ({ id, text, link, size = 'medium', color = 'white' }: ListItemProps) => {
  return (
    <Link key={id} href={link} className={`${styles.listItem}`}>
      <p className={`${styles[size]} ${styles[color]}`}>{text}</p>
    </Link>
  );
};

export default ListItem;
