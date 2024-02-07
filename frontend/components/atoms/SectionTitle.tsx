import styles from './styles/SectionTitle.module.scss';

export type SectionTitleProps = {
  id: number;
  text: string;
  idName: string;
  color?: 'white' | 'black';
  size?: 'small' | 'medium' | 'large';
};

const SectionTitle = ({ id, text, idName, color = 'white', size = 'medium' }: SectionTitleProps) => {
  return (
    <div key={id} id={idName} className={styles.titleBox}>
      <p className={`${styles.text} ${styles[color]} ${styles[size]}`}>{text}</p>
    </div>
  );
};
export default SectionTitle;
