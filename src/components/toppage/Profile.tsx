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
          <p className={styles.skilltext}>
            The following is a list of programming languages and tools that I
            study and use on a daily basis. I have also set up four levels for
            each language: I am studying (level 1), I have integrated the
            language into an actual service (level 2), I use the language in
            practice (level 3), and I am confident in the language (level 4).
            The main area of study is front-end software.
          </p>
          <div className={styles.langBox}>
            <div className={styles.langFlexBox}>
              <ul className={styles.flexBoxUl}>
                <li>
                  <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
                      alt="HTML5"
                      height="50"
                    />
                  </a>
                  HTML5
                </li>
                <li>
                  <a href="https://www.w3schools.com/css/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
                      alt="CSS3"
                      height="50"
                    />
                  </a>
                  CSS3{' '}
                </li>
                <li>
                  <a href="https://sass-lang.com/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/sass-original.svg"
                      alt="Sass"
                      height="50"
                    />
                  </a>
                  Sass{' '}
                </li>
                <li>
                  <a href="https://www.tailwindcss.com/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg"
                      alt="Tailwind CSS"
                      height="50"
                    />
                  </a>
                  TailwindCss{' '}
                </li>
                <li>
                  <a href="https://www.javascript.com/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
                      alt="JavaScript"
                      height="50"
                    />
                  </a>
                  JavaScript{' '}
                </li>
                <li>
                  <a href="https://www.typescriptlang.org/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg"
                      alt="TypeScript"
                      height="50"
                    />
                  </a>
                  TypeScript{' '}
                </li>
              </ul>
            </div>
            <div className={styles.langFlexBox}>
              <ul>
                <li>
                  <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
                      alt="HTML5"
                      height="50"
                    />
                  </a>
                  HTML5
                </li>
                <li>
                  <a href="https://www.w3schools.com/css/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
                      alt="CSS3"
                      height="50"
                    />
                  </a>
                  CSS3{' '}
                </li>
                <li>
                  <a href="https://sass-lang.com/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/sass-original.svg"
                      alt="Sass"
                      height="50"
                    />
                  </a>
                  Sass{' '}
                </li>
                <li>
                  <a href="https://www.tailwindcss.com/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg"
                      alt="Tailwind CSS"
                      height="50"
                    />
                  </a>
                  TailwindCss{' '}
                </li>
                <li>
                  <a href="https://www.javascript.com/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
                      alt="JavaScript"
                      height="50"
                    />
                  </a>
                  JavaScript{' '}
                </li>
                <li>
                  <a href="https://www.typescriptlang.org/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg"
                      alt="TypeScript"
                      height="50"
                    />
                  </a>
                  TypeScript{' '}
                </li>
              </ul>
            </div>
            <div className={styles.langFlexBox}>
              <ul>
                <li>
                  <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
                      alt="HTML5"
                      height="50"
                    />
                  </a>
                  HTML5
                </li>
                <li>
                  <a href="https://www.w3schools.com/css/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
                      alt="CSS3"
                      height="50"
                    />
                  </a>
                  CSS3{' '}
                </li>
                <li>
                  <a href="https://sass-lang.com/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/sass-original.svg"
                      alt="Sass"
                      height="50"
                    />
                  </a>
                  Sass{' '}
                </li>
                <li>
                  <a href="https://www.tailwindcss.com/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg"
                      alt="Tailwind CSS"
                      height="50"
                    />
                  </a>
                  TailwindCss{' '}
                </li>
                <li>
                  <a href="https://www.javascript.com/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
                      alt="JavaScript"
                      height="50"
                    />
                  </a>
                  JavaScript{' '}
                </li>
                <li>
                  <a href="https://www.typescriptlang.org/" target="_blank">
                    <img
                      src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg"
                      alt="TypeScript"
                      height="50"
                    />
                  </a>
                  TypeScript{' '}
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
