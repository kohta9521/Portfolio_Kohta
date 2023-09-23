import React from 'react'

// css import
import styles from './styles/Header.module.scss'
import Logo from '../common/Logo'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo size="large" />
      </div>
    </div>
  )
}

export default Header
