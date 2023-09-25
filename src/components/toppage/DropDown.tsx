'use client'
import React, { useEffect, useRef, useState } from 'react'

// react icons
import { ImArrowDownRight2 } from 'react-icons/im'
import { ImArrowDown2 } from 'react-icons/im'

// css import
import styles from './styles/DropDown.module.scss'

// components import
import SectionLine from './SectionLine'
import DropTitle from './DropTitle'
import ProjectTags from './ProjectTags'
import Link from 'next/link'

const DropDown = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const menuRef: any = useRef()

  useEffect(() => {
    isOpen1 && menuRef.current.focus()
  }, [isOpen1])
  useEffect(() => {
    isOpen2 && menuRef.current.focus()
  }, [isOpen2])
  useEffect(() => {
    isOpen3 && menuRef.current.focus()
  }, [isOpen3])
  useEffect(() => {
    isOpen4 && menuRef.current.focus()
  }, [isOpen4])

  return (
    <div className={styles.drop}>
      {/* one dropbox box lol */}
      <SectionLine />
      <a
        className={`${styles.dropBox} ${styles.box1}`}
        onClick={() => setIsOpen1(isOpen1 ? false : true)}
      >
        <DropTitle id={0} text="WORKS" />
        <ImArrowDown2 className={styles.arrow} />
      </a>
      {isOpen1 && (
        <div
          className={styles.tagDrop}
          onBlur={() => setTimeout(() => setIsOpen1(false), 100)}
          ref={menuRef}
        >
          <ProjectTags tagNumber={0} />
          <ProjectTags tagNumber={0} />
          <ProjectTags tagNumber={0} />
        </div>
      )}
      <SectionLine />
      <a
        className={`${styles.dropBox} ${styles.box1}`}
        onClick={() => setIsOpen2(isOpen2 ? false : true)}
      >
        <DropTitle id={0} text="WORKS" />
        <ImArrowDown2 className={styles.arrow} />
      </a>
      {isOpen2 && (
        <div
          className={styles.tagDrop}
          onBlur={() => setTimeout(() => setIsOpen2(false), 100)}
          ref={menuRef}
        >
          <ProjectTags tagNumber={0} />
          <ProjectTags tagNumber={0} />
          <ProjectTags tagNumber={0} />
        </div>
      )}
      <SectionLine />
      <a
        className={`${styles.dropBox} ${styles.box1}`}
        onClick={() => setIsOpen3(isOpen3 ? false : true)}
      >
        <DropTitle id={0} text="WORKS" />
        <ImArrowDown2 className={styles.arrow} />
      </a>
      {isOpen3 && (
        <div
          className={styles.tagDrop}
          onBlur={() => setTimeout(() => setIsOpen3(false), 100)}
          ref={menuRef}
        >
          <ProjectTags tagNumber={0} />
          <ProjectTags tagNumber={0} />
          <ProjectTags tagNumber={0} />
        </div>
      )}
      <SectionLine />
      <a
        className={`${styles.dropBox} ${styles.box1}`}
        onClick={() => setIsOpen4(isOpen4 ? false : true)}
      >
        <DropTitle id={0} text="WORKS" />
        <ImArrowDown2 className={styles.arrow} />
      </a>
      {isOpen4 && (
        <div
          className={styles.tagDrop}
          onBlur={() => setTimeout(() => setIsOpen4(false), 100)}
          ref={menuRef}
        >
          <ProjectTags tagNumber={0} />
          <ProjectTags tagNumber={0} />
          <ProjectTags tagNumber={0} />
        </div>
      )}
      <SectionLine />
    </div>
  )
}

export default DropDown
