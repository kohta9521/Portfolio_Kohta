import React from 'react'

// components import
import Header from '../toppage/Header'

// css import
import styles from './styles/Template1.module.scss'
import Footer from '../toppage/Footer'

// type props
type Props = {
  children: React.ReactNode
  // ture = header contact footer
  // false  = header footer
  templateNumber: boolean
}

const Template = ({ children, templateNumber }: Props) => {
  return (
    <div className={styles.template}>
      {templateNumber ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <>
          <Header />
          {children}
          <h1>false tempalte</h1>
          <Footer />
        </>
      )}
    </div>
  )
}

export default Template
