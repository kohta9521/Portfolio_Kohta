import styles from './styles/ScreenListBox.module.scss';

export type ScreenListBoxProps = {
  id: number;
  children: React.ReactNode;
};

const ScreenListBox = ({ id, children }: ScreenListBoxProps) => {
  return (
    <div key={id} className={styles.box}>
      {children}
    </div>
  );
};

export default ScreenListBox;
