'use client'
import React, { useState } from 'react'

// css import
import styles from './styles/Profile.module.scss'

// react icons
import { ImArrowDownRight2 } from 'react-icons/im'

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <ImArrowDownRight2
          onClick={() => setIsOpen(!isOpen)}
          className={styles.button}
          width={300}
        />
        {isOpen && (
          <div onBlur={() => setIsOpen(false)} className={styles.hideBox}>
            hide box
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
