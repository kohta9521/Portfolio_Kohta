// scss import
import styles from './styles/News.module.scss';

// components import
import NewsBox from '../molecules/NewsBox';
import SectionTitle from '../molecules/SectionTitle';

const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.container}>
        <SectionTitle id={1} idName="news" number={'01'} jaTitle={'お知らせ'} enTitle={'NEWS'} color="white" />
        <div className={styles.flexBox}>
          <NewsBox
            id={1}
            link="/"
            image="/images/sample.png"
            title="UFESを開催します"
            date="2024.02.23"
            desc="合同イベントを開催します。"
          />
          <NewsBox
            id={1}
            link="/"
            image="/images/sample.png"
            title="UFESを開催します"
            date="2024.02.23"
            desc="合同イベントを開催します。"
          />
          <NewsBox
            id={1}
            link="/"
            image="/images/sample.png"
            title="UFESを開催します"
            date="2024.02.23"
            desc="合同イベントを開催します。"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
