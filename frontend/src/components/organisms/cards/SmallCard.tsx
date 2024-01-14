'use client';
import React from 'react';

// scss import
import styles from './styles/SmallCard.module.scss';
import useAOS from '../../../hooks/useAOS';

// type
export type SmallCardProps = {
    id: number;
    children: React.ReactNode;
};

const SmallCard = ({ id, children }: SmallCardProps) => {
    useAOS();
    return (
        <div className={styles.smallCard} key={id} data-aos='fade-up'>
            {children}
        </div>
    );
};

export default SmallCard;
