import React from 'react';

// scss import
import styles from './styles/CommonLayout.module.scss';

// props type
export type CommonLayoutProps = {
    id: number;
    children: React.ReactNode;
};

const CommonLayout = ({ id, children }: CommonLayoutProps) => {
    return (
        <div className={styles.commonLayout} key={id}>
            <div className={styles.container}>{children}</div>
        </div>
    );
};

export default CommonLayout;
