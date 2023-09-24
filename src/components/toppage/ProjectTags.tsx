import React from 'react'
import Link from 'next/link'

// css import
import styles from './styles/ProjectTags.module.scss'

// props type
type Props = {
  id: number
  link: string
  text: string
}

const ProjectTags = ({ id, link, text }: Props) => {
  return (
    <Link key={id} href={link} className={styles.tagsLInk}>
      {text}
    </Link>
  )
}

export default ProjectTags
