'use client';
import React from 'react';

// scss import
import styles from './styles/BasicCard.module.scss';

// custom hooks import
import useAOS from '../../../hooks/useAOS';

// type
export type BasicCardProps = {
    id: number;
    children: React.ReactNode;
};

const BasicCard = ({ id, children }: BasicCardProps) => {
    useAOS();
    return (
        <div className={styles.basicCard} key={id} data-aos='fade-up'>
            {children}
        </div>
    );
};

export default BasicCard;
