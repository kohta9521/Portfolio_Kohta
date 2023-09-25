'use client'
import React, { useState } from 'react'

// css import
import styles from './styles/Profile.module.scss'

// react icons
import { ImArrowDownRight2 } from 'react-icons/im'
import SectionTitle from '../common/SectionTitle'

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <SectionTitle key={2} id="#profile" text="PROFILE" />
        <div className={styles.flexBox}>
          <img src="/images/profile.jpg" alt="profileImg" />
          <div className={styles.profileBox}>
            <h2 className={styles.name}>Kohta Kochi</h2>
            <p className={styles.nameja}>河内光太</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
