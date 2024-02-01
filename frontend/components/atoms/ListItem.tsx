// scss import
import Link from 'next/link';

import styles from './styles/ListItem.module.scss';

// props type
export type ListItemProps = {
  id: number;
  text: string;
  link: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'black' | 'white' | 'blue';
};

const ListItem = ({ id, text, link, size = 'medium', color = 'black' }: ListItemProps) => {
  return (
    <Link key={id} href={link} className={`${styles.listItem} ${styles[size]} ${styles[color]}`}>
      {text}
    </Link>
  );
};

export default ListItem;
