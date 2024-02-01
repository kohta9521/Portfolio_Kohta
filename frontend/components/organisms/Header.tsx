// compoentns
import Logo from '../atoms/Logo';
import HeaderList from '../molecules/HeaderList';

// scss
import styles from './styles/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo id={1} link="/" color="black" size="medium" />
        <HeaderList />
      </div>
    </div>
  );
};

export default Header;
