import React from 'react';

// scss import
import styles from './styles/RowBox.module.scss';

// type
export type RowBoxProps = {
    id: number;
    children: React.ReactNode;
};

const RowBox = ({ id, children }: RowBoxProps) => {
    return (
        <div className={styles.rowBox} key={id}>
            {children}
        </div>
    );
};

export default RowBox;
