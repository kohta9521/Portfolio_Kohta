'use client';
import React from 'react';

// scss import
import styles from './styles/SectionTitle.module.scss';

// custom hook import
import useAOS from '../../hooks/useAOS';

// props type
export type SectionTitleProps = {
    id: number;
    title: string;
    subtitle: string;
};

const SectionTitle = ({ id, title, subtitle }: SectionTitleProps) => {
    useAOS();
    return (
        <div className={styles.titleBox} key={id} data-aos='fade-up'>
            <h1 className={styles.titleText}>{title}</h1>
            <p className={styles.subtitleText}>{subtitle}</p>
        </div>
    );
};

export default SectionTitle;
