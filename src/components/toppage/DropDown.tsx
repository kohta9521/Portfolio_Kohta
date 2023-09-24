import React from 'react'

// react icons
import { ImArrowDownRight2 } from 'react-icons/im'
import { ImArrowDown2 } from 'react-icons/im'

// css import
import styles from './styles/DropDown.module.scss'

// components import
import SectionLine from './SectionLine'
import DropTitle from './DropTitle'
import ProjectTags from './ProjectTags'

const DropDown = () => {
  return (
    <div className={styles.drop}>
      {/* one dropbox box lol */}
      <SectionLine />
      <div className={`${styles.dropBox} ${styles.box1}`}>
        <DropTitle id={0} text="WORKS" />
        <ImArrowDown2 className={styles.arrow} />
      </div>
      {/* sample tag dropdown box */}
      <div className={styles.tagDrop}>
        <ProjectTags tagNumber={0} />
        <ProjectTags tagNumber={0} />
        <ProjectTags tagNumber={0} />
        <ProjectTags tagNumber={0} />
      </div>
      <SectionLine />
      <div className={styles.dropBox}>
        <DropTitle id={0} text="EVENTS" />
        <ImArrowDownRight2 className={styles.arrow} />
      </div>
      <SectionLine />
      <div className={styles.dropBox}>
        <DropTitle id={0} text="ARTICLES" />
        <ImArrowDownRight2 className={styles.arrow} />
      </div>
      <SectionLine />
      <div className={styles.dropBox}>
        <DropTitle id={0} text="PRODUCTS" />
        <ImArrowDownRight2 className={styles.arrow} />
      </div>
      <SectionLine />
    </div>
  )
}

export default DropDown
