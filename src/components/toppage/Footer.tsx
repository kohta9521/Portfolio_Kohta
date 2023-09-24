import React from 'react'

// css impot
import styles from './styles/Footer.module.scss'
import Logo from '../common/Logo'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topBox}>
          <div className={styles.logoBox}>
            <Logo />
          </div>
          <div className={styles.rightBox}>
            <div className={styles.menuBox}>
              <ul>
                <li>
                  <Link href={'#projects'} className={styles.footerLink}>
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link href={'#profile'} className={styles.footerLink}>
                    PROFILE
                  </Link>
                </li>
                <li>
                  <Link href={'#portfolio'} className={styles.footerLink}>
                    PORTFOLIO
                  </Link>
                </li>
                <li>
                  <Link href={'#contact'} className={styles.footerLink}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.snsBox}>
              <ul>
                <li>
                  <Link
                    href={'https://github.com/kohta9521'}
                    className={styles.footerLink}
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href={'https://www.instagram.com/k_95.21/'}
                    className={styles.footerLink}
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href={'https://twitter.com/kohta_piano'}
                    className={styles.footerLink}
                  >
                    X(Twitter)
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className={styles.footerLink}>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      'https://www.youtube.com/channel/UCerQZBki_rbxUPTHow0I7rQ'
                    }
                    className={styles.footerLink}
                  >
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.basicBox}>
              <p>mail</p>
              <p>kohta95engineer@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={styles.underBox}>
          <div className={styles.copyright}>
            <p>© Kohta Co. 2023</p>
          </div>
          <div className={styles.plivacyBox}>
            <Link href="/" className={styles.footerLink}>
              Plivacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
