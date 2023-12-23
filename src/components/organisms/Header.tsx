import React from 'react'


// scss import
import styles from './styles/Header.module.scss'
import Logo from '../atoms/Logo'


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Logo id={1} link='/' size='medium' />
            </div>
        </div>
    )
}

export default Header