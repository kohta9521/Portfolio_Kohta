import SectionTitle from '../molecules/SectionTitle';

import styles from './styles/News.module.scss';

const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.container}>
        <SectionTitle id={1} idName="news" number={'01'} jaTitle={'お知らせ'} enTitle={'NEWS'} color="white" />
      </div>
    </div>
  );
};

export default News;
