import ListContactBtn from '../atoms/ListContactBtn';
import ListItem from '../atoms/ListItem';

import styles from './styles/HeaderList.module.scss';

const HeaderList = () => {
  return (
    <div className={styles.headerList}>
      <ListItem id={1} text={'Home'} link={'/'} size={'medium'} color={'black'} />
      <ListItem id={1} text={'Home'} link={'/'} size={'medium'} color={'black'} />
      <ListItem id={1} text={'Home'} link={'/'} size={'medium'} color={'black'} />
      <ListItem id={1} text={'Home'} link={'/'} size={'medium'} color={'black'} />
      <ListContactBtn id={1} text={'Contact'} link={'/contact'} />
    </div>
  );
};

export default HeaderList;
