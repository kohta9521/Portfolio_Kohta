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
          <img
            className={styles.proImg}
            src="/images/profile.jpg"
            alt="profileImg"
          />
          <div className={styles.profileBox}>
            <h2 className={styles.name}>Kohta Kochi</h2>
            <p className={styles.nameja}>河内光太</p>
            <br />
            <p className={styles.maintext}>
              東京都出身 東京都在住
              <br />
              都内の私立大学学部2年生 法学部法学科
              高校3年生の終わりにプログラミングと出会いそこからどハマりする。
              自らプログラミングコミュニティの立ち上げ・大学内のサービスなどを日々制作している。
              また、将来はエンジニアになるべく勉強を継続中。
            </p>
            <div className={styles.snsBox}>
              <ul>
                <li>
                  <a href="">
                    <img
                      className={styles.icon}
                      src="/icons/git.png"
                      alt="githubIcon"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      className={styles.icon}
                      src="/icons/x.png"
                      alt="xIcon"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      className={styles.icon}
                      src="/icons/linkedin.png"
                      alt="linkdInicon"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      className={styles.icon}
                      src="/icons/youtube.png"
                      alt="youtubeIcon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
