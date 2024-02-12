// scss import
import styles from './styles/SectionTitle.module.scss';

// props type
export type SectionTitleProps = {
  id: number;
  idName?: string;
  number: string;
  jaTitle: string;
  enTitle: string;
  color?: 'white' | 'black';
};

const SectionTitle = ({ id, idName, number, jaTitle, enTitle, color = 'white' }: SectionTitleProps) => {
  return (
    <div key={id} id={idName} className={`${styles.sectionTitle} ${styles[color]}`}>
      <h1 className={styles.titleNumber}>{number}</h1>
      <span className={styles.titleBar}></span>
      <div className={styles.titleTextBox}>
        <p className={styles.jaTitle}>{jaTitle}</p>
        <h1 className={styles.enTitle}>{enTitle}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
