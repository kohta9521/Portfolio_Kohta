import Link from 'next/link';

import styles from './styles/ScreenListItem.module.scss';

export type ScreenListItemProps = {
  id: number;
  text: string;
  link: string;
};

const ScreenListItem = ({ id, text, link }: ScreenListItemProps) => {
  return (
    <Link className={styles.linkItem} key={id} href={link}>
      {text}
    </Link>
  );
};

export default ScreenListItem;
