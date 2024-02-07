import styles from './styles/ScreenTitle.module.scss';

export type ScreenTitleProps = {
  id: number;
  text: string;
};

const ScreenTitle = ({ id, text }: ScreenTitleProps) => {
  return (
    <div key={id} className={styles.titleBox}>
      <p className={styles.titleText}>{text}</p>
    </div>
  );
};

export default ScreenTitle;
