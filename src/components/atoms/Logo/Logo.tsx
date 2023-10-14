import React, { memo } from 'react'

// scss import
import styles from './Logo.module.scss'

// props
export interface LogoProps {
    size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
    link?: string
    altText?: string
}

// component
const Logo = 
    ({
        size = 'medium',
        link = '/',
        altText = 'LogoImg',
    }: LogoProps) => {
        return (
            <a href={link} className={styles.logo} >
                <img className={`${styles.logoImg} ${styles[size]}`} src="/images/logo.png" alt={altText} />
            </a>
        )
    }


export default Logo