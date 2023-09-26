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
              Born in Tokyo Lives in Tokyo
              <br />
              Second-year undergraduate student at a private university in
              Tokyo, majoring in law. He started his own programming community
              and creates services for the university on a daily basis. He is
              also continuing his studies to become an engineer in the future.
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
        {/* skill set area */}
        <div className={styles.skillBox}>
          <h2 className={styles.skillTitle}>My Skills</h2>
          <p className={styles.subSkillTitle}>- Programming -</p>
          <p className={styles.skilltext}>
            The following is a list of programming languages and tools that I
            study and use on a daily basis. I have also set up four levels for
            each language: I am studying (level 1), I have integrated the
            language into an actual service (level 2), I use the language in
            practice (level 3), and I am confident in the language (level 4).
            The main area of study is front-end software.
          </p>
          <div className={styles.langBox}></div>
          <p className={styles.subSkillTitle}>- Video Editing -</p>
          <p className={styles.skilltext}>
            I am also learning video editing, although I might not say I am do
            ing it as a job. I mainly use DaVinci Resolve 18 software and Ado be
            After Effects. I shoot and edit videos for my clubs and events.
            I also post videos on YouTube, just to kill time. Please take a look.
          </p>
          <div className={styles.langBox}></div>
          <p className={styles.subSkillTitle}>- DJ -</p>
          <p className={styles.skilltext}>
            I mainly DJ House Music a couple of times a month. Most of my e
            vents are held in Shibuya, Ebisu, and Sangenjaya. I also have my o
            wn equipment, so I often play at home parties.
          </p>
          <div className={styles.langBox}></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
