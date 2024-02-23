'use client';

// hooks import
import useAOS from '@/hooks/useAOS';

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
  useAOS();
  return (
    <div key={id} id={idName} className={`${styles.sectionTitle} ${styles[color]}`} data-aos="fade-up">
      <div className={styles.leftBox}>
        <h1 className={styles.number}>{number}</h1>
      </div>
      <div className={styles.rightBox}>
        <p className={styles.jaTItle}>{jaTitle}</p>
        <h1 className={styles.enTitle}>{enTitle}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
