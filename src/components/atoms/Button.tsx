import React, { memo } from 'react';

// scss import
import styles from './Button.module.scss';

// props
export interface ButtonProps {
    size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    shape?: 'square' | 'rounded' | 'pill';
    textAlign?: 'left' | 'center' | 'right';
    onClick?: () => void;
    text?: string;
}

// function to generate class name
const getClassName = (
    size: string,
    color: string,
    shape: string,
    textAlign: string,
) => {
    return [
        styles[`btn-${size}`],
        styles[`btn-${color}`],
        styles[`btn-${shape}`],
        styles[`btn-${textAlign}`],
    ].join(' ');
}

// component
// eslint-disable-next-line react/display-name
const Button = memo((
    {
        size = 'medium',
        color = 'primary',
        shape = 'square',
        textAlign = 'center',
        onClick,
        ...props
    }: ButtonProps) => {

    return (
        <button
            className={getClassName(size, color, shape, textAlign)}
            onClick={onClick}
        >
            {props.text}
        </button>
    );
});

export default Button;