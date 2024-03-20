import React from 'react';

import styles from './styles/HeaderListBox.module.scss';

export type HeaderListBoxProps = {
  children: React.ReactNode;
};

const HeaderListBox = ({ children }: HeaderListBoxProps) => {
  return <div className={styles.listBox}>{children}</div>;
};

export default HeaderListBox;
