import React from 'react';

// scss import
import styles from './styles/TextDisplay.module.scss';

// props type
export type TextDisplayProps = {
    text: string;
};

const TextDisplay = ({ text }: TextDisplayProps) => {
    return <div className={styles.textDisplay}>{text}</div>;
};

export default TextDisplay;
