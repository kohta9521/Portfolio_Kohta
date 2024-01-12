import React from 'react';

// scss import
import styles from './styles/Logo.module.scss';

// ant design import
import { FireFilled } from '@ant-design/icons';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.logo_icon}>
                <FireFilled />
            </div>
        </div>
    );
};

export default Logo;
