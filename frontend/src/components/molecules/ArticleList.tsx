import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// scss import
import styles from './styles/ArticleList.module.scss';

// props type
export type ArticleListProps = {
    id: number;
    image: string;
    title: string;
    desc: string;
    link: string;
    date: string;
};

const ArticleList = ({
    id,
    image,
    title,
    desc,
    link,
    date,
}: ArticleListProps) => {
    return (
        <div className={styles.articleListBox}>
            <div className={styles.imageBox}>
                <Image
                    className={styles.image}
                    src={image}
                    width={300}
                    height={100}
                    alt='記事画像'
                />
            </div>
            <div className={styles.textBox}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.date}>{date}</p>
                <p className={styles.desc}>{desc}</p>
                <Link href={link} />
            </div>
        </div>
    );
};

export default ArticleList;
