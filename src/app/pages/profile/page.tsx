import React from 'react'

import styles from "./Profile.module.css";
import Header from '@/app/components/organisms/Header';

function Profile() {
  return (
    <div className={styles.logo}>
      <Header />
      profile page
    </div>
  )
}

export default Profile;
