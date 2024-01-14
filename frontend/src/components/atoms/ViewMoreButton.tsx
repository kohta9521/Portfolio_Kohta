import React from 'react';
import Link from 'next/link';

// scss import
import styles from './styles/ViewMoreButton.module.scss';

// react icons import
import { MdArrowForwardIos } from 'react-icons/md';

// props type
export type ViewMoreButtonProps = {
    id: number;
    text: string;
    link: string;
};

const ViewMoreButton = ({ id, text, link }: ViewMoreButtonProps) => {
    return (
        <Link className={styles.moreButton} href={link} key={id}>
            {text}
            <MdArrowForwardIos className={styles.moreButton_icon} />
        </Link>
    );
};

export default ViewMoreButton;
