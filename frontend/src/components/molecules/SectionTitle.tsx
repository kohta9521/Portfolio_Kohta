'use client';
import React, { useEffect } from 'react';

// aos imports
import AOS from 'aos';
import 'aos/dist/aos.css';

// scss import
import styles from './styles/SectionTitle.module.scss';

// props type
export type SectionTitleProps = {
    id: number;
    title: string;
    subtitle: string;
};

const SectionTitle = ({ id, title, subtitle }: SectionTitleProps) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // アニメーションの持続時間
            once: true, // アニメーションを一度だけ実行する
        });
    }, []);
    return (
        <div className={styles.titleBox} key={id} data-aos='fade-up'>
            <h1 className={styles.titleText}>{title}</h1>
            <p className={styles.subtitleText}>{subtitle}</p>
        </div>
    );
};

export default SectionTitle;
