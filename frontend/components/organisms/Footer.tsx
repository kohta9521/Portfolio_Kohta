import FooterHoverBtn from '../atoms/FooterHoverBtn';

import styles from './styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.topBox}>
        <FooterHoverBtn id={1} title={'Home'} desc={'Go to home page'} link={'/'} />
        <FooterHoverBtn id={2} title={'Home'} desc={'Go to home page'} link={'/'} />
      </div>
      <div className={styles.middleBox}></div>
      <div className={styles.bottomBox}></div>
    </div>
  );
};

export default Footer;
