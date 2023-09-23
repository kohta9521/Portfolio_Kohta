import React from 'react'

// css import
import styles from './styles/Header.module.scss'
import Logo from '../common/Logo'
import HeaderListButton from './HeaderListButton'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo size="large" />
        <div className={styles.headerListBox}>
          <HeaderListButton id={1} text="WORKS" url="#works" size="medium" />
          <HeaderListButton
            id={2}
            text="PROFILE"
            url="#profile"
            size="medium"
          />
          <HeaderListButton
            id={3}
            text="PORTFOLIO"
            url="#portfolio"
            size="medium"
          />
          <HeaderListButton id={1} text="BLOG" url="#blog" size="medium" />
          <HeaderListButton
            id={1}
            text="CONTACT"
            url="#contact"
            size="medium"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
