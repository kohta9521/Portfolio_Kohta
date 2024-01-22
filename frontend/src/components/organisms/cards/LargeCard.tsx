'use client';
import React from 'react';

// scss import
import styles from './styles/LargeCard.module.scss';

// custom hooks import
import useAOS from '../../../hooks/useAOS';

// type exports
export type LargeCardProps = {
    id: number;
    children: React.ReactNode;
};

const LargeCard = ({ id, children }: LargeCardProps) => {
    useAOS();
    return (
        <div className={styles.largeCard} key={id} data-aos='fade-up'>
            {children}
        </div>
    );
};

export default LargeCard;
