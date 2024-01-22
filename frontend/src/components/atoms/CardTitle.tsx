import React from 'react';

// scss import
import styles from './styles/CardTitle.module.scss';

// type exports
export type CardTitleProps = {
    id: number;
    title: string;
};

const CardTitle = ({ id, title }: CardTitleProps) => {
    return (
        <h1 className={styles.titleText} key={id}>
            {title}
        </h1>
    );
};

export default CardTitle;
