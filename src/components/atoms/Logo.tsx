import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


// scss import
import styles from './styles/Logo.module.scss'

// props type
export type LogoProps = {
    id: number
    link: string
    size?: 'small' | 'medium' | 'large'
}


const Logo = ({
    id,
    link,
    size = 'medium'
}: LogoProps
) => {
    return (
        <Link key={id} href={link}>
            <Image
                src={"/images/logo.png"}
                width={120}
                height={50}
                alt="headerのロゴ画像"
                quality={100}
            />
        </Link>
    )
}

export default Logo