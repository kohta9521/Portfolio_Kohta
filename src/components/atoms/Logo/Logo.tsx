import React, { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// scss import
import styles from './Logo.module.scss'

// props
export interface LogoProps {
    size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
    link?: string
    altText?: string
}

// component
const Logo = memo(
    ({
        size = 'medium',
        link = '/',
        altText = 'LogoImg',
    }: LogoProps) => {
        return (
            <Link
                href={link}
                className={`${styles.logo} ${styles[size]}`}
            >
                <Image
                    src={"/images/logo.png"}
                    width={200}
                    height={80}
                    alt={altText}
                />
            </Link>
        )
    }
)

export default Logo