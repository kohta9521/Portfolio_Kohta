import React from 'react';

// scss import
import styles from './styles/DefaultCard.module.scss';

// custom hooks import
import useAOS from '../../../hooks/useAOS';

// props type
export type DefaultCardProps = {
    id: number;
    width: number;
    height: number;
    children: React.ReactNode;
};

const DefaultCard = ({ id, width, height, children }: DefaultCardProps) => {
    return (
        <div
            className={`${styles.defaultCard}`}
            style={{ width: '{width}px', height: '{height}px' }}
        ></div>
    );
};

export default DefaultCard;
