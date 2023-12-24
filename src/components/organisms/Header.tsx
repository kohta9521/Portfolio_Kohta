import React from 'react'


// scss import
import styles from './styles/Header.module.scss'
import Logo from '../atoms/Logo'


// components import


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* logo area */}
                <div className={styles.logoArea}>
                    <Logo id={1} size='medium' link='/' />
                </div>
                {/* menu area */}
                <div className={styles.menuArea}>

                </div>
                {/* contact area */}
                <div className={styles.contactArea}>

                </div>
            </div>
        </header>
    )
}

export default Header