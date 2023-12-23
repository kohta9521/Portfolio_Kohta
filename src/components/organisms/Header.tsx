import React from 'react'


// scss import
import styles from './styles/Header.module.scss'


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <h1>header area</h1>
            </div>
        </div>
    )
}

export default Header