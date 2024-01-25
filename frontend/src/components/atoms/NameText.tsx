import React from 'react';

// scss import
import styles from './styles/NameText.module.scss';

const NameText = () => {
    return (
        <div className={styles.nameBox}>
            <p className={styles.eng}>kochi kohta</p>
            <h1 className={styles.name}>河内光太</h1>
            <p className={styles.age}>20歳</p>
            <p className={styles.university}>学習院大学法学部法学科2年生</p>
        </div>
    );
};

export default NameText;
